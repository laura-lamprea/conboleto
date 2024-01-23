"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imagesCarousel } from "@/mocks/events";
import { IconArrowNext, IconArrowPrev } from "@/assets/figmaIcons";


export const CarouselImg = () => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showArrows={true}
			showThumbs={false}
			showStatus={false}
			renderArrowNext={(onClickHandler, hasNext) => (
				<button
					onClick={onClickHandler}
					disabled={!hasNext}
					style={{
						position: "absolute",
						top: "calc(50% - 80px)",
						right: 55,
					}}
				>
					<IconArrowNext />
				</button>
			)}
			// renderArrowPrev={(onClickHandler, hasPrev) => (
			// 	<button
			// 		onClick={onClickHandler}
			// 		disabled={!hasPrev}
			// 		style={{
			// 			position: "absolute",
			// 			top: "calc(50% - 80px)",
			// 			left: 15,
			// 		}}
			// 	>
			// 		<IconArrowPrev />
			// 	</button>
			// )}
		>
			{imagesCarousel.map((image, index) => (
				<div key={index} className="relative flex w-full h-[624px]  ">
					<Image
						src={image.src}
						alt={image.alt}
						className="block h-full w-full"
					/>
					<div className="absolute h-44 bottom-0 w-full  bg-gradient-to-t from-slate-900 to-transparent "></div>
					<div className="flex w-full items-center justify-between absolute bottom-14 px-[123px]">
						<div className="text-left -space-y-4">
							<p className="text-white text-[44px] font-bold">
								NBA en México: Orlando vs Atlanta
							</p>
							<p className="text-[32px]">28 de Marzo</p>
							<p className="text-[32px]">Arena CDMX</p>
						</div>
						<button className="w-[195px] h-14 bg-rose-600 rounded-xl border border-rose-600">
							Ver boletos
						</button>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselImg;
