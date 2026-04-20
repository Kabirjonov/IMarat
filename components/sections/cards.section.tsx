"use client";
import React, { useRef } from "react";
import { Search, MapPin, List } from "lucide-react";
import Link from "next/link";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export const mockCards = [
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: ["/hero_bg.jpg", "/hero_bg.jpg", "/hero_bg.jpg"],
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 2",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: ["/hero_bg.jpg", "/hero_bg.jpg", "/hero_bg.jpg"],
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 3",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: ["/hero_bg.jpg", "/hero_bg.jpg", "/hero_bg.jpg"],
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 4",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: ["/hero_bg.jpg", "/hero_bg.jpg", "/hero_bg.jpg"],
		createdAt: "2024-2026",
	},
];
const searchLinks = [
	{
		label: "REGION bo‘yicha qidirish",
		icon: MapPin,
		href: "/search?by=region",
	},
	{
		label: "KATEGORIYA bo‘yicha qidirish",
		icon: List,
		href: "/search?by=category",
	},
];
export default function CardsSection() {
	const plugin = useRef(
		Autoplay({
			delay: 2500, // 2.5 sekund
			stopOnInteraction: false, // user swipe qilsa ham davom etadi
		}),
	);
	return (
		<section id='projects' className='max-w-[90%] mx-auto w-full pb-16'>
			<div className='w-full flex items-center justify-between py-6 px-2  '>
				<div className='flex gap-4'>
					{searchLinks.map(item => (
						<Link
							key={item.href}
							href={item.href}
							className='flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-primary/10 transition-colors text-sm font-medium shadow group'
						>
							<item.icon className='w-5 h-5 text-primary group-hover:scale-110 transition-transform' />
							{item.label}
						</Link>
					))}
				</div>
				<Link
					href='/projects'
					className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors'
				>
					<span>Barcha loyihalarni ko‘rish</span>
					<Search className='w-4 h-4' />
				</Link>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{mockCards.map((card, index) => (
					<div
						key={index}
						className='bg-card border group  border-border rounded-lg shadow-sm p-6 '
					>
						<Carousel
							className='relative overflow-hidden'
							opts={{ align: "start", loop: true }} // loop qo‘shildi
							plugins={[plugin.current]} // autoplay plugin
						>
							<CarouselContent>
								{card.image.map((img, i) => (
									<CarouselItem key={i}>
										<img
											src={img}
											alt={`${card.title}-${i}`}
											className='w-full h-48 object-cover rounded-md mb-4 duration-300 group-hover:scale-105 transition-transform'
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						<h3 className='text-xl font-bold mb-2'>{card.title}</h3>
						<p className='text-muted-foreground mb-4'>{card.description}</p>
						<p className='text-sm text-muted-foreground'>{card.createdAt}</p>
					</div>
				))}
			</div>
		</section>
	);
}
