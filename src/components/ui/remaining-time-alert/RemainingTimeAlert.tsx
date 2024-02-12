import { FaTicketAlt } from "react-icons/fa";

const RemainingTimeAlert = () => {
	return (
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
	);
};

export default RemainingTimeAlert;