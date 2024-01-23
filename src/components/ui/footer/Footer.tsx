import Link from "next/link";
import { Roboto } from "next/font/google";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const roboto100 = Roboto({ weight: "100", subsets: ["latin"] });
const roboto400 = Roboto({ weight: "400", subsets: ["latin"] });

const siteMap = [
	{
		title: "INFORMACIÓN",
		items: [
			{ title: "Inicio", link: "/" },
			{ title: "Acerca de nosotros", link: "/" },
			{ title: "Crea tu evento", link: "/" },
			{ title: "Blog", link: "/" },
		],
	},
	{
		title: "EVENTOS",
		items: [
			{ title: "Conciertos", link: "/" },
			{ title: "Deportes", link: "/" },
			{ title: "Eventos culturales", link: "/" },
			{ title: "Standup", link: "/" },
			{ title: "Teatro", link: "/" },
		],
	},
	{
		title: "LEGAL",
		items: [
			{ title: "Términos y condiciones", link: "/" },
			{ title: "Aviso de privacidad", link: "/" },
			{ title: "Términos de compra", link: "/" },
		],
	},
	{
		title: "SOPORTE Y CONTACTO",
		items: [
			{ title: "soporte@conboleto.co", link: "/" },
			{ title: "+55 2399 1145", link: "/" },
			{ title: "Contáctanos", link: "/" },
			{ title: "Facebook", link: "/" },
			{ title: "Linkedin", link: "/" },
		],
	},
];

const Footer = () => {
	return (
		<footer className="footer flex flex-col items-center w-full h-[744px] bg-slate-900">
			<div className="pt-16">
				<span className="text-[32px] font-extrabold">CREA </span>
				<span className="text-rose-600 text-[32px] font-extrabold">
					TU EVENTO
				</span>
				<span className="text-[32px] font-extrabold"> Y VIVE LA </span>
				<span className="text-pink-600 text-[32px] font-extrabold">
					EXPERIENCIA
				</span>
				<span className="text-[32px] font-extrabold"> CONBOLETO </span>
			</div>
			<button className="w-[280px] h-12 rounded-lg border-2 mt-11 border-pink-600 backdrop-blur-[31.80px]">
				CREAR EVENTO
			</button>
			<div className="flex justify-between w-[1074px] mt-[94px]">
				{siteMap.map((item, index: number) => (
					<div className="flex flex-col gap-1 relative" key={index}>
						<p
							className={`${roboto400.className} text-[15px] font-bold footer-main`}
						>
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
			<div className="flex justify-between border-t-2 mt-[76px] w-[1074px] pt-12 border-slate-800">
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
