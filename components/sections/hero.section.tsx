// "use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// export default function HeroSection() {
// 	const { t } = useTranslation();

// 	return (
// 		<section
// 			id='hero'
// 			// className='relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center '

// 		>
// 			{/* Background image */}
// 			{/* <Image
// 				src='/hero_bg.jpg' // o‘zingni rasming
// 				alt='background'
// 				fill
// 				className='object-cover z-0'
// 				priority
// 			/>
// 			<div className='absolute inset-0 bg-black/50 z-10'></div>
// 			<motion.div
// 				initial={{ opacity: 0, y: 40 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 0.8 }}
// 				className='relative z-20 max-w-2xl mx-auto text-white'
// 			>
// 				<h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
// 					{t("hero.title")}
// 				</h1>
// 				<p className='text-lg md:text-xl mb-8'>{t("hero.description")}</p>
// 				<Button
// 					size='lg'
// 					className='px-8 py-6'
// 					onClick={() => {
// 						document.getElementById("projects")?.scrollIntoView({
// 							behavior: "smooth",
// 						});
// 					}}
// 				>
// 					{t("hero.viewProjects")}
// 				</Button>
// 			</motion.div> */}
// 			{/* <motion.div
// 				initial={{ opacity: 0, scale: 0.95 }}
// 				animate={{ opacity: 1, scale: 1 }}
// 				transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
// 				className='mt-12'
// 			>
// 				<Image
// 					src='/window.svg'
// 					alt='Imarat uy qurilishi'
// 					width={320}
// 					height={200}
// 					className='mx-auto rounded-xl shadow-md'
// 				/>
// 			</motion.div> */}
// 			<Swiper
// 				direction={"vertical"}
// 				pagination={{
// 					clickable: true,
// 				}}
// 				modules={[Pagination]}
// 				className='mySwiper'
// 			>
// 				<SwiperSlide>Slide 1</SwiperSlide>
// 				<SwiperSlide>Slide 2</SwiperSlide>
// 				<SwiperSlide>Slide 3</SwiperSlide>
// 				<SwiperSlide>Slide 4</SwiperSlide>
// 				<SwiperSlide>Slide 5</SwiperSlide>
// 				<SwiperSlide>Slide 6</SwiperSlide>
// 				<SwiperSlide>Slide 7</SwiperSlide>
// 				<SwiperSlide>Slide 8</SwiperSlide>
// 				<SwiperSlide>Slide 9</SwiperSlide>
// 			</Swiper>
// 		</section>
// 	);
// }

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// ❗ MUHIM: CSS import
// @ts-ignore
import "swiper/css";
// @ts-ignore

import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section id="hero" className="relative -mt-16 h-[100vh] w-full">
      <div className="relative w-full h-full">
        <Image
          priority
          src="/hero_bg.jpg"
          alt="slide1"
          fill
          className="object-cover"
        />
      </div>
      {/*<Swiper
        pagination={{ clickable: true }}
        direction="vertical"
        loop={false}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              priority
              src="/hero_bg.jpg"
              alt="slide1"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="slice"
                style={{
                  backgroundImage: "url(/hero_bg.jpg)",
                  left: `${i * 12.5}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="slice-horizontal"
                style={{
                  backgroundImage: "url(/hero_bg.jpg)",
                  left: `${i * 12.5}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>*/}
    </section>
  );
}
