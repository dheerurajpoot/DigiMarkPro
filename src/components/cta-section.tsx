import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Ready to Grow Your Business?
						</h2>
						<p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Let&apos;s discuss how our digital marketing
							strategies can help you achieve your business goals.
						</p>
					</div>
					<div className='flex flex-col gap-2 min-[400px]:flex-row'>
						<Link href='/contact'>
							<Button
								size='lg'
								variant='secondary'
								className='px-8'>
								Get Started
								<ArrowRight className='ml-2 h-4 w-4' />
							</Button>
						</Link>
						<Link href='/services'>
							<Button
								size='lg'
								variant='outline'
								className='px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10'>
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
