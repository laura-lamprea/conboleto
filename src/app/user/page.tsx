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
		<>
			<div className="w-[calc(70%)] p-14 mx-auto border-b border-gray-200 ">
				<div className="flex gap-6 py-3">
					<ButtonTab
						onClick={() => handleTabClick("perfil")}
						isActive={activeTab === "perfil"}
					>
						<BiSolidIdCard style={{ fontSize: "20px" }} />
						Perfil
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("misBoletos")}
						isActive={activeTab === "misBoletos"}
					>
						<FaTicketAlt style={{ fontSize: "20px" }} />
						Mis Boletos
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("contrasena")}
						isActive={activeTab === "contrasena"}
					>
						<MdVpnKey style={{ fontSize: "20px" }} />
						Contraseña
					</ButtonTab>
				</div>
				<div className="h-[500px] mt-6">
					{activeTab === "perfil" && <PerfilTab />}
					{activeTab === "misBoletos" && <MisBoletosTab />}
					{activeTab === "contrasena" && <ContrasenaTab />}
				</div>
			</div>
		</>
	);
};

export default UserPage;

const ButtonTab = ({ children, onClick, isActive }: any) => {
	return (
		<button
			className={`bg-transparent py-3 text-sm font-semibold border-b-2 flex items-center justify-center gap-2 ${
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
