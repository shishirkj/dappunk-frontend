"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import PixelatedPreview from "../features_UI/PixelatedPreview";
import API_URL from "@/config";

export default function PixelatedPreviewActions() {
	const [isAuthorized, setIsAuthorized] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [token, setToken] = useState<string | null>(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const login = async () => {
		try {
			const response = await fetch(`${API_URL}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});

			const data = await response.json();
			if (data.token) {
				setToken(data.token);
				setIsAuthorized(true);
				setError(null);
				setUsername("");
				setPassword("");
			} else {
				setError("Invalid credentials. Please try again.");
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setError("An error occurred. Please try again later.");
		}
	};

	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<Card className="bg-gray-900 border-gray-800">
					<CardHeader>
						<CardTitle className="text-white">Image Preview</CardTitle>
						<CardDescription className="text-gray-400">
							Log in to view the full image
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Alert className="mb-6 bg-gray-700 text-gray-100 border-gray-800">
							<InfoIcon className="h-4 w-4" />
							<AlertTitle>Demo Credentials</AlertTitle>
							<AlertDescription>
								Username: admin
								<br />
								Password: password123
							</AlertDescription>
						</Alert>

						<form
							onSubmit={(e) => {
								e.preventDefault();
								login();
							}}
							className="space-y-4"
						>
							<div className="space-y-2">
								<Label htmlFor="username" className="text-gray-300">
									Username
								</Label>
								<Input
									id="username"
									type="text"
									placeholder="Enter Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
									className="bg-gray-800 text-white border-gray-700 focus:border-gray-500"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password" className="text-gray-300">
									Password
								</Label>
								<Input
									id="password"
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="bg-gray-800 text-white border-gray-700 focus:border-gray-500"
								/>
							</div>
							{error && (
								<Alert
									variant="destructive"
									className="bg-red-900 text-red-100 border-red-800"
								>
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
							<Button
								type="submit"
								className="w-full bg-gray-600 hover:bg-gray-700 text-white"
							>
								View Full Image
							</Button>
						</form>
					</CardContent>
				</Card>

				<div className="mt-8">
					<PixelatedPreview
						src={isAuthorized ? "/bg-r.jpg" : "/bg-d.png"}
						alt="Art Preview"
						isAuthorized={isAuthorized}
					/>
				</div>
			</div>
		</div>
	);
}
