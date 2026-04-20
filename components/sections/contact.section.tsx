import React from "react";

export default function ContactSection() {
	return (
		<div id='contact'>
			<h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
			<p className='text-lg mb-6'>
				Feel free to reach out to us for any inquiries or collaborations.
			</p>
			<a href='mailto:info@imarat.uz' className='text-primary hover:underline'>
				info@imarat.uz
			</a>
			<ins>123-456-7890</ins>
		</div>
	);
}
