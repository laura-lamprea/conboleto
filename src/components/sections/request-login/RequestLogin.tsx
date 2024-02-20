"use client";
import React from "react";
import LoginForm from "@/components/forms/Login";
import logo from "@/assets/images/logo-black.png";
import Image from "next/image";

const RequestLogin = () => {
	return (
		<div className="flex flex-col w-[310px] sm:w-[352px] mx-auto my-20 sm:my-24">
			<Image
				className={"py-5 h-18 w-36 sm:h-20 sm:w-[190px]"}
				src={logo}
				alt="logo"
			/>
			<div className="text-zinc-800 text-base md:text-lg xl:text-[22px] font-bold">
				Inicia sesión para continuar
			</div>
			<p className="text-zinc-800 mb-5 text-xs md:text-sm xl:text-base font-normal tracking-tight">
				Para continuar con tu compra de boletos es necesario que ingreses a tu
				cuenta.
			</p>
			<LoginForm setForgot={() => {}} />
		</div>
	);
};
export default RequestLogin;
