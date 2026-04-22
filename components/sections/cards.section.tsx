"use client";
import { Search, MapPin, List } from "lucide-react";
import Link from "next/link";

import { Input } from "../ui/input";
import { IProject } from "@/types";
import ProductCard from "../cards/ProductCard";

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

export default function CardsSection({ projects }: { projects: IProject[] }) {
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
				<div className='flex items-center cursor-pointer gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors'>
					<Input
						placeholder='Barcha loyihalarni ko‘rish'
						className='w-full py-0'
					/>
					<Search className='w-4 h-4 ' />
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{projects.map((project, index) => (
					<ProductCard key={index} project={project} />
				))}
			</div>
		</section>
	);
}
