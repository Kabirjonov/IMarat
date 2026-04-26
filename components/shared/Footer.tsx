"use client";
import { Send } from "lucide-react";
import { FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const OfficeImages = [
	"/office.webp",
	"/office.webp",
	"/hero_bg.jpg",
	"/hero_bg.jpg",
	"/office.webp",
	"/hero_bg.jpg",
];
export const socialLinks = [
	{ name: "Telegram", url: "https://t.me/imarat_development", icon: Send },
	{
		name: "Instagram",
		url: "https://instagram.com/imarat.development",
		icon: FaInstagram,
	},
	{
		name: "Facebook",
		url: "https://facebook.com/imaratdevelopment",
		icon: FaFacebook,
	},
	{
		name: "YouTube",
		url: "https://youtube.com/@imaratdevelopment",
		icon: FaYoutube,
	},
	{ name: "Phone", url: "tel:+998901234567", icon: FaPhone },
];
export default function Footer() {
	const { t } = useTranslation("footer");
	return (
		<footer id='contact'>
			<div className='max-w-[90%] mx-auto flex justify-center items-center py-6 '>
				<div className='flex gap-8 mt-4'>
					{socialLinks.map(link => (
						<a
							key={link.name}
							href={link.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<link.icon
								size={28}
								className='text-muted-foreground hover:text-primary transition-colors duration-300 '
							/>
						</a>
					))}
				</div>
			</div>
			<div className='bg-primary text-gray-300  p-8 '>
				{/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[90%] mx-auto'> */}
				<div
					className='max-w-[90%] mx-auto 
                  grid grid-cols-1 md:grid-cols-2 
                  lg:flex lg:justify-between lg:items-start gap-6'
				>
					{/* Left */}
					<div>
						<div className='w-full flex md:justify-start justify-center'>
							<img
								src='/whitelogo.png'
								alt='Company Logo'
								className='w-52 mb-4 '
							/>
						</div>
						<p className='text-sm leading-relaxed'>
							Maecenas eu placerat ante. Fusce ut neque justo, et aliquet enim.
							In hac habitasse platea dictumst. Nullam commodo eu erat.
						</p>
						<p className='text-xs mt-4'>© 2016 Maker Pty Ltd.</p>
					</div>

					{/* Center (lg da yashirin) */}
					{/* <div className='hidden md:block'>
						<h3 className='text-white font-semibold mb-3'>MEET MAKER</h3>
						<ul className='space-y-2 text-sm'>
							<li>About Maker</li>
							<li>Explore our Ecosystem</li>
							<li>Careers</li>
							<li>Community Meetups</li>
							<li>Help Center</li>
							<li>Contact Us</li>
						</ul>
					</div> */}

					{/* Right */}
					<div>
						<h3 className='text-white font-semibold mb-3'>PHOTOGALLERY</h3>
						<div className='grid grid-cols-3 gap-2'>
							{OfficeImages.map((src, index) => (
								<img
									key={index}
									src={src}
									alt={`Gallery ${index + 1}`}
									className='w-full h-20 object-cover rounded'
								/>
							))}
						</div>
					</div>
				</div>

				{/* Bottom text */}
				<div className='text-center border-t border-muted text-sm text-gray-400  mt-6 pt-4'>
					{t("copyright")}
				</div>
			</div>
		</footer>
	);
}
