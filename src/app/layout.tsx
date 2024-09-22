import type { Metadata } from "next";
import "./globals.css";
import 'slick-carousel/slick/slick.css'; // Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; 

export const metadata: Metadata = {
	title: "Dappunk",
	description: "Dappunk",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
