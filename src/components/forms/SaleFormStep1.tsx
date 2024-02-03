"use client";
import React, { useState } from "react";
import {} from "next/navigation";
import { PiSealCheckFill } from "react-icons/pi";

const SaleFormStep1 = ({ setCurrentStep }: { setCurrentStep: Function }) => {
	const [selectedOption, setSelectedOption] = useState("option1");
	const handleOptionChange = (value: string) => {
		setSelectedOption(value);
	};

	const handleSubmit = () => {
		setCurrentStep(false);
	};
	return (
		<div className="w-[310px] sm:w-[390px] mx-auto mt-20">
			<p className="text-zinc-800 text-xl font-bold mt-8">Paso 1 de 2</p>
			<p className="text-neutral-400 text-base font-normal">
				Asignación de boletos
			</p>

			<div
				className={`flex items-center mt-4 w-full h-14 p-3 bg-white rounded-xl border ${
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
					className={`w-full py-4 ms-2 text-sm sm:text-base font-medium ${
						selectedOption === "option1" ? "text-zinc-800" : "text-zinc-500"
					}`}
				>
					Asignar todos los boletos a mi nombre
				</label>
			</div>
			<div
				className={`flex items-center mt-[14px] w-full h-14 p-3 bg-white rounded-xl border ${
					selectedOption === "option2" ? "border-pink-700" : "border-stone-300"
				}`}
			>
				<input
					// checked
					id="bordered-radio-2"
					type="radio"
					value="option2"
					name="bordered-radio"
					className="w-5 h-5 text-purple-600 bg-purple-600 border-gray-300 focus:ring-purple-500"
					checked={selectedOption === "option2"}
					onChange={() => handleOptionChange("option2")}
				></input>
				<label
					htmlFor="bordered-radio-2"
					className={`w-full py-4 ms-2 text-sm sm:text-base font-medium ${
						selectedOption === "option2" ? "text-zinc-800" : "text-zinc-500"
					}`}
				>
					Asignar boletos individualmente
				</label>
			</div>

			{selectedOption === "option1" ? <GroupComponent /> : <SingleComponent />}

			<button
				className="w-full h-[52px] my-8 bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]"
				onClick={handleSubmit}
			>
				Comprar boletos
			</button>
		</div>
	);
};

export default SaleFormStep1;

const GroupComponent = () => {
	return (
		<div className="mt-12 w-full">
			<p className="text-zinc-800 text-base font-bold">
				Los boletos serán asignados a tu nombre
			</p>
			<div className="h-[85px] w-full mt-4 px-3.5 py-[22px] rounded-lg border border-gray-400 border-opacity-20 flex justify-between items-center">
				<div className="">
					<p className="text-gray-800 text-sm font-bold leading-snug">
						Javier Medina Cazares
					</p>
					<p className="text-gray-800 text-sm font-normal leading-snug">
						javier.medina@knesysplus.com
					</p>
				</div>
				<div className="pl-3 pr-2 ">
					<PiSealCheckFill
						style={{ height: "20px", width: "20px", color: "#1e90ff" }}
					/>
				</div>
			</div>
		</div>
	);
};

const SingleComponent = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<div className="mt-12 w-full">
			<p className="w-[346px] text-zinc-800 text-base font-bold">
				Asigna los boletos de forma individual
			</p>
			<div className="w-full h-[156px] p-4 mt-4 rounded-xl border border-stone-300">
				<p className="text-zinc-800 text-base font-bold">Boleto General</p>
				<div className="w-full h-12 relative rounded-lg pl-3.5 pr-2 mt-2 py-[22px] border border-gray-400 border-opacity-20 justify-start items-center inline-flex">
					<p className="w-[324px] h-[22px] text-gray-800 text-sm font-medium leading-snug">
						javier.medina@knesysplus.com
					</p>
					<div className="w-10 pl-3 pr-2 py-2.5 justify-end items-center inline-flex">
						<PiSealCheckFill
							style={{ height: "20px", width: "20px", color: "#1e90ff" }}
						/>
					</div>
				</div>

				<label className="autoSaverSwitch mt-4 relative inline-flex cursor-pointer select-none items-center">
					<input
						type="checkbox"
						name="autoSaver"
						className="sr-only"
						checked={isChecked}
						onChange={handleCheckboxChange}
					/>
					<span
						className={`slider mr-3 flex w-10 h-5 items-center rounded-full p-1 duration-200 ${
							isChecked ? "bg-rose-600" : "bg-gray-100"
						}`}
					>
						<span
							className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
								isChecked ? "translate-x-4" : ""
							}`}
						></span>
					</span>
					<span className="label flex items-center text-sm font-medium text-black">
						Asignar boleto a mi nombre
					</span>
				</label>
			</div>
		</div>
	);
};
