import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import AuthProvider from "@/components/providers/Providers";

export const metadata: Metadata = {
	title: "Conboleto",
	description: "Eventos en linea",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<Navbar />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
