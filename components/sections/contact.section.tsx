"use client";
import { OfficeImages, socialLinks } from "../shared/Footer";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdMailOutline, MdOutlineAlternateEmail } from "react-icons/md";
export default function ContactSection() {
	const { t } = useTranslation();
	return (
		<section
			className='w-full py-16 px-4 md:px-10 bg-background rounded-2xl'
			id='contact'
		>
			<h1 className='text-6xl font-bold text-center mb-12 text-secondary-foreground hover:text-primary  transition-colors duration-300'>
				{t("contact.title")}
			</h1>
			<div className='max-w-[90%] mx-auto grid md:grid-cols-2 gap-10'>
				<div className='bg-white rounded-2xl shadow overflow-hidden'>
					<img src={OfficeImages[0]} className='w-full h-64 object-cover' />

					{/* Info section BELOW images */}
					<div className='p-5 grid grid-cols-1 lg:grid-cols-2'>
						<div>
							<h3 className='text-xl font-semibold mb-3'>
								{t("contact.mainOffice")}
							</h3>

							<ul className='text-sm text-gray-600 space-y-2 mb-4'>
								<li className='flex items-center gap-2'>
									<FaMapMarkerAlt /> Address:{t("contact.address")}
								</li>
								<li className='flex items-center gap-2'>
									<FaPhone /> Phone:{t("contact.phone")}
								</li>
								<li className='flex items-center gap-2'>
									<MdOutlineAlternateEmail />
									{t("contact.email")}
								</li>
							</ul>
							<div className='flex gap-3'>
								{socialLinks.map(link => (
									<a key={link.name} href={link.url} target='_blank'>
										<link.icon
											className='text-gray-600 hover:text-primary'
											size={22}
										/>
									</a>
								))}
							</div>
						</div>
						<img
							src={OfficeImages[0]}
							className='w-full h-40 hidden lg:block object-cover'
						/>
					</div>
				</div>
				<div className='bg-white rounded-2xl shadow overflow-hidden'>
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
								zoom: 13,
							}}
							width='100%'
							height={450}
						>
							<Placemark geometry={[41.243498, 69.299256]} />
						</Map>
					</YMaps>
				</div>
			</div>
		</section>
	);
}
