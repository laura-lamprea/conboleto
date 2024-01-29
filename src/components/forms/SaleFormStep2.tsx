"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cardMethod from "@/assets/images/card-method.png";

const SaleFormStep2 = () => {
	const [selectedOption, setSelectedOption] = useState("option1");
	const handleOptionChange = (value: string) => {
		setSelectedOption(value);
	};

	const router = useRouter();

	const handleSubmit = () => {
		router.push("/invoice/success");
	};

	return (
		<div className="w-[390px] mx-auto">
			<p className="text-zinc-800 text-xl font-bold mt-8">Paso 2 de 2</p>
			<p className="text-neutral-400 text-base font-normal">Método de pago</p>
			<div
				className={`flex items-center mt-4 w-[390px] h-14 p-3 bg-white rounded-xl border ${
					selectedOption === "option1" ? "border-pink-700" : "border-stone-300"
				}`}
			>
				<input
					id="bordered-radio-1"
					type="radio"
					value="option1"
					name="bordered-radio"
					className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
					checked={selectedOption === "option1"}
					onChange={() => handleOptionChange("option1")}
				></input>
				<label
					htmlFor="bordered-radio-1"
					className={`w-full py-4 ms-2 text-base font-medium ${
						selectedOption === "option1" ? "text-zinc-800" : "text-zinc-500"
					}`}
				>
					Tarjeta de credito o debito
				</label>
				<Image src={cardMethod} alt="cardMethod" />
			</div>
			<button
				className="w-full h-[52px] my-8 bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]"
				onClick={handleSubmit}
			>
				Pay
			</button>
		</div>
	);
};

export default SaleFormStep2;
