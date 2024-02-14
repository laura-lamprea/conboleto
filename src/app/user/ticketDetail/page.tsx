"use client";
import React, { useState } from "react";
import ImageEvent from "@/components/ui/image-event/ImageEvent";
import { FaTicketAlt } from "react-icons/fa";
import MisBoletosTab from "@/components/sections/ticket-detail/MisBoletosTab";

type Tab = "misBoletos" | "info" | "ayuda";

const TicketDetailPage = () => {
	const [activeTab, setActiveTab] = useState<Tab>("misBoletos");

	const handleTabClick = (tab: Tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<ImageEvent />
			<div className="w-[calc(70%)] p-14 mx-auto border-b border-gray-200 ">
				<div className="flex gap-6 py-3">
					<ButtonTab
						onClick={() => handleTabClick("misBoletos")}
						isActive={activeTab === "misBoletos"}
					>
						<FaTicketAlt style={{ fontSize: "20px" }} />
						Mis Boletos
					</ButtonTab>

					<ButtonTab
						onClick={() => handleTabClick("info")}
						isActive={activeTab === "info"}
					>
						{/* <BiSolidIdCard style={{ fontSize: "20px" }} /> */}
						Información evento
					</ButtonTab>

					<ButtonTab
						onClick={() => handleTabClick("ayuda")}
						isActive={activeTab === "ayuda"}
					>
						{/* <MdVpnKey style={{ fontSize: "20px" }} /> */}
						Ayuda
					</ButtonTab>
				</div>
				<div className="mt-6">
					{activeTab === "misBoletos" && <MisBoletosTab />}
					{/* {activeTab === "misBoletos" && <MisBoletosTab />}
					{activeTab === "ayuda" && <ContrasenaTab />} */}
				</div>
			</div>
		</div>
	);
};

export default TicketDetailPage;

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
