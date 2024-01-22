"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../../app/globals.css";
import { eventsSpectacular } from "@/mocks/events";
import { eventFont } from "@/config/fonts";
import CarouselCards from "@/components/ui/carousel-cards/CarouselCards";
import spectacular from "@/assets/images/spectacular-section.png";

export const Spectacular = () => {
	return (
		<div className="mb-12">
			<div className="relative mb-14">
				<div className="absolute flex top-10">
					<p className={`${eventFont.className} pl-[123px] text-4xl italic`}>
						ESPECTACULARES
					</p>
					<Link href={"/"} className={`text-xl ml-6 mt-1`}>
						Ver todos
					</Link>
				</div>
				<Image
					src={spectacular}
					alt={"spectacular events"}
					className="block h-[120px] w-full"
				/>
			</div>
			<CarouselCards data={eventsSpectacular} />
		</div>
	);
};

export default Spectacular;
