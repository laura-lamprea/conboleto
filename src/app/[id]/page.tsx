"use client";
import React, { useState, useEffect } from "react";
import spotifyButton from "@/assets/images/spotify.png";
import appleButton from "@/assets/images/apple.png";
import youtubeButton from "@/assets/images/youtube.png";
import mapaDefault from "@/assets/images/mapaDefault.png";
import mayer from "@/mocks/images/mayer.png";
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaQrcode, FaLeaf } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import BuyTickets from "@/components/ui/buy-ticket/BuyTickets";
import ImageEvent from "@/components/ui/image-event/ImageEvent";

const Detail = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const styleIcon = { fontSize: "30px", color: "#DE1A61" };
	const labels = [
		{
			icono: <PiMoneyFill style={styleIcon} />,
			title: "Sin cargos ocultos",
			subtitle: "El precio que ves, es el que pagas",
		},
		{
			icono: <FaQrcode style={styleIcon} />,
			title: "Boletos electrónicos",
			subtitle: "Olvídate de hacer fila para imprimir tu boleto",
		},
		{
			icono: <FaShieldAlt style={styleIcon} />,
			title: "Compra portegida",
			subtitle: "Te devolvemos tu dinero en caso de cancelación",
		},
		{
			icono: <FaLeaf style={styleIcon} />,
			title: "0% papel",
			subtitle: "Tu boleto electrónico ayudará a cuidar el medio ambiente",
		},
	];

	const center = {
		lat: -3.745,
		lng: -38.523,
	};

	const containerStyle = {
		width: windowWidth <= 1024 ? "auto" : "726px",
		height: windowWidth <= 1024 ? "350px" : "726px",
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		// googleMapsApiKey: process.env.API_KEY_GOOGLE_MAPS ?? "",
		googleMapsApiKey: "AIzaSyA-tl41KYaH1lsZLBjM7-AP9fGfNkf9kNg" ?? "",
	});
	const onLoad = (map: google.maps.Map) => {
		// console.log("map: ", map);
	};

	return (
		<div className="">
			<ImageEvent />
			<div className="px-4 sm:px-[70px] py-7">
				<div className="flex space-x-1">
					<Link href={"/"}>
						<Image className="h-8 w-[83px] md:h-10 md:w-[109px]" src={spotifyButton} alt="mayer" />{" "}
					</Link>
					<Link href={"/"}>
						<Image className="h-8 w-[83px] md:h-10 md:w-[109px]" src={appleButton} alt="mayer" />
					</Link>
					<Link href={"/"}>
						<Image className="h-8 w-[83px] md:h-10 md:w-[109px]" src={youtubeButton} alt="mayer" />
					</Link>
				</div>

				<div className="flex flex-col-reverse justify-center xl:flex-row xl:justify-between">
					<div>
						<div className="text-zinc-800 text-xl sm:text-[32px] font-bold mt-12">
							Mapa del evento
						</div>
						<Image className="mt-7" src={mapaDefault} alt="map" />

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-20">
							{labels.map((label, index: number) => (
								<div className="flex gap-3 items-center " key={index}>
									<div className="w-12 h-12 p-2 flex items-center justify-center bg-pink-200 rounded-lg">
										{label.icono}
									</div>
									<div>
										<p className="text-zinc-800 text-lg sm:text-2xl font-bold ">
											{label.title}
										</p>
										<p className="text-zinc-800 text-sm sm:text-base font-light ">
											{label.subtitle}
										</p>
									</div>
								</div>
							))}
						</div>

						<div className="w-full flex flex-col items-left justify-between mt-[90px] mb-7">
							<p className="text-zinc-800 text-xl sm:text-[32px] font-bold">
								Ubicación
							</p>
							<p className="text-lg sm:text-2xl font-medium text-zinc-800">
								Foro sol
							</p>
							<Link
								href={"/"}
								className="text-zinc-500 text-[15px] font-normal underline"
							>
								Viad. Río de la Piedad S/N, Granjas México
							</Link>
						</div>

						{isLoaded ? (
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={center}
								zoom={10}
								onLoad={onLoad}
							>
								<></>
							</GoogleMap>
						) : (
							<div
								role="status"
								className="flex items-center justify-center h-[350px] w-full lg:h-[726px] lg:w-[726px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
							>
								<SiGooglemaps style={{ fontSize: "100px", color: "#c2c2c2" }} />
								<span className="sr-only">Loading...</span>
							</div>
						)}

						<div className="w-full flex flex-col items-left justify-between mt-[90px] mb-7">
							<p className="text-zinc-800 text-xl sm:text-[32px] font-bold">
								Acerca del evento
							</p>
							<p className="mb-6 mt-2 sm:mt-4 text-justify text-zinc-500 text-xs sm:text-[15px] font-normal break-words">
								John Mayer is a man of contradictions. He's an international pop
								star, but also an authentic bluesman endorsed by some of the
								genre's biggest legends (B.B. King, Eric Clapton). He's famous
								for dating some of the entertainment industry's most beautiful
								women, but dislikes the red carpet and lives on a ranch in
								Montana. Mayer is known for his hushed-acoustic sound, but has
								collaborated with hip-hop giants Kanye West, Common, and Frank
								Ocean.
							</p>
						</div>
					</div>

					<BuyTickets />
				</div>
			</div>
		</div>
	);
};

export default Detail;
