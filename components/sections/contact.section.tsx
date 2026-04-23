"use client";
import React from "react";
import { OfficeImages, socialLinks } from "../shared/Footer";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FiPlusCircle, FiMapPin } from "react-icons/fi";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
export default function ContactSection() {
	return (
		<section
			className='w-full py-16 px-4 md:px-10 bg-background rounded-2xl'
			id='contact'
		>
			<h1 className='text-6xl font-bold text-center mb-12 text-secondary-foreground hover:text-primary  transition-colors duration-300'>
				Kontaktlar
			</h1>
			<div className='max-w-[90%] mx-auto grid md:grid-cols-2 gap-10'>
				{/* Left: Office Info */}
				<div className='bg-white rounded-2xl shadow relative '>
					{/* <h2 className='text-2xl font-semibold mb-4'>Bosh ofis</h2> */}
					<Carousel
						className=' overflow-hidden'
						opts={{ align: "start", loop: true }}
					>
						<CarouselContent>
							{OfficeImages.map((src, index) => (
								<CarouselItem key={index}>
									<div className='w-full h-90'>
										<img
											src={src}
											alt={`Gallery ${index + 1}`}
											className='w-full h-90 object-cover rounded-xl'
										/>

										{/* OVERLAY */}
										<div className='absolute inset-0 bg-black/50 text-white p-5 flex flex-col justify-end rounded-xl'>
											<p className='text-lg font-semibold mb-2'>Contact Info</p>

											<ul className='space-y-1 text-sm mb-3'>
												<li>About Maker</li>
												<li>Explore our Ecosystem</li>
												<li>Careers</li>
												<li>Community Meetups</li>
												<li>Help Center</li>
												<li>Contact Us</li>
											</ul>

											<div className='flex gap-3'>
												{socialLinks.map(link => (
													<a
														key={link.name}
														href={link.url}
														target='_blank'
														rel='noopener noreferrer'
													>
														<link.icon
															size={24}
															className='text-white hover:text-primary transition'
														/>
													</a>
												))}
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					{/* <p className='text-gray-600 mb-2'>
						Toshkent shahri, Yunusobod tumani
					</p>
					<p className='text-gray-600 mb-4'>Tel: +998 90 123 45 67</p>

					<div className='flex gap-4 mt-4'>
						{socialLinks.map(link => (
							<a
								key={link.name}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<link.icon
									size={24}
									className='text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline'
								/>
							</a>
						))}
					</div> */}
				</div>

				<div className='bg-white rounded-2xl shadow '>
					{/* <iframe
						title='Yandex Map'
						src='https://yandex.com/map-widget/v1/?ll=69.298403%2C41.241297&z=12'
						// src='https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12'
						width='100%'
						height='400'
						frameBorder='0'
						className='rounded-2xl'
					>
					</iframe> */}
					<YMaps>
						<Map
							defaultState={{
								center: [41.243498, 69.299256],
								zoom: 12,
							}}
							width='100%'
							height={300}
						>
							<Placemark geometry={[41.243498, 69.299256]} />
						</Map>
					</YMaps>
				</div>
			</div>
		</section>
	);
}
