"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imagesCarousel } from "../../../mocks/events";

export const CarouselImg = () => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showThumbs={false}
			showStatus={false}
			renderArrowNext={(onClickHandler, hasNext) => (
				<button
					onClick={onClickHandler}
					disabled={!hasNext}
					style={{
						position: "absolute",
						top: "calc(50% - 80px)",
						right: 15,
					}}
				>
					<svg
						width="82"
						height="100"
						viewBox="0 0 82 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Vector" filter="url(#filter0_d_415_557)">
							<path
								d="M59.8975 45.1973L32.706 70.3353C30.8266 72.0728 27.7876 72.0728 25.9281 70.3353L21.4096 66.158C19.5301 64.4205 19.5301 61.611 21.4096 59.892L40.6835 42.0735L21.4096 24.2551C19.5301 22.5176 19.5301 19.7081 21.4096 17.9891L25.9082 13.7748C27.7876 12.0373 30.8266 12.0373 32.686 13.7748L59.8775 38.9128C61.7769 40.6503 61.7769 43.4598 59.8975 45.1973Z"
								fill="white"
							/>
						</g>
						<defs>
							<filter
								id="filter0_d_415_557"
								x="0"
								y="0.47168"
								width="81.3047"
								height="99.167"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB"
							>
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="8" />
								<feGaussianBlur stdDeviation="10" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0.217085 0 0 0 0 0.217085 0 0 0 0 0.217085 0 0 0 0.45 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow_415_557"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_dropShadow_415_557"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</button>
			)}
		>
			{imagesCarousel.map((image, index) => (
				<div key={index} className="relative flex w-full h-[624px]  ">
					<Image
						src={image.src}
						alt={image.alt}
						className="block h-full w-full"
						// bg-slate-950 opacity-[0.5]
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
