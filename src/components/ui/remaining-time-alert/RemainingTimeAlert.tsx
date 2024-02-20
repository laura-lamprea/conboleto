import { FaTicketAlt } from "react-icons/fa";

const RemainingTimeAlert = () => {
	return (
		<div className="w-[93%] sm:w-[80%] md:w-[47%] h-12 2xl:h-[63px] absolute top-6 self-center flex flex-wrap px-1 sm:px-2 items-center bg-red-200 rounded-xl border border-rose-600 text-zinc-800 space-x-1">
			<FaTicketAlt
				style={{
					fontSize: "20px",
					color: "#EB2D74",
					margin: "0 5px",
				}}
			/>
			<span className="text-zinc-800 text-xs lg:text-sm 2xl:text-base tracking-tight">
				Tienes
			</span>
			<span className="text-zinc-800 text-xs sm:text-sm lg:text-base 2xl:text-lg font-bold tracking-tight">
				10:23
			</span>
			<span className="text-zinc-800 text-xs lg:text-sm 2xl:text-base tracking-tight">
				para finalizar tu compra o será cancelada.
			</span>
		</div>
	);
};

export default RemainingTimeAlert;
