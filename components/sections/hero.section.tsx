"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	// Debug: Check if translation function works
	console.log("HeroSection - t function:", typeof t);
	console.log("HeroSection - hero.title translation:", t("hero.title"));
	console.log("HeroSection - title translation:", t("title"));

	return (
		<section
			id='hero'
			className='relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center'
		>
			{/* Background image */}
			<Image
				src='/hero_bg.jpg' // o‘zingni rasming
				alt='background'
				fill
				className='object-cover z-0'
				priority
			/>
			<div className='absolute inset-0 bg-black/50 z-10'></div>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='relative z-20 max-w-2xl mx-auto text-white'
			>
				<h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
					{t("hero.title")}
				</h1>
				<p className='text-lg md:text-xl mb-8'>{t("hero.description")}</p>
				<Button
					size='lg'
					className='px-8 py-6'
					onClick={() => {
						document.getElementById("projects")?.scrollIntoView({
							behavior: "smooth",
						});
					}}
				>
					{t("hero.viewProjects")}
				</Button>
			</motion.div>
			{/* <motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
				className='mt-12'
			>
				<Image
					src='/window.svg'
					alt='Imarat uy qurilishi'
					width={320}
					height={200}
					className='mx-auto rounded-xl shadow-md'
				/>
			</motion.div> */}
		</section>
	);
}
