"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
	src: string; // Image source URL
	alt: string;
	isAuthorized: boolean; // Whether the user is authorized or not
}

export default function PixelatedPreview({ src, alt, isAuthorized }: Props) {
	const [imageUrl, setImageUrl] = useState(src);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isAuthorized) {
			setImageUrl(src);
		} else {
			setImageUrl("/bg-d.png");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthorized]);

	return (
		<div className="relative w-full h-full">
			<Image
				src={imageUrl}
				alt={alt}
                priority
				width={500}
				height={500}
				className={isAuthorized ? "" : "pixelated"}
			/>
		</div>
	);
}
