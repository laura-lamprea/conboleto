"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "../../../app/globals.css";
import Card from "../../ui/card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg
				width="42"
				height="60"
				viewBox="0 0 42 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M1.40715 27.2744L28.5987 2.13636C30.4781 0.39888 33.5171 0.39888 35.3765 2.13636L39.8951 6.31371C41.7745 8.05119 41.7745 10.8607 39.8951 12.5797L20.6212 30.3981L39.8951 48.2166C41.7745 49.954 41.7745 52.7636 39.8951 54.4826L35.3965 58.6969C33.5171 60.4344 30.4781 60.4344 28.6187 58.6969L1.42715 33.5589C-0.472256 31.8214 -0.47226 29.0119 1.40715 27.2744Z"
					fill="#727272"
				/>
			</svg>
		</div>
	);
}

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<svg
				width="42"
				height="60"
				viewBox="0 0 42 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Vector"
					d="M39.8975 32.7256L12.706 57.8636C10.8266 59.6011 7.78757 59.6011 5.92815 57.8636L1.40956 53.6863C-0.469853 51.9488 -0.469853 49.1393 1.40956 47.4203L20.6835 29.6019L1.40956 11.7834C-0.469853 10.046 -0.469853 7.23642 1.40956 5.51743L5.90815 1.30311C7.78757 -0.43437 10.8266 -0.43437 12.686 1.30311L39.8775 26.4411C41.7769 28.1786 41.7769 30.9881 39.8975 32.7256Z"
					fill="#727272"
				/>
			</svg>
		</div>
	);
}

export const CarouselCards = ({ data }: { data: any }) => {
	const settings = {
		infinite: true,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		speed: 1000,
		autoplaySpeed: 2500,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <PrevArrow className="h-11 w-11" />,
		nextArrow: <NextArrow className="h-11 w-11" />,
	};
	return (
		<div className="px-20">
			<Slider {...settings} className="px-10 justify-between">
				{data.map((item: any, index: number) => (
					<Link href={`/`} key={index}>
						<Card event={item}  />
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default CarouselCards;
