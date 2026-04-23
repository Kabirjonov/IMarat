"use client";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
	// const t = getTranslations("home");
	return (
		<section
			id='hero'
			className='relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center'
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
					Imarat — zamonaviy uy qurish va sotish kompaniyasi
				</h1>
				<p className='text-lg md:text-xl mb-8'>
					Biz zamonaviy, ishonchli va sifatli uylarni quramiz va sotamiz.
				</p>
				<Link href='#projects'>
					<Button size='lg' className='px-8 py-6'>
						Loyihalarni ko‘rish
					</Button>
				</Link>
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
