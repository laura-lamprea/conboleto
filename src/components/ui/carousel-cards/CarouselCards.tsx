"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "../../../app/globals.css";
import Card from "../../ui/card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowNext, IconArrowPrev } from "@/assets/figmaIcons";

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsVisible(window.innerWidth >= 640);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div
			className={className}
			style={{
				...style,
				marginTop: "-40px",
				visibility: isVisible ? "visible" : "hidden",
			}}
			onClick={onClick}
		>
			<IconArrowPrev fillColor={"#727272"} />
		</div>
	);
}

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsVisible(window.innerWidth >= 640);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={className}
			style={{
				...style,
				marginTop: "-40px",
				visibility: isVisible ? "visible" : "hidden",
			}}
			onClick={onClick}
		>
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
				breakpoint: 1270,
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
		prevArrow: <PrevArrow className="slick-prev " />,
		nextArrow: <NextArrow className="slick-next " />,
	};
	return (
		<Slider
			{...settings}
			className="max-w-[320px] pl-12 sm:max-w-[600px] sm:pl-10 sm:ml-10 md:max-w-[660px] md:pl-16 lg:max-w-[900px] lg:pl-12 lg:ml-12 xl:max-w-[1150px] xl:pl-11 xl:ml-14 2xl:max-w-[1400px] min-[1700px]:max-w-[1700px] min-[1700px]:ml-16 min-[1700px]:pl-[76px]"
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
