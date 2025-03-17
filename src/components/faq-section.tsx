"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FaqSection() {
	const faqs = [
		{
			question: "What digital marketing services do you offer?",
			answer: "We offer a comprehensive range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and analytics. Each service is tailored to meet your specific business needs and goals.",
		},
		{
			question: "How quickly will I see results from digital marketing?",
			answer: "Results vary depending on the strategies implemented and your industry. SEO typically takes 3-6 months to show significant results, while PPC and social media advertising can generate immediate traffic. We provide regular reports to track progress and make adjustments as needed.",
		},
		{
			question: "How much does digital marketing cost?",
			answer: "Our pricing is customized based on your business needs, goals, and budget. We offer flexible packages starting from $999 per month. We recommend scheduling a consultation to discuss your specific requirements and get a tailored quote.",
		},
		{
			question: "Do you work with businesses in my industry?",
			answer: "We have experience working with businesses across various industries including e-commerce, healthcare, technology, education, real estate, and more. Our team adapts strategies to suit the unique challenges and opportunities in your specific industry.",
		},
	];

	return (
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
							FAQ
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Frequently Asked Questions
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Find answers to common questions about our digital
							marketing services.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='mx-auto max-w-3xl'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<Accordion type='single' collapsible className='w-full'>
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: index * 0.1 + 0.3,
								}}>
								<AccordionItem value={`item-${index}`}>
									<AccordionTrigger className='text-left'>
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>

					<motion.div
						className='mt-8 text-center'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}>
						<p className='text-muted-foreground mb-4'>
							Still have questions? We're here to help.
						</p>
						<Link href='/contact'>
							<Button
							// whileHover={{ scale: 1.05 }}
							// whileTap={{ scale: 0.95 }}
							>
								Contact Our Team
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
