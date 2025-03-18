"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constant";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const routes = [
		{ href: "/", label: "Home" },
		{ href: "/services", label: "Services" },
		{ href: "/pricing", label: "Pricing" },
		{ href: "/about", label: "About" },
		{ href: "/blog", label: "Blog" },
	];

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between'>
				<div className='flex items-center ml-5 gap-2'>
					<Link href='/' className='flex items-center gap-2'>
						<span className='text-2xl font-bold'>
							{COMPANY_NAME}
						</span>
					</Link>
				</div>
				<nav className='hidden md:flex gap-6'>
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								isActive(route.href)
									? "text-primary"
									: "text-muted-foreground"
							}`}>
							{route.label}
						</Link>
					))}
				</nav>
				<div className='hidden md:flex items-center gap-4'>
					<Link href='/contact'>
						<Button>Contact Us</Button>
					</Link>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className='md:hidden mr-5'>
						<Button variant='outline' size='icon'>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<SheetTitle></SheetTitle>
						<div className='flex flex-col gap-6 px-6 pt-6'>
							<Link
								href='/'
								className='flex items-center gap-2'
								onClick={() => setIsOpen(false)}>
								<span className='text-2xl font-bold'>
									{COMPANY_NAME}
								</span>
							</Link>
							<nav className='flex flex-col gap-4'>
								{routes.map((route) => (
									<Link
										key={route.href}
										href={route.href}
										className={`text-sm font-medium transition-colors hover:text-primary ${
											isActive(route.href)
												? "text-primary"
												: "text-muted-foreground"
										}`}
										onClick={() => setIsOpen(false)}>
										{route.label}
									</Link>
								))}
								<Link
									href='/contact'
									onClick={() => setIsOpen(false)}>
									<Button className='w-full'>
										Contact Us
									</Button>
								</Link>
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
