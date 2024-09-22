"use client";
import type React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const ImageGeneratorUI = () => {
	const router = useRouter();
	return (
		<div
			className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
			style={{
				backgroundImage: `url('https://dappunk.com/img/pages/features/3/bg.jpg')`,
			}}
		>
			{/* Text and Button positioned bottom-left */}
			<div className="absolute bottom-20 left-10 space-y-6">
				<h2 className="text-sm font-semibold">AI ART GENERATORS</h2>
				<h1 className="text-5xl font-extrabold">
					TEXT TO ART & <br /> IMAGE TO ART
				</h1>
				<p className="text-xl font-light">
					Transform your words or photos into stunning, creative visuals in
					seconds.
				</p>

				<div className="flex items-center justify-start space-x-2">
					<button
						onClick={() => router.push("/features-action/ai-art")}
						type="button"
						className="bg-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-purple-700 transition"
					>
						Generate Images
					</button>
				</div>
			</div>

			{/* Close Icon */}
			<Link href={"/"}>
				<div className="absolute top-5 right-5 cursor-pointer">
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-white hover:text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default ImageGeneratorUI;
