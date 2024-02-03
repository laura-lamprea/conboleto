"use client";
import React, { useState } from "react";
import LoginForm from "@/components/forms/Login";
import logo from "@/assets/images/logo-black.png";
import Image from "next/image";
import Summary from "@/components/ui/invoice-summary/Summary";
import SaleFormStep1 from "@/components/forms/SaleFormStep1";
import SaleFormStep2 from "@/components/forms/SaleFormStep2";
import { FaTicketAlt } from "react-icons/fa";

const Checkout = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
	const [currentStep, setCurrentSteps] = useState(true);
	return (
		<div className="relative flex">
			<div className="grow flex flex-col justify-center">
				<div className="w-[92%] sm:w-[80%] lg:w-[50%] h-[63px] absolute top-6 self-center flex flex-wrap px-2 items-center bg-red-200 rounded-xl border border-rose-600 text-zinc-800 space-x-1">
					<FaTicketAlt
						style={{
							fontSize: "20px",
							color: "#EB2D74",
							margin: "0 5px",
						}}
					/>
					<span className="text-zinc-800 text-sm sm:text-base">Tienes</span>
					<span className="text-zinc-800 text-md sm:text-lg font-bold">10:23</span>
					<span className="text-zinc-800 text-sm sm:text-base">
						para finalizar tu compra o será cancelada.
					</span>
				</div>
				{!isAuthenticated ? (
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
				) : currentStep ? (
					<SaleFormStep1 setCurrentStep={setCurrentSteps} />
				) : (
					<SaleFormStep2 />
				)}
			</div>

			<Summary />
		</div>
	);
};
export default Checkout;
