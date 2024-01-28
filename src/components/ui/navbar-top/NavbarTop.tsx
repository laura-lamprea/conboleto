"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import ConboletoButton from "@/components/ui/button/ConboletoButton";

export const NavbarTop = () => {
	return (
		<nav className="flex items-center justify-between h-24 px-4 py-6 bg-slate-900 w-full ">
			<div className="flex items-center">
				<Link href={"/"}>
					<Image src={logo} alt="conboleto_img" className="h-12" />
				</Link>
				{/* <div className="w-[410px] h-12 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]" /> */}
				<form>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<IoSearchOutline />
						</div>
						<input
							type="search"
							id="default-search"
							className="w-[410px] h-12 bg-white p-4 ps-10 text-sm bg-opacity-10 rounded-lg border border-white border-opacity-30 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Buscar evento, artista o lugar"
							required
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									event.preventDefault();
								}
							}}
						/>
					</div>
				</form>
			</div>

			<div className="flex space-x-5">
				<button className="hidden lg:inline-block text-white text-base mx-5">
					Soporte
				</button>
				<button className="hidden lg:inline-block w-[157px] h-12 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Crea tu evento
				</button>
				<ConboletoButton width={"[157px]"} height={"12"}>
					Iniciar sesión
				</ConboletoButton>
			</div>
		</nav>
	);
};

export default NavbarTop;
