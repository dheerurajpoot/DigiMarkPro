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
import { CheckCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPANY_NAME } from "@/lib/constant";

export const metadata = {
	title: `Pricing - ${COMPANY_NAME}`,
	description:
		"Explore our flexible pricing plans designed to fit businesses of all sizes.",
};

export default function PricingPage() {
	const plans = [
		{
			name: "Starter",
			description:
				"Perfect for small businesses just getting started with digital marketing.",
			price: "$999",
			duration: "per month",
			features: [
				"SEO Audit & Basic Optimization",
				"Social Media Management (2 platforms)",
				"Monthly Content Creation (2 blog posts)",
				"Basic Google Ads Management",
				"Monthly Performance Report",
				"Email Support",
			],
			popular: false,
			buttonText: "Get Started",
		},
		{
			name: "Growth",
			description:
				"Ideal for growing businesses looking to expand their digital presence.",
			price: "$1,999",
			duration: "per month",
			features: [
				"Comprehensive SEO Strategy & Optimization",
				"Social Media Management (4 platforms)",
				"Content Creation (4 blog posts/month)",
				"Google Ads & Meta Ads Management",
				"Email Marketing Campaigns",
				"Bi-weekly Performance Reports",
				"Dedicated Account Manager",
				"Phone & Email Support",
			],
			popular: true,
			buttonText: "Get Started",
		},
		{
			name: "Enterprise",
			description:
				"For established businesses seeking comprehensive digital marketing solutions.",
			price: "$3,999",
			duration: "per month",
			features: [
				"Advanced SEO Strategy & Implementation",
				"Social Media Management (All platforms)",
				"Premium Content Creation (8+ pieces/month)",
				"Full PPC Campaign Management",
				"Custom Email Marketing Strategy",
				"Weekly Performance Reports",
				"Dedicated Marketing Team",
				"Priority Support & Strategy Calls",
				"Conversion Rate Optimization",
			],
			popular: false,
			buttonText: "Contact Us",
		},
	];

	const faqs = [
		{
			question: "Do you require long-term contracts?",
			answer: "We offer flexible month-to-month agreements as well as discounted long-term contracts. Our standard agreements are for 6 months, but we can customize based on your needs.",
		},
		{
			question: "Can I customize the services in each plan?",
			answer: "Our plans are designed to provide a structured starting point, but we can customize any plan to meet your specific business needs and goals.",
		},
		{
			question: "How quickly will I see results?",
			answer: "Digital marketing results vary based on many factors including your industry, competition, and current online presence. Generally, you can expect to see initial improvements within 2-3 months, with more significant results appearing after 4-6 months of consistent effort.",
		},
		{
			question: "Do you offer any guarantees?",
			answer: "While we can't guarantee specific rankings or results (no ethical agency can), we do guarantee our commitment to your success, transparent reporting, and continuous optimization of your campaigns.",
		},
		{
			question: "What happens if I want to cancel?",
			answer: "If you need to cancel, we require a 30-day written notice. We'll work with you to ensure a smooth transition and provide all necessary data and assets.",
		},
		{
			question: "Do you work with businesses in any industry?",
			answer: "We work with businesses across most industries, though we have particular expertise in B2B, e-commerce, professional services, and local businesses. We'll be upfront if we don't have experience in your specific industry.",
		},
	];

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Transparent Pricing Plans
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Choose the perfect plan for your business needs.
								No hidden fees, just results.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className='w-full py-12 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{plans.map((plan, index) => (
							<Card
								key={index}
								className={`flex flex-col h-full ${
									plan.popular
										? "border-primary shadow-lg"
										: ""
								}`}>
								{plan.popular && (
									<div className='bg-primary text-primary-foreground text-center py-2 text-sm font-medium'>
										Most Popular
									</div>
								)}
								<CardHeader>
									<CardTitle>{plan.name}</CardTitle>
									<CardDescription>
										{plan.description}
									</CardDescription>
									<div className='mt-4'>
										<span className='text-4xl font-bold'>
											{plan.price}
										</span>
										<span className='text-muted-foreground ml-1'>
											{plan.duration}
										</span>
									</div>
								</CardHeader>
								<CardContent className='flex-1'>
									<ul className='space-y-2'>
										{plan.features.map((feature, i) => (
											<li
												key={i}
												className='flex items-start gap-2'>
												<CheckCircle className='h-5 w-5 text-primary shrink-0 mt-0.5' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Link href='/contact' className='w-full'>
										<Button
											className='w-full'
											variant={
												plan.popular
													? "default"
													: "outline"
											}>
											{plan.buttonText}
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
					<div className='mt-12 text-center'>
						<p className='text-muted-foreground mb-4'>
							Need a custom solution? We offer tailored packages
							for specific business needs.
						</p>
						<Link href='/contact'>
							<Button variant='outline' size='lg'>
								Contact Us for Custom Pricing
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Frequently Asked Questions
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Find answers to common questions about our
								pricing and services.
							</p>
						</div>
					</div>
					<div className='mx-auto max-w-3xl'>
						<Accordion type='single' collapsible className='w-full'>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}>
									<AccordionTrigger className='text-left'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='mt-12 text-center'>
						<p className='text-muted-foreground mb-4'>
							Still have questions? We're here to help.
						</p>
						<Link href='/contact'>
							<Button>Contact Our Team</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
