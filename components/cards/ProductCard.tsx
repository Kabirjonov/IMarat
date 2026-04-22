"use client";
import { IProject } from "@/types";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from "../ui/dialog";

export default function ProductCard({ project }: { project: IProject }) {
	const plugin = useRef(
		Autoplay({
			delay: 2500,
			stopOnInteraction: false,
		}),
	);

	return (
		<div className='bg-card border group border-border rounded-lg shadow-sm p-6'>
			{/* CAROUSEL */}
			<Carousel
				className='relative overflow-hidden'
				opts={{ align: "start", loop: true }}
				plugins={[plugin.current]}
			>
				<CarouselContent>
					{project.images.map((img, i) => (
						<CarouselItem key={i}>
							<img
								src={img}
								alt={`${project.title}-${i}`}
								className='w-full h-48 object-cover rounded-md mb-4 duration-300 group-hover:scale-105 transition-transform'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			{/* BASIC INFO */}
			<h3 className='text-xl font-bold mb-2 flex justify-between'>
				{project.title}
				<span className='text-primary text truncate w-1/2 text-right'>
					{project.address}
				</span>
			</h3>

			<p className='text-muted-foreground mb-4 line-clamp-2'>
				{project.description}
			</p>

			<p className='text-sm text-muted-foreground'>
				{new Date(project.createdAt).toLocaleDateString()}
			</p>

			{/* 🔥 DIALOG */}
			<Dialog>
				<DialogTrigger asChild>
					<Button className='w-full mt-3'>Batafsil</Button>
				</DialogTrigger>

				<DialogContent className='max-w-3xl'>
					<DialogHeader>
						<DialogTitle>{project.title}</DialogTitle>
						<DialogDescription>{project.address}</DialogDescription>
					</DialogHeader>

					{/* FULL CONTENT */}
					<div className='space-y-4'>
						{/* KATTA CAROUSEL */}
						<Carousel opts={{ loop: true }}>
							<CarouselContent>
								{project.images.map((img, i) => (
									<CarouselItem key={i}>
										<img
											src={img}
											className='w-full h-64 object-cover rounded-md'
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>

						{/* DESCRIPTION */}
						<p>{project.description}</p>

						{/* EXTRA DATA */}
						<div className='grid grid-cols-2 gap-4 text-sm'>
							<p>
								<b>Type:</b> {project.type}
							</p>
							<p>
								<b>Status:</b> {project.status}
							</p>

							{project.rooms && (
								<p>
									<b>Rooms:</b> {project.rooms}
								</p>
							)}

							{project.area && (
								<p>
									<b>Area:</b> {project.area} m²
								</p>
							)}

							{project.shortDesc && (
								<p className='col-span-2'>
									<b>Short:</b> {project.shortDesc}
								</p>
							)}
						</div>

						{/* DATE */}
						<p className='text-xs text-muted-foreground'>
							Yaratilgan: {new Date(project.createdAt).toLocaleString()}
						</p>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
