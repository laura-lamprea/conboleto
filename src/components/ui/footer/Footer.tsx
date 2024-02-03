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
		<footer className="footer flex flex-col items-center w-full py-16 bottom-0 bg-slate-900">
			<div className="flex text-lg sm:text-[32px] flex-wrap font-extrabold justify-center px-1">
				CREA <span className="text-rose-600 px-1.5">TU EVENTO</span>Y VIVE LA
				<span className="text-pink-600 px-1.5">EXPERIENCIA</span>
				CONBOLETO
			</div>

			<button className="w-[280px] h-12 rounded-lg border-2 mt-11 border-pink-600 backdrop-blur-[31.80px]">
				CREAR EVENTO
			</button>
			<div className="flex flex-col mt-10 w-full sm:grid sm:grid-cols-2 sm:justify-items-center md:grid-cols-4 ">
				{siteMap.map((item, index: number) => (
					<div className="flex flex-col mt-4" key={index}>
						<p className={`${roboto400.className} text-[15px] font-bold     text-center md:text-left`}>
							{item.title}
						</p>
						{item.items.map((item) => (
							<Link
								href={item.link}
								className={`${roboto100.className} text-[15px]    text-center md:text-left   hover:text-pink-500 cursor-pointer`}
								key={item.title}
							>
								{item.title}
							</Link>
						))}
					</div>
				))}
			</div>
			<div className="flex justify-between border-t-2 mt-[76px] w-[85%] md:w-[50%] pt-12 border-slate-800">
				<Image src={logo} alt="conboleto_img" className="" />
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
