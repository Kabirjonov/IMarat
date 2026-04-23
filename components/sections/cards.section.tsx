"use client";
import { useState, useMemo } from "react";
import { Search, List } from "lucide-react";
import Link from "next/link";

import { Input } from "../ui/input";
import { IProject } from "@/types";
import ProductCard from "../cards/ProductCard";
import { ProductCardSkeleton } from "../loadings/ProductCardSkeleton";

const searchLinks = [
	{
		label: "KATEGORIYA bo‘yicha qidirish",
		icon: List,
		href: "/search?by=category",
	},
];

export default function CardsSection({
	projects,
	loading,
}: {
	projects: IProject[];
	loading: boolean;
}) {
	const [search, setSearch] = useState("");

	// 🔍 filter qilingan list
	const filteredProjects = useMemo(() => {
		return projects.filter(project =>
			project.title?.toLowerCase().includes(search.toLowerCase()),
		);
	}, [projects, search]);

	return (
		<section id='projects' className='max-w-[90%] mx-auto w-full '>
			<div className='w-full flex items-center justify-between py-6 px-2'>
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

				{/* 🔍 SEARCH */}
				<div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground'>
					<Input
						placeholder='Loyihalarni qidirish...'
						className='w-full py-0'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<Search className='w-4 h-4' />
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{loading &&
					Array.from({ length: 8 }).map((_, i) => (
						<ProductCardSkeleton key={i} />
					))}

				{/* EMPTY */}
				{!loading && filteredProjects.length === 0 && (
					<div className='col-span-full text-center py-10 text-muted-foreground'>
						Ma’lumot topilmadi
					</div>
				)}

				{/* DATA */}
				{!loading &&
					filteredProjects.map((project, index) => (
						<ProductCard key={index} project={project} />
					))}
			</div>
		</section>
	);
}
