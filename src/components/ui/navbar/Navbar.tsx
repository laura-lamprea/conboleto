'use client'
import React from "react";
import { NavbarBottom } from "../navbar-bottom/NavbarBottom";
import { NavbarTop } from "../navbar-top/NavbarTop";
import { usePathname } from 'next/navigation'

export const Navbar = () => {
	const pathname = usePathname()

	return (
		<div className="sticky top-0 z-50">
			<NavbarTop />
			{pathname === "/" && <NavbarBottom />}
		</div>

	);
};

export default Navbar;
