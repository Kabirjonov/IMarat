import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
	return (
		<footer
			id='contact'
			className='w-full mt-20 bg-primary text-white pt-14 pb-6'
		>
			<div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10'>
				{/* 1. Company Info */}
				<div className='flex flex-col gap-4'>
					<h3 className='text-2xl font-bold tracking-wide'>
						Imarat Development
					</h3>

					<p className='text-sm text-white/70 leading-relaxed max-w-sm'>
						Zamonaviy qurilish va development xizmatlari. Sifat va ishonch –
						bizning ustuvor yo‘nalishimiz.
					</p>

					<div className='flex flex-col gap-2 mt-2'>
						<div className='flex items-center gap-2 text-sm'>
							<Phone size={16} />
							<span>+998 90 123 45 67</span>
						</div>

						<div className='flex items-center gap-2 text-sm'>
							<Mail size={16} />
							<span>info@imarat.uz</span>
						</div>

						<div className='flex items-center gap-2 text-sm'>
							<MapPin size={16} />
							<span>Toshkent shahri</span>
						</div>
					</div>
				</div>

				{/* 2. Office */}
				<div className='flex flex-col gap-4'>
					<h3 className='text-xl font-semibold'>Bosh qarorgoh</h3>

					<div className='overflow-hidden rounded-2xl shadow-lg group'>
						<img
							src='/office.webp'
							alt='Office'
							className='w-full h-52 object-cover group-hover:scale-105 transition duration-500'
						/>
					</div>

					<p className='text-sm text-white/70'>
						Markaziy ofis — Toshkent shahri
					</p>
				</div>

				{/* 3. Contact + Map */}
				<div className='flex flex-col gap-5'>
					<h3 className='text-xl font-semibold'>Biz bilan bog‘laning</h3>

					{/* Social */}
					<div className='flex gap-4'>
						<a
							href='https://facebook.com'
							target='_blank'
							className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition'
						>
							<FaFacebook size={18} />
						</a>

						<a
							href='https://instagram.com'
							target='_blank'
							className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition'
						>
							<FaInstagram size={18} />
						</a>
					</div>

					{/* Map */}
					<div className='w-full h-44 rounded-2xl overflow-hidden shadow-md border border-white/10'>
						<iframe
							src='https://yandex.uz/map-widget/v1/?ll=69.2401%2C41.2995&z=12'
							width='100%'
							height='100%'
							frameBorder='0'
						/>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className='border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/60'>
				© 2024 Imarat Development. All rights reserved.
			</div>
		</footer>
	);
}
