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
		<div className="pb-12">
			<div className="relative mb-14">
				<div className="absolute flex items-center pl-[calc(12%)] lg:pl-24 lg:pt-3 2xl:pt-7 min-[1700px]:px-36">
					<p
						className={`${eventFont.className} pr-6 py-4 text-xl sm:text-[26px] font-normal lg:text-4xl italic`}
					>
						ESPECTACULARES
					</p>
					<Link href={"/"} className={`text-xl ml-6 mt-1 hidden sm:block`}>
						Ver todos
					</Link>
				</div>
				<Image
					src={spectacular}
					alt={"spectacular events"}
					className="block h-14 sm:h-16 lg:h-[95px] 2xl:h-[120px] w-full"
				/>
			</div>
			<CarouselCards data={eventsSpectacular} />
		</div>
	);
};

export default Spectacular;
