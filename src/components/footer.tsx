import Link from "next/link";
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "@/lib/constant";

export default function Footer() {
	return (
		<footer className='bg-muted py-12 md:py-16'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>DigiMarkPro</h3>
						<p className='text-sm text-muted-foreground'>
							Your partner for digital growth and success. We help
							businesses thrive in the digital landscape.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
						</div>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Services</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/services'
									className='text-muted-foreground hover:text-primary'>
									SEO Optimization
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-muted-foreground hover:text-primary'>
									PPC Advertising
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-muted-foreground hover:text-primary'>
									Social Media Marketing
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='text-muted-foreground hover:text-primary'>
									Content Marketing
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Company</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='/about'
									className='text-muted-foreground hover:text-primary'>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-muted-foreground hover:text-primary'>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-muted-foreground hover:text-primary'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-muted-foreground hover:text-primary'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Contact</h3>
						<ul className='space-y-2 text-sm'>
							<li className='flex items-start gap-2'>
								<MapPin className='h-5 w-5 text-primary shrink-0 mt-0.5' />
								<span className='text-muted-foreground'>
									{COMPANY_ADDRESS}
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='h-5 w-5 text-primary shrink-0' />
								<span className='text-muted-foreground'>
									{COMPANY_PHONE}
								</span>
							</li>
							<li className='flex items-center gap-2'>
								<Mail className='h-5 w-5 text-primary shrink-0' />
								<span className='text-muted-foreground'>
									{COMPANY_EMAIL}
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-xs text-muted-foreground'>
						© {new Date().getFullYear()} {COMPANY_NAME}. Developed
						By
						<Link className='text-blue-400' href='https://evtn.org'>
							{" "}
							EVTN
						</Link>
					</p>
					<div className='flex gap-4 text-xs'>
						<Link
							href='/privacy'
							className='text-muted-foreground hover:text-primary'>
							Privacy Policy
						</Link>
						<Link
							href='/terms'
							className='text-muted-foreground hover:text-primary'>
							Terms of Service
						</Link>
						<Link
							href='/cookies'
							className='text-muted-foreground hover:text-primary'>
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
