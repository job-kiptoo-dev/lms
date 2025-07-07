import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { GithubIcon } from "lucide-react";

export default function LoginPage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Welcome Back </CardTitle>
				<CardDescription>
					Log in with your  Github & Email Account

				</CardDescription>
			</CardHeader>

			<CardContent>
				<Button className="w-full" variant="outline">
					<GithubIcon className="size4" />
					connect with Github
				</Button>
			</CardContent>
		</Card >
	)
}


