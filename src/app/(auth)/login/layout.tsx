import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

export default function authLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-svh flex-col items-center justify-center">
			<Link href="/" className={buttonVariants({
				variant: "outline",
				className: "absolute left-4 top-4",
			})}>
				<ArrowLeft className="size=4" />
				Go Back
			</Link>
			<div className="flex w-full max-w-sm flex-col gap-6">

				<Link href="/" className=" flex items-center gap-2 self-center font-medium" >
					<Image src={logo} alt="Logo" width={32} height={32} className="rounded-md" />
					MarshalLMS.
				</Link>

				{children}

				<div className=" text-balance text-center text-sm text-muted-foreground">
					By clicking continue, you are agree to our <span className="hover:text-primary hover:underline "> Terms of services </span> and
					{" "}
					<span className="hover:text-primary hover:underline"> Privacy Policy </span>
				</div>
			</div>
		</div>
	)
}

