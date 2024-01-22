import Link from "next/link";
import React from "react";

export const NavbarBottom = () => {
	return (
		<div className="flex items-center w-full h-14 px-16 space-x-10 bg-gradient-to-r from-rose-600 to-fuchsia-800">
             <Link href={"/"}>
                Popular
            </Link>
             <Link href={"/"}>
                Deportes
            </Link>
             <Link href={"/"}>
                Teatro
            </Link>
             <Link href={"/"}>
                Conciertos
            </Link>
        </div>
	);
};

export default NavbarBottom;
