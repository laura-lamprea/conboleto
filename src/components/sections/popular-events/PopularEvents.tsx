"use client";
import React from "react";
import Link from "next/link";
import "../../../app/globals.css";
import { eventFont } from "../../../config/fonts";
import { eventsPopular } from "../../../mocks/events";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";

export const PopularEvents = () => {
	return (
		<div className="pb-12">
			<div className="flex px-[123px] py-[38px]">
				<p className={`${eventFont.className} text-rose-600 text-[26px] font-normal lg:text-4xl italic`}>
					EVENTOS POPULARES
				</p>
				<Link href={"/"} className={`text-rose-600 text-xl ml-6 mt-1`}>
					Ver todos
				</Link>
			</div>
			<CarouselCards data={eventsPopular} />
		</div>
	);
};

export default PopularEvents;
