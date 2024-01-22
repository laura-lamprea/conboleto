"use client";
import React from "react";
import { NavbarBottom } from "../navbar-bottom/NavbarBottom";
import { NavbarTop } from "../navbar-top/NavbarTop";

export const Navbar = () => {
	return (
		<div className="sticky top-0 z-50">
			<NavbarTop />
			<NavbarBottom />
		</div>
	);
};

export default Navbar;
