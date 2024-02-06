"use client";
import React from "react";
import Link from "next/link";
import { eventFont } from "@/config/fonts";
import { eventsPopular } from "@/mocks/events";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";

export const PopularEvents = () => {
	return (
		<div className="pb-12">
			<div className="flex px-[calc(12%)] py-7 sm:py-[38px] lg:px-[90px] min-[1700px]:px-36">
				<p
					className={`${eventFont.className} text-rose-600 text-xl sm:text-[26px] font-normal lg:text-4xl italic`}
				>
					EVENTOS POPULARES
				</p>
				<Link
					href={"/popular"}
					className={`text-rose-600 text-xl ml-6 mt-1 hidden sm:block`}
				>
					Ver todos
				</Link>
			</div>
			<CarouselCards data={eventsPopular} />
		</div>
	);
};

export default PopularEvents;
