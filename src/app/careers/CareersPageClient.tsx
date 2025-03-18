"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowRight,
	MapPin,
	Clock,
	Briefcase,
	CheckCircle,
	Users,
	Heart,
	Award,
} from "lucide-react";
import CtaSection from "@/components/cta-section";
import { COMPANY_NAME } from "@/lib/constant";

export default function CareersPageClient() {
	const benefits = [
		{
			icon: <Users className='h-12 w-12 text-primary' />,
			title: "Collaborative Environment",
			description:
				"Work with a team of passionate professionals who support and inspire each other.",
		},
		{
			icon: <Briefcase className='h-12 w-12 text-primary' />,
			title: "Professional Growth",
			description:
				"Continuous learning opportunities, training programs, and career advancement paths.",
		},
		{
			icon: <Clock className='h-12 w-12 text-primary' />,
			title: "Work-Life Balance",
			description:
				"Flexible work arrangements, generous PTO, and respect for your personal time.",
		},
		{
			icon: <Award className='h-12 w-12 text-primary' />,
			title: "Competitive Compensation",
			description:
				"Attractive salary packages, performance bonuses, and comprehensive benefits.",
		},
	];

	const openPositions = [
		{
			title: "SEO Specialist",
			department: "Digital Marketing",
			location: "Digital City (Hybrid)",
			type: "Full-time",
			description:
				"We're looking for an experienced SEO Specialist to develop and implement effective SEO strategies that increase our clients' organic search visibility and drive qualified traffic to their websites.",
			responsibilities: [
				"Conduct keyword research and competitive analysis",
				"Perform on-page and technical SEO audits",
				"Develop and implement SEO strategies",
				"Monitor and analyze website performance",
				"Create detailed SEO reports for clients",
			],
			requirements: [
				"2+ years of SEO experience",
				"Strong analytical skills and experience with SEO tools",
				"Knowledge of current SEO best practices",
				"Excellent communication skills",
				"Bachelor's degree in Marketing or related field (preferred)",
			],
		},
		{
			title: "Social Media Manager",
			department: "Digital Marketing",
			location: "Remote",
			type: "Full-time",
			description:
				"We're seeking a creative and data-driven Social Media Manager to develop and execute social media strategies that build brand awareness, engage target audiences, and drive business results for our clients.",
			responsibilities: [
				"Develop and implement social media strategies",
				"Create and curate engaging content for multiple platforms",
				"Manage social media communities and respond to inquiries",
				"Monitor social media trends and best practices",
				"Analyze performance metrics and prepare reports",
			],
			requirements: [
				"3+ years of social media management experience",
				"Proficiency with social media platforms and management tools",
				"Strong content creation and copywriting skills",
				"Experience with paid social advertising",
				"Bachelor's degree in Marketing, Communications, or related field",
			],
		},
		{
			title: "PPC Campaign Manager",
			department: "Digital Marketing",
			location: "Digital City (On-site)",
			type: "Full-time",
			description:
				"We're looking for a detail-oriented PPC Campaign Manager to create, manage, and optimize paid advertising campaigns across multiple platforms to maximize ROI for our clients.",
			responsibilities: [
				"Develop and implement PPC strategies across Google Ads, Meta Ads, and other platforms",
				"Create compelling ad copy and select appropriate targeting options",
				"Monitor campaign performance and make data-driven optimizations",
				"Manage client budgets and ensure efficient spend",
				"Prepare performance reports and provide strategic recommendations",
			],
			requirements: [
				"3+ years of experience managing PPC campaigns",
				"Google Ads and Meta Ads certifications",
				"Strong analytical skills and experience with PPC tools",
				"Excellent client communication skills",
				"Bachelor's degree in Marketing or related field",
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
						<motion.div
							className='flex flex-col justify-center space-y-4'
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Join Our Team
								</h1>
								<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed'>
									Be part of a dynamic team that's passionate
									about digital marketing and committed to
									delivering exceptional results for our
									clients.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								<Link href='#open-positions'>
									<Button size='lg' className='px-8'>
										View Open Positions
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</Link>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center justify-center'
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<Image
								src='/team.jpg?height=550&width=550'
								width={550}
								height={550}
								alt='Our Team'
								className='rounded-lg object-cover'
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Join Us */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Why Join Us
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Life at {COMPANY_NAME}
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								We're more than just a digital marketing agency.
								We're a community of passionate professionals
								who value innovation, collaboration, and growth.
							</p>
						</div>
					</motion.div>

					<motion.div
						className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}>
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ y: -10 }}
								transition={{ type: "spring" }}>
								<Card className='h-full'>
									<CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
										<div className='p-2 bg-primary/10 rounded-full'>
											{benefit.icon}
										</div>
										<h3 className='text-xl font-bold'>
											{benefit.title}
										</h3>
										<p className='text-muted-foreground'>
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Our Values */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
						<motion.div
							className='flex items-center justify-center'
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}>
							<Image
								src='/aboutimg.jpg?height=550&width=550'
								width={550}
								height={550}
								alt='Our Values'
								className='rounded-lg object-cover'
							/>
						</motion.div>
						<motion.div
							className='flex flex-col justify-center space-y-4'
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
									Our Values
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									What We Stand For
								</h2>
								<p className='text-muted-foreground md:text-xl/relaxed'>
									Our values shape our culture and guide how
									we work together and serve our clients.
								</p>
							</div>
							<div className='space-y-6 mt-6'>
								<motion.div
									className='flex items-start gap-4'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.1 }}>
									<div className='bg-primary/10 p-2 rounded-full'>
										<Award className='h-6 w-6 text-primary' />
									</div>
									<div>
										<h3 className='text-xl font-bold'>
											Excellence
										</h3>
										<p className='text-muted-foreground'>
											We strive for excellence in
											everything we do, from strategy
											development to campaign execution.
										</p>
									</div>
								</motion.div>
								<motion.div
									className='flex items-start gap-4'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.2 }}>
									<div className='bg-primary/10 p-2 rounded-full'>
										<Users className='h-6 w-6 text-primary' />
									</div>
									<div>
										<h3 className='text-xl font-bold'>
											Collaboration
										</h3>
										<p className='text-muted-foreground'>
											We believe in the power of teamwork
											and collaboration to achieve the
											best results.
										</p>
									</div>
								</motion.div>
								<motion.div
									className='flex items-start gap-4'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.3 }}>
									<div className='bg-primary/10 p-2 rounded-full'>
										<Briefcase className='h-6 w-6 text-primary' />
									</div>
									<div>
										<h3 className='text-xl font-bold'>
											Integrity
										</h3>
										<p className='text-muted-foreground'>
											We operate with complete
											transparency and honesty in all our
											interactions.
										</p>
									</div>
								</motion.div>
								<motion.div
									className='flex items-start gap-4'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.4 }}>
									<div className='bg-primary/10 p-2 rounded-full'>
										<Heart className='h-6 w-6 text-primary' />
									</div>
									<div>
										<h3 className='text-xl font-bold'>
											Passion
										</h3>
										<p className='text-muted-foreground'>
											We're passionate about digital
											marketing and dedicated to helping
											our clients succeed.
										</p>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section
				id='open-positions'
				className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Opportunities
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Open Positions
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Join our team and take your career to the next
								level. Check out our current openings below.
							</p>
						</div>
					</motion.div>

					<div className='grid gap-8'>
						{openPositions.map((position, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}>
								<Card>
									<CardHeader>
										<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
											<div>
												<CardTitle className='text-2xl'>
													{position.title}
												</CardTitle>
												<CardDescription className='text-lg'>
													{position.department}
												</CardDescription>
											</div>
											<div className='flex flex-wrap gap-2'>
												<div className='flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full'>
													<MapPin className='h-4 w-4' />
													<span>
														{position.location}
													</span>
												</div>
												<div className='flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full'>
													<Briefcase className='h-4 w-4' />
													<span>{position.type}</span>
												</div>
											</div>
										</div>
									</CardHeader>
									<CardContent className='space-y-6'>
										<p>{position.description}</p>
										<div>
											<h4 className='font-semibold text-lg mb-2'>
												Key Responsibilities:
											</h4>
											<ul className='space-y-2'>
												{position.responsibilities.map(
													(responsibility, i) => (
														<li
															key={i}
															className='flex items-start gap-2'>
															<CheckCircle className='h-5 w-5 text-primary shrink-0 mt-0.5' />
															<span>
																{responsibility}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
										<div>
											<h4 className='font-semibold text-lg mb-2'>
												Requirements:
											</h4>
											<ul className='space-y-2'>
												{position.requirements.map(
													(requirement, i) => (
														<li
															key={i}
															className='flex items-start gap-2'>
															<CheckCircle className='h-5 w-5 text-primary shrink-0 mt-0.5' />
															<span>
																{requirement}
															</span>
														</li>
													)
												)}
											</ul>
										</div>
									</CardContent>
									<CardFooter>
										<Button className='w-full md:w-auto'>
											Apply Now
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>

					<motion.div
						className='mt-12 text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}>
						<p className='text-muted-foreground mb-4'>
							Don't see a position that matches your skills? We're
							always looking for talented individuals to join our
							team.
						</p>
						<Button variant='outline' size='lg'>
							Submit Your Resume
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Application Process */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								How to Apply
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Our Hiring Process
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Here's what you can expect when you apply for a
								position at {COMPANY_NAME}.
							</p>
						</div>
					</motion.div>

					<div className='grid gap-8 md:grid-cols-4'>
						{[
							{
								step: 1,
								title: "Application Review",
								description:
									"Our HR team reviews your application and resume to assess your qualifications and experience.",
							},
							{
								step: 2,
								title: "Initial Interview",
								description:
									"If selected, you'll have an initial phone or video interview with our HR team to discuss your background and the role.",
							},
							{
								step: 3,
								title: "Technical Assessment",
								description:
									"Depending on the role, you may be asked to complete a skills assessment or case study to demonstrate your expertise.",
							},
							{
								step: 4,
								title: "Final Interview",
								description:
									"Meet with the hiring manager and team members for a more in-depth discussion about the role and your fit with our culture.",
							},
						].map((step, index) => (
							<motion.div
								key={index}
								className='flex flex-col items-center text-center space-y-4'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}>
								<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
									<span className='text-xl font-bold'>
										{step.step}
									</span>
								</div>
								<h3 className='text-xl font-bold'>
									{step.title}
								</h3>
								<p className='text-muted-foreground'>
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
}
