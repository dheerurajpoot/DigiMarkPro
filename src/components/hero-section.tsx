"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const headlines = [
		"Boost Your Digital Presence",
		"Drive More Qualified Leads",
		"Increase Your ROI",
	];

	const descriptions = [
		"We help businesses grow through strategic digital marketing solutions tailored to your unique needs.",
		"Our data-driven approach targets your ideal customers at every stage of the buyer's journey.",
		"Our campaigns are designed to maximize your return on investment and drive business growth.",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % headlines.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [headlines.length]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	const floatingAnimation = {
		y: [0, -10, 0],
		transition: {
			duration: 3,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "reverse" as const,
		},
	};

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden'>
			<div className='container mx-auto px-4 md:px-6 relative'>
				<motion.div
					className='absolute inset-0 overflow-hidden pointer-events-none'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<motion.div
						className='absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl'
						animate={{
							x: [0, 50, 0],
							y: [0, 30, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 15,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
						}}
					/>
					<motion.div
						className='absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'
						animate={{
							x: [0, -30, 0],
							y: [0, 50, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 18,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
						}}
					/>
				</motion.div>

				<div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
					<motion.div
						className='flex flex-col justify-center space-y-4'
						variants={containerVariants}
						initial='hidden'
						animate='visible'>
						<motion.div
							className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary'
							variants={itemVariants}>
							<span className='font-medium'>
								Digital Marketing Excellence
							</span>
							<ChevronRight className='ml-1 h-4 w-4' />
						</motion.div>
						<div className='space-y-2 '>
							<AnimatePresence mode='wait'>
								<motion.div
									key={currentSlide}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}>
									<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										{headlines[currentSlide]}
									</h1>
									<p className='max-w-[600px] text-muted-foreground md:text-xl mt-2'>
										{descriptions[currentSlide]}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>
						<motion.div
							className='flex flex-col gap-2 min-[400px]:flex-row'
							variants={itemVariants}>
							<Link href='/contact'>
								<Button
									size='lg'
									className='px-8 bg-gradient-to-r from-primary to-primary/80 group'>
									Get Started
									<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
								</Button>
							</Link>
							<Link href='/services'>
								<Button
									size='lg'
									variant='outline'
									className='px-8'>
									Learn More
								</Button>
							</Link>
						</motion.div>
						<motion.div
							className='flex flex-col sm:flex-row gap-4 mt-4'
							variants={itemVariants}>
							{[
								"Free Strategy Call",
								"No Long-Term Contracts",
								"Proven Results",
							].map((item, index) => (
								<motion.div
									key={index}
									className='flex items-center gap-2'
									whileHover={{ x: 5 }}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 10,
									}}>
									<CheckCircle className='h-5 w-5 text-primary' />
									<span className='text-sm'>{item}</span>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
					<motion.div
						className='flex items-center justify-center relative'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}>
						<div className='absolute w-full h-full bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-20'></div>
						<div className='relative z-10 w-full max-w-[550px] aspect-square'>
							<Image
								src='/placeholder.svg?height=550&width=550'
								width={550}
								height={550}
								alt='Digital Marketing Hero'
								className='rounded-lg object-cover'
							/>
							<motion.div
								className='absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 border'
								animate={floatingAnimation}>
								<div className='flex items-center gap-3'>
									<div className='bg-primary/10 p-2 rounded-full'>
										<svg
											className='h-6 w-6 text-primary'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M21 21H3V3H12V5H5V19H19V12H21V21Z'
												fill='currentColor'
											/>
											<path
												d='M21 7H17V3H15V7H11V9H15V13H17V9H21V7Z'
												fill='currentColor'
											/>
										</svg>
									</div>
									<div>
										<p className='text-sm font-medium'>
											Increase Traffic
										</p>
										<p className='text-xs text-muted-foreground'>
											Up to 200% growth
										</p>
									</div>
								</div>
							</motion.div>
							<motion.div
								className='absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 border'
								animate={floatingAnimation}
								transition={{
									duration: 3,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
									delay: 1.5,
								}}>
								<div className='flex items-center gap-3'>
									<div className='bg-primary/10 p-2 rounded-full'>
										<svg
											className='h-6 w-6 text-primary'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M16 6V4H8V6H16ZM18 6H20V20H4V6H6V2H18V6ZM18 8H6V18H18V8ZM14 10V16H10V10H14Z'
												fill='currentColor'
											/>
										</svg>
									</div>
									<div>
										<p className='text-sm font-medium'>
											Conversion Rate
										</p>
										<p className='text-xs text-muted-foreground'>
											15% improvement
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
