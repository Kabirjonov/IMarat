"use client";
import React from "react";
import { Button } from "../ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
const pdfCarusel = [
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: "/hero_bg.jpg",
		pdf: "/pdfs/resume.pdf",
		location: "Toshkent",
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: "/hero_bg.jpg",
		pdf: "/pdfs/resume.pdf",
		location: "Toshkent",
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: "/hero_bg.jpg",
		pdf: "/pdfs/resume.pdf",
		location: "Toshkent",
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: "/hero_bg.jpg",
		pdf: "/pdfs/resume.pdf",
		location: "Toshkent",
		createdAt: "2024-2026",
	},
	{
		title: "Loyiha 1",
		description: "Bu loyiha haqida qisqacha ma'lumot.",
		image: "/hero_bg.jpg",
		pdf: "/pdfs/resume.pdf",
		location: "Toshkent",
		createdAt: "2024-2026",
	},
];

import Autoplay from "embla-carousel-autoplay";
export default function ShowPDFSection() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true }),
	);
	return (
		<section
			id='about'
			className='bg-muted px-4 py-12 w-full flex flex-col items-center'
		>
			{/* TITLE */}
			<div className='max-w-4xl mx-auto text-center mb-8'>
				<h2 className='font-bold text-2xl sm:text-3xl md:text-5xl'>
					<span className='font-sans'>Imarat development</span> toliq
				</h2>

				<Button variant='link' className='mt-4'>
					Download PDF
				</Button>
			</div>

			{/* CAROUSEL */}
			<div className='w-full max-w-6xl'>
				<Carousel
					opts={{ align: "start" }}
					plugins={[plugin.current]}
					// className='w-full max-w-[10rem] sm:max-w-xs'
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						{pdfCarusel.map((item, index) => (
							<CarouselItem
								key={index}
								className='pl-2 md:basis-1/2 lg:basis-1/3'
							>
								<div className='p-2'>
									<a href={item.pdf} download className='block group'>
										<div className='relative overflow-hidden rounded-lg shadow border'>
											{/* IMAGE */}
											<img
												src={item.image}
												alt={item.title}
												className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105'
											/>

											{/* OVERLAY */}
											<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4'>
												<h2 className='text-white text-xl font-bold'>
													{item.title}
												</h2>

												<p className='text-sm text-gray-200'>
													{item.description}
												</p>

												<div className='text-xs text-gray-300 mt-1'>
													📍
													<span className='text-primary font-medium'>
														{item.location + " "}
													</span>
													• {item.createdAt}
												</div>
											</div>
										</div>
									</a>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			{/* <div className='w-full max-w-4xl mt-10'>
				<embed
					src='/imarat.pdf'
					type='application/pdf'
					className='w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg shadow border'
				/>
			</div> */}
		</section>
	);
}
