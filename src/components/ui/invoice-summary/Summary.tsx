import Image from "next/image";
import mayer from "@/mocks/images/mayer.png";

const Summary = () => {
	return (
		<div className="hidden min-[770px]:block right-0 p-14 border-l-2 ">
			<Image
				alt="Event image"
				className="w-[299px] h-[183px] rounded-xl"
				src={mayer}
			/>
			<div className="w-full flex flex-col items-left justify-between pt-2">
				<p className=" text-zinc-800 text-base font-bold">
					John Mayer Solo Tour
				</p>
				<p className=" text-zinc-800 text-xs font-medium]">11 de noviembre</p>
				<p className=" text-zinc-800 text-xs font-medium">Foro sol</p>
			</div>

			<div className="my-7 space-y-2">
				<div className="flex justify-between items-center">
					<div>
						<span className="text-zinc-800 text-base font-bold">General</span>
						<p className="text-neutral-400 text-xs font-normal">Cantidad x2</p>
					</div>
					<div>
						<span className="text-rose-600 text-base font-semibold">$</span>
						<span className="text-zinc-800 text-xl font-bold">2000</span>
						<span className="text-zinc-800 text-[15px] font-light"> MXN</span>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div>
						<span className="text-zinc-800 text-base font-bold">VIP</span>
						<p className="text-neutral-400 text-xs font-normal">Cantidad x2</p>
					</div>
					<div>
						<span className="text-rose-600 text-base font-semibold">$</span>
						<span className="text-zinc-800 text-xl font-bold">7000</span>
						<span className="text-zinc-800 text-[15px] font-light"> MXN</span>
					</div>
				</div>
			</div>
			<input
				type={"text"}
				id="code"
				placeholder="Código promocional"
				className="w-full h-10 bg-white rounded-lg border border-stone-300 text-stone-900 text-xs p-2"
			/>
			<div className="inline-flex items-center  mt-8 justify-center w-full bg-slate-500 ">
				<hr className="w-full h-px bg-gray-200 border-0 "></hr>
			</div>

			<div className="flex justify-between items-center">
				<span className="text-zinc-800 text-base font-bold">Subtotal</span>
				<div>
					<span className="text-rose-600 text-base font-semibold">$</span>
					<span className="text-zinc-800 text-xl font-bold">9000</span>
					<span className="text-zinc-800 text-[15px] font-light"> MXN</span>
				</div>
			</div>
		</div>
	);
};

export default Summary;
