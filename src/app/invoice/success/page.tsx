import { FaQrcode } from "react-icons/fa";
import SummaryCard from "@/components/ui/invoice-summary/SummaryCard";
import ConboletoButton from "@/components/ui/button/ConboletoButton";

const Success = () => {
	return (
		<div className="bg-slate-900 flex flex-col gap-6 py-7 items-center md:flex-row md:justify-evenly md:gap-1">
			<div>
				<div className="-space-y-2 mb-14">
					<div className="text-[32px] md:text-[40px] font-bold bg-gradient-to-r from-rose-600 to-pink-600 inline-block text-transparent bg-clip-text">
						¡COMPRA EXITOSA!
					</div>
					<p className="text-white text-2xl md:text-[32px] font-bold">
						YA TIENES TUS BOLETOS
					</p>
				</div>
				<p className="text-white text-base md:text-2xl font-bold">
					Comparte en redes
				</p>
				<p className="text-white text-base font-normal">
					Comparte con tus amigos que ya tienes tus boletos
				</p>

				<div className="flex gap-3 items-center mt-20">
					<div className="w-12 h-12 p-2 flex items-center justify-center bg-pink-200 rounded-lg">
						<FaQrcode style={{ fontSize: "30px", color: "#DE1A61" }} />
					</div>
					<div>
						<p className="text-lg md:text-2xl font-bold ">Boleto electrónico</p>
						<p className="text-xs md:text-base font-light ">
							Olvidate de hacer filas para imprimir tu boleto
						</p>
					</div>
				</div>
				<ConboletoButton width={"[221px]"} height={"12"} className="my-6">
					Ver mis boletos
				</ConboletoButton>
			</div>
			<SummaryCard />
		</div>
	);
};
export default Success;
