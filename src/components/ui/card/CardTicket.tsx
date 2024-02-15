import Image from "next/image";
import logo from "@/assets/images/logo-white.png";
import googleWallet from "@/assets/images/googleWallet.png";
import QRCode from "react-qr-code";

const CardTicket = ({
	ticket,
	isSmallScreen,
}: {
	ticket: any;
	isSmallScreen: boolean;
}) => {
	return (
		<div className="relative w-auto mx-2 md:mx-0 md:w-[310px] lg:w-[290px] xl:w-[350px] px-7 flex flex-col bg-white shadow-xl rounded-2xl border border-neutral-200">
			<div className="flex mt-5 gap-2">
				<div className="hidden md:block">
					<Image
						alt="Event image"
						className="hidden w-12 h-8 rounded-xl"
						src={ticket.src}
					/>
				</div>
				<p className="text-black text-base md:text-lg font-bold">
					{ticket.name}
				</p>
			</div>

			<div className="grid grid-cols-2 mt-2 md:mt-5 gap-1 md:gap-[14px]">
				<div>
					<p className="text-neutral-400 text-xs md:text-[15px] font-medium">
						Día
					</p>
					<p className="text-black text-xs md:text-[15px] font-bold">
						{ticket.date}
					</p>
				</div>
				<div>
					<p className="text-neutral-400 text-xs md:text-[15px] font-medium">
						Hora
					</p>
					<p className="text-black text-xs md:text-[15px] font-bold">
						{ticket.hour}
					</p>
				</div>
				<div>
					<p className="text-neutral-400 text-xs md:text-[15px] font-medium">
						Lugar
					</p>
					<p className="text-black text-xs md:text-[15px] font-bold">
						{ticket.place}
					</p>
				</div>
				<div>
					<p className="text-neutral-400 text-xs md:text-[15px] font-medium">
						Tipo de boleto
					</p>
					<p className="text-black text-xs md:text-[15px] font-bold">
						{ticket.type}
					</p>
				</div>
				<div>
					<p className="text-neutral-400 text-xs md:text-[15px] font-medium">
						Asiento
					</p>
					<p className="text-black text-xs md:text-[15px] font-bold">
						{ticket.seat}
					</p>
				</div>
			</div>
			<div className="flex justify-center">
				<QRCode
					value="https://google.com"
					style={{
						height: "auto",
						marginTop: "14px",
						maxWidth: "100%",
						width: isSmallScreen ? "75%" : "100%",
					}}
				/>
			</div>

			<div className="flex justify-center mt-6 mb-16">
				<button>
					<Image
						alt="googleWallet"
						src={googleWallet}
						className="w-24 lg:w-[174px]"
					/>
				</button>
			</div>

			<div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-10 bg-rose-600 rounded-bl-lg rounded-br-lg">
				<Image alt="Conboleto logo" className="w-[126.52px] h-8" src={logo} />
			</div>
		</div>
	);
};

export default CardTicket;
