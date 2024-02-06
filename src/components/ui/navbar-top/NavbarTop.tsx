"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import LoginButton from "@/components/ui/button/LoginButton";
import DrawerButton from "@/components/ui/button/DrawerButton";

export const NavbarTop = () => {
	return (
		<nav className="flex items-center justify-between h-[42px] sm:h-[74px] xl:h-24 px-4 py-6 bg-slate-900 w-full ">
			<DrawerButton/>
			<div className="flex items-center">
				<Link href={"/"}>
					<Image
						src={logo}
						alt="conboleto_img"
						className="h-5 sm:h-11 md:h-12 w-auto"
					/>
				</Link>
				<form>
					<div className="relative hidden md:block">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<IoSearchOutline />
						</div>
						<input
							type="search"
							id="default-search"
							className="sm:w-[410px] h-12 bg-white p-4 ps-10 text-sm bg-opacity-10 rounded-lg border border-white border-opacity-30 focus:ring-blue-500 focus:border-blue-5000"
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

			<div className="hidden sm:flex space-x-5">
				<button className="hidden lg:inline-block text-white text-base mx-5">
					Soporte
				</button>
				<button className="hidden lg:inline-block w-[157px] h-12  my-8 rounded-lg border border-white border-opacity-30 backdrop-blur-[31.80px]">
					Crea tu evento
				</button>
				<LoginButton />
			</div>

			<div className="block sm:hidden">
				<IoSearchOutline />
			</div>
		</nav>
	);
};

export default NavbarTop;
