import Image from "next/image";
import { Target, TrendingUp, Users } from "lucide-react";

export default function WhyChooseUsSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Why Choose Us
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
								Results-Driven Digital Marketing
							</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								We're committed to delivering measurable results
								that help your business grow.
							</p>
						</div>
						<div className='space-y-4'>
							<div className='flex items-start gap-4'>
								<Target className='h-6 w-6 text-primary mt-1' />
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Data-Driven Approach
									</h3>
									<p className='text-muted-foreground'>
										We make decisions based on data and
										analytics to ensure the best results for
										your campaigns.
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<TrendingUp className='h-6 w-6 text-primary mt-1' />
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Proven Track Record
									</h3>
									<p className='text-muted-foreground'>
										Our strategies have helped businesses of
										all sizes achieve significant growth.
									</p>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<Users className='h-6 w-6 text-primary mt-1' />
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Expert Team
									</h3>
									<p className='text-muted-foreground'>
										Our team of specialists brings years of
										experience across all digital marketing
										channels.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<Image
							src='/why.jpg?height=550&width=550'
							width={550}
							height={550}
							alt='Why Choose Us'
							className='rounded-lg object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
