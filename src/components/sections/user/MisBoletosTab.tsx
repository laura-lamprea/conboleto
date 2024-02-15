import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { tickets } from "@/mocks/events";
import Image from "next/image";
import ticketIcon from "@/assets/images/ticketIcon.png";
import Link from "next/link";

type TicketType = {
	id: string;
	src: StaticImageData;
	alt: string;
	name: string;
	date: string;
	place: string;
};

const MisBoletosTab = () => {
	return (
		<div className="flex items-center justify-center">
			{tickets.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
					{tickets.map((ticket: TicketType, index: number) => (
						<Link href={`/user/ticketDetail`} key={index}>
							<div className="relative w-[320px] md:w-[320px] lg:w-[280px] xl:w-[360px] h-[203px]">
								<Image
									src={ticket.src}
									alt={ticket.name}
									className="h-full w-full rounded-xl"
								/>
								<div className="absolute h-20 bottom-0 w-full bg-gradient-to-t from-slate-900 to-transparent rounded-xl"></div>
								<div className="flex flex-col w-full absolute bottom-3 px-3 text-left">
									<p className="text-white text-lg font-bold">{ticket.name}</p>
									<p className="text-sm">{ticket.date}</p>
									<p className="text-sm">{ticket.place}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			) : (
				<EmptyTickets />
			)}
		</div>
	);
};

export default MisBoletosTab;

const EmptyTickets = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col items-center justify-center ">
			<Image src={ticketIcon} alt={"ticketIcon"} className="h-[240px]" />
			<p className="text-xl text-zinc-800 font-bold">
				No has comprado boletos aún
			</p>
			<button
				onClick={() => router.push("/")}
				className="h-12 w-[245px] m-2 text-[15px] font-bold bg-rose-600 rounded-lg border border-white border-opacity-30"
			>
				IR A COMPRAR
			</button>
		</div>
	);
};
