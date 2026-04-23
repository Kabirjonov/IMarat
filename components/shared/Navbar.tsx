"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitch";
import { useSession, signIn, signOut } from "next-auth/react";
import { Role } from "@/types";

const navLinks = [
	{ href: "/", label: "Bosh sahifa" },
	{ href: "#projects", label: "Loyihalar" },
	{ href: "#about", label: "Biz haqimizda" },
	// { href: "#news", label: "Yangiliklar" },
	{ href: "#contact", label: "Kontaktlar" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [clickCount, setClickCount] = useState(0);

	useEffect(() => {
		if (clickCount === 3) {
			window.location.href = "/auth"; // login page
			setClickCount(0);
		}
		if (clickCount === 0) return;

		const timer = setTimeout(() => {
			setClickCount(0);
		}, 1500); // 1.5 sekund ichida bosishi kerak

		return () => clearTimeout(timer);
	}, [clickCount]);
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const { data: session, status } = useSession();

	return (
		<motion.nav
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className='w-full sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border shadow-sm'
		>
			<div className='w-[90%] mx-auto flex items-center justify-between h-16 px-4'>
				{/* Logo */}

				{/* Navigation links */}
				<div className='hidden md:flex gap-6'>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
						>
							{link.label}
						</Link>
					))}
					{/* <Button
						size='sm'
						variant='outline'
						className='ml-4'
						onClick={handleSignOut}
					>
						Sign Out
					</Button> */}
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
					<LanguageSwitcher defaultValue='ru' />
					{/* <Button size='sm' variant='outline' className='hidden md:inline-flex'>
						Bog'lanish
					</Button> */}

					{session?.user?.role === Role.ADMIN ? (
						<Button size='sm' onClick={() => (window.location.href = "/admin")}>
							Admin Panel
						</Button>
					) : (
						<Button
							size='default'
							className='hidden md:inline-flex'
							onClick={() => setClickCount(prev => prev + 1)}
						>
							Bog'lanish
						</Button>
					)}
				</div>
			</div>
		</motion.nav>
	);
}
