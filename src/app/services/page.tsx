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
import {
	ArrowRight,
	CheckCircle,
	BarChart2,
	Zap,
	Users,
	Mail,
	FileText,
	BarChart,
} from "lucide-react";
import CtaSection from "@/components/cta-section";
import { COMPANY_NAME } from "@/lib/constant";

export const metadata = {
	title: `Services - ${COMPANY_NAME}`,
	description:
		"Explore our comprehensive digital marketing services designed to help your business grow online.",
};

export default function ServicesPage() {
	const services = [
		{
			icon: <BarChart2 className='h-10 w-10 text-primary' />,
			title: "SEO Optimization",
			description:
				"Improve your search engine rankings and drive organic traffic to your website.",
			features: [
				"Keyword Research & Strategy",
				"On-Page SEO Optimization",
				"Technical SEO Audit & Fixes",
				"Link Building & Outreach",
				"Local SEO Optimization",
				"SEO Performance Reporting",
			],
			link: "/contact",
		},
		{
			icon: <Zap className='h-10 w-10 text-primary' />,
			title: "PPC Advertising",
			description:
				"Drive targeted traffic and generate leads with paid advertising campaigns.",
			features: [
				"Google Ads Management",
				"Social Media Advertising",
				"Display & Remarketing",
				"Landing Page Optimization",
				"Conversion Tracking",
				"ROI & Performance Analysis",
			],
			link: "/contact",
		},
		{
			icon: <Users className='h-10 w-10 text-primary' />,
			title: "Social Media Marketing",
			description:
				"Build your brand presence and engage with your audience on social platforms.",
			features: [
				"Social Media Strategy",
				"Content Creation & Curation",
				"Community Management",
				"Social Media Advertising",
				"Influencer Partnerships",
				"Performance Analytics",
			],
			link: "/contact",
		},
		{
			icon: <FileText className='h-10 w-10 text-primary' />,
			title: "Content Marketing",
			description:
				"Create valuable content that attracts, engages, and converts your target audience.",
			features: [
				"Content Strategy Development",
				"Blog Writing & Management",
				"Ebook & Whitepaper Creation",
				"Infographics & Visual Content",
				"Video Content Production",
				"Content Distribution",
			],
			link: "/contact",
		},
		{
			icon: <Mail className='h-10 w-10 text-primary' />,
			title: "Email Marketing",
			description:
				"Nurture leads and drive conversions with targeted email campaigns.",
			features: [
				"Email Strategy Development",
				"Newsletter Creation",
				"Automated Email Sequences",
				"List Management & Segmentation",
				"A/B Testing & Optimization",
				"Performance Tracking",
			],
			link: "/contact",
		},
		{
			icon: <BarChart className='h-10 w-10 text-primary' />,
			title: "Analytics & Reporting",
			description:
				"Gain insights into your marketing performance and make data-driven decisions.",
			features: [
				"Custom Dashboard Setup",
				"KPI Tracking & Analysis",
				"Conversion Tracking",
				"User Behavior Analysis",
				"Competitor Benchmarking",
				"Monthly Performance Reports",
			],
			link: "/contact",
		},
	];

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Our Services
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Comprehensive digital marketing solutions
								tailored to help your business grow online.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{services.map((service, index) => (
							<Card key={index} className='flex flex-col h-full'>
								<CardHeader>
									<div className='mb-2'>{service.icon}</div>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription>
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent className='flex-1'>
									<ul className='space-y-2'>
										{service.features.map((feature, i) => (
											<li
												key={i}
												className='flex items-center gap-2'>
												<CheckCircle className='h-4 w-4 text-primary' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Link href={service.link}>
										<Button className='w-full'>
											Learn More
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Our Process
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
								How We Work
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Our proven methodology ensures we deliver
								results that exceed your expectations.
							</p>
						</div>
					</div>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
						<div className='flex flex-col items-center text-center space-y-2'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
								<span className='text-xl font-bold'>1</span>
							</div>
							<h3 className='text-xl font-bold'>Discovery</h3>
							<p className='text-muted-foreground'>
								We learn about your business, goals, target
								audience, and competitors to develop a tailored
								strategy.
							</p>
						</div>
						<div className='flex flex-col items-center text-center space-y-2'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
								<span className='text-xl font-bold'>2</span>
							</div>
							<h3 className='text-xl font-bold'>Strategy</h3>
							<p className='text-muted-foreground'>
								We create a comprehensive marketing plan with
								clear objectives, tactics, and timelines.
							</p>
						</div>
						<div className='flex flex-col items-center text-center space-y-2'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
								<span className='text-xl font-bold'>3</span>
							</div>
							<h3 className='text-xl font-bold'>
								Implementation
							</h3>
							<p className='text-muted-foreground'>
								Our team executes the strategy with precision,
								focusing on quality and best practices.
							</p>
						</div>
						<div className='flex flex-col items-center text-center space-y-2'>
							<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground'>
								<span className='text-xl font-bold'>4</span>
							</div>
							<h3 className='text-xl font-bold'>
								Analysis & Optimization
							</h3>
							<p className='text-muted-foreground'>
								We continuously monitor performance, provide
								detailed reports, and optimize for better
								results.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
}
