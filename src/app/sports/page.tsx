import { eventFont } from "@/config/fonts";
import { eventsPopular } from "@/mocks/events";
import Link from "next/link";
import Card from "@/components/ui/card/Card";
import sport from "@/assets/images/sport-section.png";
import Image from "next/image";

const SportsEventsPage = () => {
	return (
		<div className="flex flex-col items-center mb-20">
			<div className="relative mb-14 w-full">
				<p
					className={`${eventFont.className} absolute flex top-10 pl-16 text-xl md:text-2xl lg:text-4xl italic`}
				>
					EVENTOS DEPORTIVOS
				</p>

				<Image src={sport} alt={"sports events"} className="h-[120px] w-full" />
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 2xl:grid-cols-4">
				{eventsPopular.map((item: any, index: number) => (
					<Link href={`/${item.id}`} key={index}>
						<Card event={item} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default SportsEventsPage;
