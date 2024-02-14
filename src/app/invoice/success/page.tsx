import { FaQrcode } from "react-icons/fa";
import SummaryCard from "@/components/ui/invoice-summary/SummaryCard";

const Success = () => {
	return (
		<div className="bg-slate-900 flex flex-col gap-6 py-7 items-center md:flex-row md:justify-evenly md:gap-1">
			<div className="mx-5">
				<div className="-space-y-2 mb-14">
					<div className="text-[32px] lg:text-[40px] font-bold bg-gradient-to-r from-rose-600 to-pink-600 inline-block text-transparent bg-clip-text">
						¡COMPRA EXITOSA!
					</div>
					<p className="text-white text-2xl lg:text-[32px] font-bold">
						YA TIENES TUS BOLETOS
					</p>
				</div>
				<p className="text-white text-base lg:text-2xl font-bold">
					Comparte en redes
				</p>
				<p className="text-white text-sm lg:text-base font-normal">
					Comparte con tus amigos que ya tienes tus boletos
				</p>

				<div className="flex gap-3 items-center mt-20">
					<div className="w-12 h-12 p-2 flex items-center justify-center bg-pink-200 rounded-lg">
						<FaQrcode style={{ fontSize: "30px", color: "#DE1A61" }} />
					</div>
					<div>
						<p className="text-lg lg:text-2xl font-bold ">Boleto electrónico</p>
						<p className="text-xs lg:text-base font-light ">
							Olvídate de hacer filas para imprimir tu boleto
						</p>
					</div>
				</div>
				<button className="w-[221px] h-12 my-6 bg-rose-600 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Ver mis boletos
				</button>
			</div>
			<SummaryCard />
		</div>
	);
};
export default Success;
