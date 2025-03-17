import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
	const testimonials = [
		{
			quote: "Working with this team transformed our online presence. Our organic traffic increased by 200% in just 6 months!",
			author: "Sarah Johnson",
			title: "CEO, TechStart Inc.",
			avatar: "/placeholder.svg?height=80&width=80",
		},
		{
			quote: "Their PPC campaigns delivered an ROI of 300%. They truly understand how to optimize ad spend for maximum results.",
			author: "Michael Chen",
			title: "Marketing Director, GrowthBox",
			avatar: "/placeholder.svg?height=80&width=80",
		},
		{
			quote: "The social media strategy they developed helped us connect with our audience in meaningful ways and increased our engagement by 150%.",
			author: "Emily Rodriguez",
			title: "Brand Manager, StyleHouse",
			avatar: "/placeholder.svg?height=80&width=80",
		},
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Testimonials
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							What Our Clients Say
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Don't just take our word for it. Here's what our
							clients have to say about our services.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3'>
					{testimonials.map((testimonial, index) => (
						<Card key={index} className='relative overflow-hidden'>
							<CardContent className='p-6'>
								<Quote className='h-8 w-8 text-primary/20 absolute top-4 right-4' />
								<p className='mb-4 text-muted-foreground'>
									"{testimonial.quote}"
								</p>
								<div className='flex items-center gap-4'>
									<Image
										src={
											testimonial.avatar ||
											"/placeholder.svg"
										}
										width={50}
										height={50}
										alt={testimonial.author}
										className='rounded-full'
									/>
									<div>
										<p className='font-semibold'>
											{testimonial.author}
										</p>
										<p className='text-sm text-muted-foreground'>
											{testimonial.title}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
