"use client";
import React, { useState } from "react";

const BuyTickets = () => {
	const [purchase, setPurchase] = useState({ general: 0, vip: 0, meet: 0 });

	const increment = (name: keyof typeof purchase) => {
		setPurchase({
			...purchase,
			[name]: purchase[name] + 1,
		});
	};

	const decrement = (name: keyof typeof purchase) => {
		if (purchase[name] > 0) {
			setPurchase({
				...purchase,
				[name]: purchase[name] - 1,
			});
		}
	};

	const submit = () => {
		console.log("purchase ", purchase);
	};

	return (
		<div className="h-auto xl:h-[650px] rounded-xl border border-stone-300 flex flex-col  xl:py-6  mt-12">
			<div className="flex justify-between px-8 py-6 border-b-[1px] border-stone-300 xl:border-b-0">
				<div className="-space-y-2 ">
					<span className="text-zinc-800 text-[22px] font-bold">General</span>
					<div className="">
						<span className="text-rose-600 text-xl font-semibold">$</span>
						<span className="text-zinc-800 text-2xl font-bold">2000</span>
						<span className="text-zinc-800 text-xl font-light"> MXN</span>
					</div>
					<span className="text-zinc-800 text-base font-light">
						Cargos por servicio incluido
					</span>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => decrement("general")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold "
					>
						-
					</button>
					<span className="text-zinc-800 text-xl font-bold px-3">
						{purchase.general}
					</span>
					<button
						onClick={() => increment("general")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold"
					>
						+
					</button>
				</div>
			</div>

			<div className="flex justify-between px-8 py-6 border-b-[1px] border-stone-300 xl:border-b-0">
				<div className="-space-y-2">
					<span className="text-zinc-800 text-[22px] font-bold">VIP</span>
					<div className="">
						<span className="text-rose-600 text-xl font-semibold">$</span>
						<span className="text-zinc-800 text-2xl font-bold">3500</span>
						<span className="text-zinc-800 text-xl font-light"> MXN</span>
					</div>
					<span className="text-zinc-800 text-base font-light">
						Cargos por servicio incluido
					</span>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => decrement("vip")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold "
					>
						-
					</button>
					<span className="text-zinc-800 text-xl font-bold px-3">
						{purchase.vip}
					</span>
					<button
						onClick={() => increment("vip")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold"
					>
						+
					</button>
				</div>
			</div>

			<div className="flex justify-between px-8 py-6 border-b-[1px] border-stone-300 xl:border-b-0">
				<div className="-space-y-2">
					<span className="text-zinc-800 text-[22px] font-bold">
						MEET & GREET
					</span>
					<div className="">
						<span className="text-rose-600 text-xl font-semibold">$</span>
						<span className="text-zinc-800 text-2xl font-bold">3500</span>
						<span className="text-zinc-800 text-xl font-light"> MXN</span>
					</div>
					<span className="text-zinc-800 text-base font-light">
						Cargos por servicio incluido
					</span>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => decrement("meet")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold "
					>
						-
					</button>
					<span className="text-zinc-800 text-xl font-bold px-3">
						{purchase.meet}
					</span>
					<button
						onClick={() => increment("meet")}
						className="w-10 h-10 bg-neutral-200 rounded-xl text-zinc-800 text-[28px] font-bold"
					>
						+
					</button>
				</div>
			</div>
		

			<div className="flex justify-between items-center px-8 py-6 xl:flex-col xl:items-start ">
				<div className="-space-y-2 xl:mt-4 xl:mb-5 ">
					<span className="text-zinc-800 text-[22px] font-bold">
						Compra total
					</span>
					<div className="">
						<span className="text-rose-600 text-xl font-semibold">$</span>
						<span className="text-zinc-800 text-2xl font-bold">9000</span>
						<span className="text-zinc-800 text-xl font-light"> MXN</span>
					</div>
					<span className="text-zinc-800 text-base font-light">
						Cargos por servicio incluido
					</span>
				</div>

				<button
					onClick={submit}
					className="w-[331px] h-[52px] self-center bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px] "
				>
					Comprar boletos
				</button>
			</div>
		</div>
	);
};

export default BuyTickets;
