import React, { useEffect, useState } from "react";

const sections = [
	{ id: "popular", title: "Popular" },
	{ id: "spectacular", title: "Espectaculares" },
	{ id: "sports", title: "Deportes" },
];

export const NavbarBottom = () => {
	const [activeSection, setActiveSection] = useState<string>("");
	const [navbarHeight, setNavbarHeight] = useState<number>(0);

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		if (navbar) {
			setNavbarHeight(navbar.clientHeight);
		}
	}, []);

	const handleScrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = navbarHeight;
			const offsetPosition = element.offsetTop - offset;

			window.scrollTo({
				behavior: "auto",
				top: offsetPosition,
			});
			setActiveSection(sectionId);
		} else {
			console.error(`Elemento con ID '${sectionId}' no encontrado.`);
		}
	};

	return (
		<div className="flex items-center w-full h-10 xl:h-14 px-9 xl:px-16 space-x-10 bg-gradient-to-r from-rose-600 to-fuchsia-800">
			{sections.map((section) => (
				<a
					key={section.id}
					className={`text-sm lg:text-lg font-medium cursor-pointer  ${
						activeSection === section.id ? "text-white" : "text-gray-200"
					} `}
					onClick={() => handleScrollToSection(section.id)}
				>
					{section.title}
				</a>
			))}
		</div>
	);
};

export default NavbarBottom;
