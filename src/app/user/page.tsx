"use client";
import React, { useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { BiSolidIdCard } from "react-icons/bi";
import { MdVpnKey } from "react-icons/md";
import PerfilTab from "@/components/sections/user/PerfilTab";
import MisBoletosTab from "@/components/sections/user/MisBoletosTab";
import ContrasenaTab from "@/components/sections/user/ContrasenaTab";

type Tab = "perfil" | "misBoletos" | "contrasena";

const UserPage = () => {
	const [activeTab, setActiveTab] = useState<Tab>("perfil");

	const handleTabClick = (tab: Tab) => {
		setActiveTab(tab);
	};

	return ( 
		<div className="relative flex flex-col items-start justify-center bg-zinc-100 md:bg-white ">
			<div className="p-5 mx-auto sm:mx-0 sm:px-14 border-b border-gray-200">
				<div className="fixed w-full z-20 md:w-auto top-[48px] left-0 sm:top-[74px] md:relative md:top-0 flex gap-0 sm:gap-6 py-0 md:py-3 px-0 bg-white">
					<ButtonTab
						onClick={() => handleTabClick("perfil")}
						isActive={activeTab === "perfil"}
					>
						<BiSolidIdCard style={{ fontSize: "20px" }} className="hidden md:block" />
						Perfil
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("misBoletos")}
						isActive={activeTab === "misBoletos"}
					>
						<FaTicketAlt style={{ fontSize: "20px" }} className="hidden md:block"/>
						Mis Boletos
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("contrasena")}
						isActive={activeTab === "contrasena"}
					>
						<MdVpnKey style={{ fontSize: "20px" }} className="hidden md:block" />
						Contraseña
					</ButtonTab>
				</div>
				<div className="h-full md:h-[500px] my-12 md:my-6 ">
					{activeTab === "perfil" && <PerfilTab />}
					{activeTab === "misBoletos" && <MisBoletosTab />}
					{activeTab === "contrasena" && <ContrasenaTab />}
				</div>
			</div>
		</div>
	);
};

export default UserPage;

const ButtonTab = ({ children, onClick, isActive }: any) => {
	return (
		<button
			className={`bg-transparent px-5 md:px-0 py-2 md:py-3 text-sm font-semibold border-b-2 flex items-center justify-center gap-2 ${
				isActive
					? "text-gray-800 border-red-600"
					: "text-gray-500 border-transparent"
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
