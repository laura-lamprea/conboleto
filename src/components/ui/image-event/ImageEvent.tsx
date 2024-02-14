import Image from "next/image";
import { singleEvent } from "@/mocks/events";

const ImageEvent = ({ event }: any) => {
	return (
		<div className="relative w-full h-[180px] sm:h-[380px] lg:h-[450px] 2xl:h-[750px] overflow-hidden">
			<Image className="h-full w-full" src={singleEvent.src} alt="mayer" />
			<div className="absolute h-44 bottom-0 w-full  bg-gradient-to-t from-slate-900 to-transparent "></div>
			<div className="flex flex-col w-full absolute bottom-5 px-5 sm:px-10 xl:px-16 xl:py-10 text-left ">
				<p className="text-white text-sm sm:text-2xl md:text-3xl lg:text-[44px] font-bold">
					{singleEvent.name}
				</p>
				<div className="text-xs sm:text-lg md:text-2xl xl:text-[32px] lg:pt-3">{singleEvent.date}</div>
				<p className="text-xs sm:text-lg md:text-2xl xl:text-[32px]">{singleEvent.place}</p>
			</div>
		</div>
	);
};

export default ImageEvent;
