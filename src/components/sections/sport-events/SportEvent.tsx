"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { eventsSpectacular } from "@/mocks/events";
import { eventFont } from "@/config/fonts";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";
import sport from "@/assets/images/sport-section.png";

export const SportEvent = () => {
	return (
		<div className="mb-12">
			<div className="relative mb-14">
				<div className="absolute flex top-10">
					<p className={`${eventFont.className} pl-[123px] text-4xl italic`}>
						EVENTOS DEPORTIVOS
					</p>
					<Link href={"/sports"} className={`text-xl ml-6 mt-1`}>
						Ver todos
					</Link>
				</div>
				<Image
					src={sport}
					alt={"sports events"}
					className="block h-[120px] w-full"
				/>
			</div>
			<CarouselCards data={eventsSpectacular} />
		</div>
	);
};

export default SportEvent;
