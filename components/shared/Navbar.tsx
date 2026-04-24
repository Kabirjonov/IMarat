"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitch";
import { useSession, signIn, signOut } from "next-auth/react";
import { Role } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { DialogDemo } from "../forms/contactForm";
import { useTranslation } from "react-i18next";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const path = usePathname();
	const { t } = useTranslation("navbar");

	const navLinks = [
		{ id: "hero", label: t("home") },
		{ id: "projects", label: t("projects") },
		{ id: "about", label: t("about") },
		{ id: "contact", label: t("contactLink") },
	];

	const router = useRouter();
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = navLinks.map(l => document.getElementById(l.id));

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null,
				threshold: 0.5, // section 50% ko‘rinsa active bo‘ladi
			},
		);

		sections.forEach(sec => {
			if (sec) observer.observe(sec);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setScrolled(window.scrollY > 50);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const { data: session, status } = useSession();
	const isAdminPage = path.startsWith("/admin");
	return (
		<motion.nav
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className='w-full sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border shadow-sm'
		>
			<div className='w-[90%] mx-auto flex items-center justify-between h-16 px-4'>
				<div
					className={cn(
						"hidden md:flex gap-6",
						path === "/admin" && "opacity-0",
					)}
				>
					{navLinks.map(link => (
						<p
							key={link.id}
							onClick={() => {
								document.getElementById(link.id)?.scrollIntoView({
									behavior: "smooth",
								});
							}}
							// className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
							className={cn(
								"text-sm font-medium transition-colors",
								activeSection === link.id
									? "text-primary"
									: "text-muted-foreground hover:text-primary",
							)}
						>
							{link.label}
						</p>
					))}
				</div>
				<Link
					href='/'
					className={`flex items-center gap-2 transition-all duration-300 ${
						scrolled ? "" : "mx-auto"
					}`}
				>
					<motion.div
						animate={{
							scale: scrolled ? 0.7 : 1.3,
						}}
						transition={{ duration: 0.3 }}
					>
						<Image
							src='/imarat-remove-bg.png'
							alt='Imarat logo'
							width={120}
							height={60}
							priority
						/>
					</motion.div>
				</Link>

				{/* Actions: Language switcher & CTA */}
				<div className='flex items-center gap-3'>
					<LanguageSwitcher />
					{session?.user?.role === Role.ADMIN ? (
						isAdminPage ? (
							<Button size='sm' onClick={() => router.push("/")}>
								Home Panel
							</Button>
						) : (
							<Button size='sm' onClick={() => router.push("/admin")}>
								{t("adminPanel")}
							</Button>
						)
					) : null}

					<DialogDemo />
				</div>
			</div>
		</motion.nav>
	);
}
