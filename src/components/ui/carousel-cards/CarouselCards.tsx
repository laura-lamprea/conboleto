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
		slidesToShow: 4,
		speed: 1000,
		autoplaySpeed: 2500,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640,
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
			className="ml-16 mr-24 min-[1920px]:pl-[70px] 2xl:pl-[30px] xl:pl-[40px] lg:pl-[30px] sm:pl-[23px]"
		>
			{data.map((item: any, index: number) => (
				<Link href={`/${item.id}`} key={index}>
					<Card event={item} />
				</Link>
			))}
		</Slider>
	);
};

export default CarouselCards;
