import Image from "next/image";
import { ticketsDetail } from "@/mocks/events";
import logo from "@/assets/images/logo-white.png";
import googleWallet from "@/assets/images/googleWallet.png";
import QRCode from "react-qr-code";

const MisBoletosTab = () => {
	return (
		<div className="grid grid-cols-3 gap-10">
			{ticketsDetail.map((ticket: any, index: number) => (
				<div
					key={index}
					className="relative h-[688px] w-[346px] px-7 flex flex-col bg-white shadow-xl rounded-2xl border border-neutral-200"
				>
					<div className="flex mt-5 gap-2">
						<Image
							alt="Event image"
							className="w-20 h-12 rounded-xl"
							src={ticket.src}
						/>
						<p className="text-black text-lg font-bold">{ticket.name}</p>
					</div>

					<div className="grid grid-cols-2 mt-5 gap-[14px]">
						<div>
							<p className="text-neutral-400 text-[15px] font-medium">Día</p>
							<p className="text-black text-[15px] font-bold">{ticket.date}</p>
						</div>
						<div>
							<p className="text-neutral-400 text-[15px] font-medium">Hora</p>
							<p className="text-black text-[15px] font-bold">{ticket.hour}</p>
						</div>
						<div>
							<p className="text-neutral-400 text-[15px] font-medium">Lugar</p>
							<p className="text-black text-[15px] font-bold">{ticket.place}</p>
						</div>
						<div>
							<p className="text-neutral-400 text-[15px] font-medium">
								Tipo de boleto
							</p>
							<p className="text-black text-[15px] font-bold">{ticket.type}</p>
						</div>
						<div>
							<p className="text-neutral-400 text-[15px] font-medium">
								Asiento
							</p>
							<p className="text-black text-[15px] font-bold">{ticket.seat}</p>
						</div>
					</div>

					<QRCode
						value="https://google.com"
						size={200}
						style={{
							height: "auto",
							margin: "14px 0 25px 0",
							maxWidth: "100%",
							width: "100%",
						}}
					/>

					<div className="flex justify-center">
						<button>
							<Image alt="googleWallet" src={googleWallet} />
						</button>
					</div>

					<div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-10 bg-rose-600 rounded-bl-lg rounded-br-lg">
						<Image
							alt="Conboleto logo"
							className="w-[126.52px] h-8"
							src={logo}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default MisBoletosTab;
