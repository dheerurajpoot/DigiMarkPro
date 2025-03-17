"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, BarChart2, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

export default function ServicesSection() {
	const services = [
		{
			icon: <BarChart2 className='h-6 w-6 text-primary' />,
			title: "SEO Optimization",
			description:
				"Improve your search engine rankings and drive organic traffic to your website.",
			features: [
				"Keyword Research",
				"On-Page Optimization",
				"Link Building",
			],
			link: "/services/seo",
		},
		{
			icon: <Zap className='h-6 w-6 text-primary' />,
			title: "PPC Advertising",
			description:
				"Drive targeted traffic and generate leads with paid advertising campaigns.",
			features: [
				"Google Ads",
				"Social Media Ads",
				"Retargeting Campaigns",
			],
			link: "/services/ppc",
		},
		{
			icon: <Users className='h-6 w-6 text-primary' />,
			title: "Social Media",
			description:
				"Build your brand presence and engage with your audience on social platforms.",
			features: [
				"Content Strategy",
				"Community Management",
				"Analytics & Reporting",
			],
			link: "/services/social-media",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
		hover: {
			y: -10,
			boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<AnimatedSection className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Our Services
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Comprehensive Digital Solutions
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							We offer a wide range of digital marketing services
							to help your business grow and succeed online.
						</p>
					</div>
				</AnimatedSection>

				<motion.div
					className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover='hover'>
							<Card className='relative overflow-hidden h-full transition-all duration-300'>
								<CardHeader className='pb-0'>
									<motion.div
										className='flex items-center gap-2 mb-2'
										initial={{ x: -20, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2 * index }}
										viewport={{ once: true }}>
										{service.icon}
										<CardTitle>{service.title}</CardTitle>
									</motion.div>
									<CardDescription>
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent className='pt-4'>
									<ul className='space-y-2'>
										{service.features.map((feature, i) => (
											<motion.li
												key={i}
												className='flex items-center gap-2'
												initial={{ opacity: 0, x: -10 }}
												whileInView={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													delay:
														0.1 * i + 0.3 * index,
												}}
												viewport={{ once: true }}>
												<CheckCircle className='h-4 w-4 text-primary' />
												<span>{feature}</span>
											</motion.li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Link
										href={service.link}
										className='w-full'>
										<Button
											variant='outline'
											className='w-full group'>
											Learn More
											<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<AnimatedSection className='flex justify-center' delay={3}>
					<Link href='/services'>
						<Button size='lg' className='group'>
							View All Services
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</Link>
				</AnimatedSection>
			</div>
		</section>
	);
}
