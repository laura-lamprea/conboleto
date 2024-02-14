"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imagesCarousel } from "@/mocks/events";
import { IconArrowNext, IconArrowPrev } from "@/assets/figmaIcons";

export const CarouselImg = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) =>
			prev === imagesCarousel.length - 1 ? 0 : prev + 1
		);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) =>
			prev === 0 ? imagesCarousel.length - 1 : prev - 1
		);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide(); 
		}, 4000);
		return () => clearInterval(intervalId); 
	}, []);

	return (
		<>
			<div
				id="carouselExampleCaptions"
				className="relative"
				data-te-carousel-init
				data-te-ride="carousel"
			>
				{/* <!--Carousel indicators--> */}
				<div
					className="absolute bottom-5 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
					data-te-carousel-indicators
				>
					{imagesCarousel.map((image, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							type="button"
							data-te-target="#carouselExampleCaptions"
							data-te-slide-to="0"
							data-te-carousel-active
							className={`mx-1 sm:mx-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-5 lg:h-5 flex-initial cursor-pointer rounded-full  ${
								index === currentSlide ? 'bg-rose-600' : 'bg-gray-400'
							  }`}
							aria-current="true"
							aria-label="Slide 1"
						></button>
					))}
				</div>
				{/* <!--Carousel items--> */}
				<div className="relative w-full h-[280px] sm:h-[380px] lg:h-[450px] 2xl:h-[750px] overflow-hidden">
					{imagesCarousel.map((image, index) => (
						<div
							key={index}
							className={`relative float-left -mr-[100%] w-full h-full transition-opacity ease-in-out duration-1000 ${
								index === currentSlide ? "opacity-100" : "opacity-0"
							}`}
							data-te-carousel-active
							data-te-carousel-item
						>
							<Image src={image.src} className="block w-full h-full" alt={image.alt} />
							<div className="absolute h-44 bottom-0 w-full  bg-gradient-to-t from-slate-900 to-transparent "></div>
							<div className="flex w-full items-center justify-between absolute bottom-14 px-5 sm:px-10 md:px-[123px]">
								<div className="text-left -space-y-1 xl:space-y-1">
									<p className="text-white text-sm sm:text-2xl xl:text-4xl 2xl:text-[44px] font-bold">
										NBA en México: Orlando vs Atlanta
									</p>
									<p className="text-xs sm:text-lg xl:text-[32px]">28 de Marzo</p>
									<p className="text-xs sm:text-lg xl:text-[32px]">Arena CDMX</p>
								</div>
								<button className="text-sm md:text-base 2xl:text-xl w-[100px] h-8 sm:w-32 sm:h-10 md:w-[100px] md:h-12 lg:w-[195px] lg:h-14 bg-rose-600 rounded-xl border border-rose-600">
									Ver boletos
								</button>
							</div>
						</div>
					))}
				</div>

				{/* <!--Carousel controls - prev item--> */}
				<button
					onClick={prevSlide}
					className="hidden md:block"
					style={{
						position: "absolute",
						top: "calc(50% - 80px)",
						left: 55,
					}}
				>
					<IconArrowPrev />
				</button>
				{/* <!--Carousel controls - next item--> */}
				<button
					onClick={nextSlide}
					className="hidden md:block"
					style={{
						position: "absolute",
						top: "calc(50% - 80px)",
						right: 55,
					}}
				>
					<IconArrowNext />
				</button>
			</div>
		</>
	);
};

export default CarouselImg;
