import Image from "next/image";
import mayer from "@/mocks/images/mayer.png";
import logo from "@/assets/images/logo-white.png";

const SummaryCard = () => {
	const dataEvent = {
		src: mayer,
		name: "John Mayer Solo Tour",
		date: "22 de Noviembre",
		hour: "20:00 hrs",
		location: "Foro sol",
	};
	return (
		<div className="relative w-[310px] sm:w-[346px] h-[463px] mx-5 rounded-xl bg-white shadow">
			<Image
				alt="Event image"
				className="w-full h-[183px] rounded-xl rounded-b-none"
				src={dataEvent.src}
			/>
			<div className=" px-4 py-2">
				<div className="w-[274px] h-6 text-zinc-800 text-2xl font-bold">
					{dataEvent.name}
				</div>
				<div className="grid grid-cols-2 mt-6 gap-3">
					<div>
						<p className="text-neutral-400 text-[15px] font-medium">Día</p>
						<p className="text-black text-[15px] font-bold">{dataEvent.date}</p>
					</div>
					<div>
						<p className="text-neutral-400 text-[15px] font-medium">Hora</p>
						<p className="text-black text-[15px] font-bold">{dataEvent.hour}</p>
					</div>
					<div>
						<p className="text-neutral-400 text-[15px] font-medium">Lugar</p>
						<p className="text-black text-[15px] font-bold">
							{dataEvent.location}
						</p>
					</div>
				</div>
				<div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-10 bg-rose-600 rounded-bl-lg rounded-br-lg">
					<Image alt="Conboleto logo" className="w-[126.52px] h-8" src={logo} />
				</div>
			</div>
		</div>
	);
};

export default SummaryCard;
