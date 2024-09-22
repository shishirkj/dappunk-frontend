"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
	const [input, setInput] = useState("");
	const [generatedImage, setGeneratedImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Function to query the AI model
	async function query(data: unknown) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
			{
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(data),
			},
		);

		const contentType = response.headers.get("content-type");
		if (contentType?.includes("application/json")) {
			const jsonResponse = await response.json();
			return { error: jsonResponse };
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			const result = await response.blob();
			return { image: result };
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		setLoading(true);
		setError(null);

		query({ inputs: input })
			.then((response) => {
				if (response.error) {
					setError(response.error.error || "Failed to generate image.");
					setGeneratedImage("");
				} else if (response.image) {
					const imageUrl = URL.createObjectURL(response.image);
					setGeneratedImage(imageUrl);
				}
			})
			.catch((error) => {
				console.error("Error generating image:", error);
				setError("An error occurred. Please try again.");
			})
			.finally(() => {
				setLoading(false);
				setInput("");
			});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
			<h1 className="text-4xl font-bold mb-8">AI Art Generator</h1>
			<Card className="w-full max-w-md bg-gray-800 mb-8">
				<CardContent className="pt-6">
					<form onSubmit={handleSubmit} className="space-y-4">
						<Input
							type="text"
							placeholder="Enter text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="bg-gray-700 text-white border-gray-600"
							required
						/>
						<div className="flex justify-center">
							<Button
								type="submit"
								className="bg-purple-600 hover:bg-purple-700"
								disabled={loading}
							>
								{loading ? "Generating..." : "Generate Art"}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* Display error message */}
			{error && (
				<div className="text-red-500 mb-4">
					<p>{error}</p>
				</div>
			)}

			{/* Render the generated image */}
			{generatedImage && (
				<Card className="w-full max-w-md bg-gray-800">
					<CardContent className="p-4">
						<Image
							src={generatedImage}
							alt="Generated Art"
							className="w-full h-auto"
							width={300}
							height={300}
						/>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
