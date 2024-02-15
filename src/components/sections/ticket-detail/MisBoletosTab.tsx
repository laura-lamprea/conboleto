"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ticketsDetail } from "@/mocks/events";
import CardTicket from "@/components/ui/card/CardTicket";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MisBoletosTab = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0); // Estado para mantener el índice de la diapositiva activa


	const settings = {
		dots: true,
		infinite: true,
		autoplay: false,
		slidesToShow: 1,
		speed: 1000,
		cssEase: "linear",
		slidesToScroll: 1,
	    customPaging: (index: number) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    flexGrow: 0,
                    margin: "20px 10px 0 0",
                    backgroundColor: activeSlide === index ? "#de1a61" : "#616161", // Cambia el color dependiendo de si es la diapositiva activa o no
                    borderRadius: "50%",
                    cursor: "pointer",
                }}
            />
        ),
        beforeChange: (oldIndex: number, newIndex: number) => {
            setActiveSlide(newIndex); // Actualiza el índice de la diapositiva activa antes de que se cambie
        },
	};

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 640);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isSmallScreen ? (
				<Slider {...settings}>
					{ticketsDetail.map((ticket: any, index: number) => (
						<CardTicket key={index} ticket={ticket} isSmallScreen={true} />
					))}
				</Slider>
			) : (
				<div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-10 2xl:gap-0">
					{ticketsDetail.map((ticket: any, index: number) => (
						<CardTicket key={index} ticket={ticket} isSmallScreen={false} />
					))}
				</div>
			)}
		</>
	);
};

export default MisBoletosTab;
