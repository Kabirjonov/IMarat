import React from "react";
import { socialLinks } from "../shared/Footer";

export default function ContactSection() {
	return (
		<section
			className='w-full py-16 px-4 md:px-10 bg-background rounded-2xl'
			id='contact'
		>
			<h1 className='text-6xl font-bold text-center mb-12  hover:text-primary  transition-colors duration-300'>
				Kontaktlar
			</h1>
			<div className='max-w-[90%] mx-auto grid md:grid-cols-2 gap-10'>
				{/* Left: Office Info */}
				<div className='bg-white rounded-2xl shadow p-6'>
					{/* <h2 className='text-2xl font-semibold mb-4'>Bosh ofis</h2> */}

					<img
						src='/office.webp'
						alt='Office'
						className='w-full h-60 object-cover rounded-xl mb-4'
					/>

					<p className='text-gray-600 mb-2'>
						Toshkent shahri, Yunusobod tumani
					</p>
					<p className='text-gray-600 mb-4'>Tel: +998 90 123 45 67</p>

					{/* Social Links */}
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
					</div>
				</div>

				{/* Right: Map */}
				<div className='bg-white rounded-2xl shadow p-2'>
					<iframe
						title='Yandex Map'
						src='https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12'
						width='100%'
						height='400'
						frameBorder='0'
						className='rounded-2xl'
					></iframe>
				</div>
			</div>
		</section>
	);
}
