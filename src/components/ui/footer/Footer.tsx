import Link from "next/link";
import { Roboto } from "next/font/google";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { siteMap } from "@/routes/siteMap";
const roboto100 = Roboto({ weight: "100", subsets: ["latin"] });
const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });

const Footer = () => {
	return (
		<footer className="flex flex-col h-[750px] md:h-[530px] lg:h-[570px] xl:h-[600px] 2xl:h-[700px] min-[1700px]:h-[600px] items-center w-full py-7 lg:py-16 bottom-0 bg-slate-900">
			<div className="flex text-lg lg:text-[32px] flex-wrap font-extrabold justify-center px-1">
				CREA <span className="text-rose-600 px-1.5">TU EVENTO</span>Y VIVE LA
				<span className="text-pink-600 px-1.5">EXPERIENCIA</span>
				CONBOLETO
			</div>

			<button className="h-9 w-[150px] lg:w-[280px] lg:h-12 text-sm lg:text-xl rounded-lg border-2 mt-5 lg:mt-11 border-pink-600 backdrop-blur-[31.80px]">
				CREAR EVENTO
			</button>
			<div className="flex flex-col mt-3 lg:mt-10 w-full sm:grid sm:grid-cols-2 sm:justify-items-center md:grid-cols-4 ">
				{siteMap.map((item, index: number) => (
					<div className="flex flex-col mt-4 gap-0 lg:gap-1" key={index}>
						<p className={`${roboto400.className} text-xs lg:text-[15px] font-bold text-center md:text-left`}>
							{item.title}
						</p>
						{item.items.map((item) => (
							<Link
								href={item.link}
								className={`${roboto100.className} text-xs lg:text-[15px] text-center md:text-left hover:text-pink-300 cursor-pointer`}
								key={item.title}
							>
								{item.title}
							</Link>
						))}
					</div>
				))}
			</div>
			<div className="flex justify-between items-center border-t-2 mt-10 lg:mt-[76px] w-[85%] md:w-[50%] pt-7 lg:pt-12 border-slate-800">
				<Image src={logo} alt="conboleto_img" className="w-24 md:w-40 xl:w-48" />
				<p className={"text-xs sm:text-sm leading-[14px] text-center"}>
					&copy; {new Date().getFullYear()} Conboleto. All Rights Reserved.
				</p>
				<div className="flex justify-end w-[145px] h-[39px] space-x-1 sm:space-x-3">
					<button className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center">
						<FaFacebookF />
					</button>
					<button className="w-[39px] h-[39px] rounded-[19.50px] border border-slate-800 flex items-center justify-center">
						<FaLinkedinIn />
					</button>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
