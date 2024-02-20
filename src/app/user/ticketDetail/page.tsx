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
			<div className="hidden sm:block">
				<ImageEvent />
			</div>
			<div className="p-5 mx-auto sm:mx-0 sm:px-14 border-b border-gray-200">
				<div className="fixed w-full z-20 md:w-auto top-[48px] left-0 sm:top-[74px] md:relative md:top-0 flex gap-0 sm:gap-6 py-0 md:py-3 px-0 bg-white">
					<ButtonTab
						onClick={() => handleTabClick("misBoletos")}
						isActive={activeTab === "misBoletos"}
					>
						<FaTicketAlt
							style={{ fontSize: "20px" }}
							className="hidden md:block"
						/>
						Boletos
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("info")}
						isActive={activeTab === "info"}
					>
						{/* <BiSolidIdCard style={{ fontSize: "20px" }} className="hidden md:block" /> */}
						Info evento
					</ButtonTab>
					<ButtonTab
						onClick={() => handleTabClick("ayuda")}
						isActive={activeTab === "ayuda"}
					>
						{/* <MdVpnKey style={{ fontSize: "20px" }} className="hidden md:block" /> */}
						Ayuda
					</ButtonTab>
				</div>
				<div className="h-full my-12 md:my-6 ">
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
