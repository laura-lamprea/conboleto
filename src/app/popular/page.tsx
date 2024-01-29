import { eventFont } from "@/config/fonts";
import { eventsPopular } from "@/mocks/events";
import Link from "next/link";
import Card from "@/components/ui/card/Card";

const PopularEventsPage = () => {
	return (
		<div className="flex flex-col items-center mb-20">
			<div className="flex flex-col ">
				<p
					className={`${eventFont.className} pt-7 sm:pt-14 pb-6 text-rose-600 text-[21px] font-normal md:text-[26px] lg:text-4xl italic`}
				>
					EVENTOS POPULARES
				</p>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 2xl:grid-cols-4">
					{eventsPopular.map((item: any, index: number) => (
						<Link href={`/${item.id}`} key={index}>
							<Card event={item} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularEventsPage;
