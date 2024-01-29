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
		<footer className="footer flex flex-col items-center w-full py-16 bg-slate-900">
			<div className="flex flex-col space-x-2 lg:flex-row">
				<div>
					<span className="text-[32px] font-extrabold">CREA </span>
					<span className="text-rose-600 text-[32px] font-extrabold">
						TU EVENTO
					</span>
					<span className="text-[32px] font-extrabold"> Y VIVE LA </span>
				</div>
				<div>
					<span className="text-pink-600 text-[32px] font-extrabold">
						EXPERIENCIA
					</span>
					<span className="text-[32px] font-extrabold"> CONBOLETO </span>
				</div>
			</div>

			<button className="w-[280px] h-12 rounded-lg border-2 mt-11 border-pink-600 backdrop-blur-[31.80px]">
				CREAR EVENTO
			</button>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full mt-[94px]">
				{siteMap.map((item, index: number) => (
					<div className="flex flex-col gap-1 items-center" key={index}>
						<p className={`${roboto400.className} text-[15px] font-bold `}>
							{item.title}
						</p>

						{item.items.map((item) => (
							<Link
								href={item.link}
								className={`${roboto100.className} text-[15px] hover:text-pink-500 cursor-pointer`}
								key={item.title}
							>
								{item.title}
							</Link>
						))}
					</div>
				))}
			</div>
			<div className="flex justify-between border-t-2 mt-[76px] w-[50%] pt-12 border-slate-800">
				<Image src={logo} alt="conboleto_img" className="" />
				<p className={"text-sm leading-[14px]"}>
					&copy; {new Date().getFullYear()} Conboleto. All Rights Reserved.
				</p>
				<div className="flex justify-end w-[145px] h-[39px] space-x-3">
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
