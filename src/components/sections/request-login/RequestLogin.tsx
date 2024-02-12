"use client";
import React from "react";
import LoginForm from "@/components/forms/Login";
import logo from "@/assets/images/logo-black.png";
import Image from "next/image";

const RequestLogin = () => {
	return (
		<div className="flex flex-col mx-auto my-24">
			<Image className={"py-5"} src={logo} alt="logo" />
			<div className="text-zinc-800 text-[22px] font-bold">
				Inicia sesión para continuar
			</div>
			<div className="text-zinc-800 mb-5 text-base font-normal">
				Para continuar con tu compra de boletos es <br />
				necesario que ingreses a tu cuenta.
			</div>
			<LoginForm setForgot={() => {}} />
		</div>
	);
};
export default RequestLogin;
