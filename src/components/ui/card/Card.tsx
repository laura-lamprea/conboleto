import React from "react";
import Image from "next/image";

// export interface Props {
// 	event: Event[];
// }
// export interface Event {
// 	src: string;
// 	alt: string;
// 	name: string;
// 	cost: string;
// }

const Card = ({ event }: any) => {
	return (
		<div className="w-[270px] 2xl:w-[330px] rounded-xl bg-white shadow border border-neutral-200">
			<div className="relative">
				<Image
					src={event.src}
					alt={event.alt}
					className="w-full h-[264px] 2xl:h-[342px] rounded-xl rounded-b-none"
				/>
				<div className="absolute rounded-xl h-14 top-0 w-full bg-gradient-to-b from-slate-900 to-transparent"></div>

				<div className="absolute top-3 right-3 lg:top-3 lg:right-3 items-center">
					<div className="w-11 h-[37px] text-rose-600 text-[32px] font-bold">
						29
					</div>
					<div className="w-[48.35px] h-[21px] text-white text-lg font-bold">
						NOV
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between h-[90px] md:h-[133px] 2xl:h-[172px] p-[10px] md:px-[22px] md:py-4 ">
				<div>
					<p className="text-zinc-800 text-lg 2xl:text-[22px] font-semibold tracking-tight">
						{event.name}
					</p>
					<p className="text-zinc-600 text-sm 2xl:text-base font-medium">
						Guadalajara, Jalisco
					</p>
					<p className="text-zinc-600 text-sm 2xl:text-base font-medium">
						Auditorio Telmex
					</p>
				</div>
				<p className="hidden md:block text-rose-600 text-sm 2xl:text-base font-bold">
					Desde {event.cost}
				</p>
			</div>
		</div>
	);
};

export default Card;
