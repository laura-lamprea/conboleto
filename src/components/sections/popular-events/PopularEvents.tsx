"use client";
import React from "react";
import Link from "next/link";
import { eventFont } from "@/config/fonts";
import { eventsPopular } from "@/mocks/events";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";

export const PopularEvents = () => {
	return (
		<div id="popular" className="md:pb-12">
			<div className="flex items-center justify-between md:justify-start px-[calc(12%)] py-3 md:py-7 sm:py-[38px] lg:px-[90px] min-[1700px]:px-36">
				<p
					className={`${eventFont.className} text-rose-600 text-base md:text-[26px] font-normal lg:text-4xl italic`}
				>
					EVENTOS POPULARES
				</p>
				<Link
					href={"/popular"}
					className={`text-rose-600 text-sm md:text-xl ml-6`}
				>
					Ver todos
				</Link>
			</div>
			<CarouselCards data={eventsPopular} />
		</div>
	);
};

export default PopularEvents;
