"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { eventsSpectacular } from "@/mocks/events";
import { eventFont } from "@/config/fonts";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";
import spectacular from "@/assets/images/spectacular-section.png";

export const Spectacular = () => {
	return (
		<div id="spectacular" className="pb-1">
			<div className="relative md:mb-14">
			<div className="md:absolute flex items-center justify-between md:justify-start px-11 md:pl-[calc(12%)] lg:pl-24 lg:pt-3 2xl:pt-7 min-[1700px]:px-36">
					<p
						className={`${eventFont.className} text-cyan-800 md:text-white md:pr-6 py-4 text-base md:text-[26px] font-normal lg:text-4xl italic`}
					>
						ESPECTACULARES
					</p>
					<Link href={"/"} className={`text-rose-600 md:text-white text-sm md:text-xl ml-6`}>
						Ver todos
					</Link>
				</div>
				<Image
					src={spectacular}
					alt={"spectacular events"}
					className="hidden md:block h-14 sm:h-16 lg:h-[95px] 2xl:h-[120px] w-full"
				/>
			</div>
			<CarouselCards data={eventsSpectacular} />
		</div>
	);
};

export default Spectacular;
