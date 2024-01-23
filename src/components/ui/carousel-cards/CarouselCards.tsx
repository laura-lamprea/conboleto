"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "../../../app/globals.css";
import Card from "../../ui/card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowNext, IconArrowPrev } from "@/assets/figmaIcons";

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={style} onClick={onClick}>
			<IconArrowPrev fillColor={"#727272"} />
		</div>
	);
}

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<IconArrowNext fillColor={"#727272"} />
		</div>
	);
}

export const CarouselCards = ({ data }: { data: any }) => {
	const settings = {
		infinite: true,
		autoplay: true,
		centerPadding: "700px",
		slidesToShow: 4,
		// slidesToScroll: 3,
		speed: 1000,
		autoplaySpeed: 2500,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1696,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};
	return (
		<Slider
			{...settings}
			className="ml-16 mr-24 xl:pl-[calc(5%)] lg:pl-[calc(10%)] md:pl-[calc(23%)] sm:pl-[calc(12%)]"
		>
			{data.map((item: any, index: number) => (
				<Link href={`/`} key={index}>
					<Card event={item} />
				</Link>
			))}
		</Slider>
	);
};

export default CarouselCards;
