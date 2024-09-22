"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="z-50 w-full bg-black/[0.75] fixed top-0 shadow">
			<div className="mx-auto flex justify-between items-center px-4 md:px-8 lg:max-w-7xl">
				{/* Logo */}
				<div className="py-3">
					<a href="/">
						<Image
							src="https://dappunk.com/img/logos/dappunk-logo-blue.png"
							width={150}
							height={150}
							alt="Dappunk Logo"
							className="h-8 object-contain"
						/>
					</a>
				</div>

				{/* Menu (Desktop) */}
				<div className="hidden md:flex items-center space-x-8 text-white">
					<a
						href="/"
						className="hover:bg-gray-800 text-blue px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Home
					</a>
					<a
						href="/#facts"
						className="hover:bg-gray-800 text-blue px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Facts
					</a>
					<a
						href="#features"
						className="hover:bg-gray-800 text-blue px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Features
					</a>
					<a
						href="/$punk"
						className="hover:bg-gray-800 text-blue px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						$PUNK
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						type="button"
						className="text-white focus:outline-none"
						onClick={toggleMobileMenu}
					>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu (Dropdown) */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-black/[0.85] px-4 py-3 text-white space-y-2">
					<a
						href="/"
						className="block hover:bg-gray-800 px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Home
					</a>
					<a
						href="/#facts"
						className="block hover:bg-gray-800 px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Facts
					</a>
					<a
						href="#features"
						className="block hover:bg-gray-800 px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						Features
					</a>
					<a
						href="/$punk"
						className="block hover:bg-gray-800 px-4 py-2 rounded-md transition duration-300 ease-in-out"
					>
						$PUNK
					</a>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
