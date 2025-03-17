"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BarChart, LineChart, Target } from "lucide-react";

export default function ProcessSection() {
	const [activeTab, setActiveTab] = useState("research");

	const processes = [
		{
			id: "research",
			title: "Research & Analysis",
			icon: <Search className='h-10 w-10 text-primary' />,
			description:
				"We start by understanding your business, target audience, and competitors to develop a tailored strategy.",
			steps: [
				"Market Research",
				"Competitor Analysis",
				"Audience Targeting",
				"Keyword Research",
				"SWOT Analysis",
			],
		},
		{
			id: "strategy",
			title: "Strategy Development",
			icon: <Target className='h-10 w-10 text-primary' />,
			description:
				"Based on our research, we create a comprehensive digital marketing strategy aligned with your business goals.",
			steps: [
				"Goal Setting",
				"Channel Selection",
				"Content Planning",
				"Budget Allocation",
				"Timeline Creation",
			],
		},
		{
			id: "execution",
			title: "Campaign Execution",
			icon: <BarChart className='h-10 w-10 text-primary' />,
			description:
				"We implement the strategy across all selected channels, creating and optimizing campaigns for maximum impact.",
			steps: [
				"Content Creation",
				"Campaign Setup",
				"Ad Management",
				"SEO Implementation",
				"Social Media Management",
			],
		},
		{
			id: "optimization",
			title: "Analysis & Optimization",
			icon: <LineChart className='h-10 w-10 text-primary' />,
			description:
				"We continuously monitor performance, provide detailed reports, and optimize campaigns for better results.",
			steps: [
				"Performance Tracking",
				"Data Analysis",
				"A/B Testing",
				"Campaign Refinement",
				"ROI Reporting",
			],
		},
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Our Process
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							How We Drive Results
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Our proven methodology ensures we deliver measurable
							results that exceed your expectations.
						</p>
					</div>
				</div>

				<Tabs
					defaultValue='research'
					value={activeTab}
					onValueChange={setActiveTab}
					className='w-full'>
					<TabsList className='grid w-full grid-cols-2 md:grid-cols-4'>
						{processes.map((process) => (
							<TabsTrigger
								key={process.id}
								value={process.id}
								className='text-center'>
								{process.title}
							</TabsTrigger>
						))}
					</TabsList>
					{processes.map((process) => (
						<TabsContent
							key={process.id}
							value={process.id}
							className='mt-6'>
							<Card>
								<CardContent className='p-6'>
									<div className='grid md:grid-cols-2 gap-6'>
										<div className='space-y-4'>
											<div className='flex items-center gap-3'>
												{process.icon}
												<h3 className='text-2xl font-bold'>
													{process.title}
												</h3>
											</div>
											<p className='text-muted-foreground'>
												{process.description}
											</p>
										</div>
										<div>
											<h4 className='font-medium mb-4'>
												Key Activities:
											</h4>
											<ul className='space-y-2'>
												{process.steps.map(
													(step, index) => (
														<li
															key={index}
															className='flex items-center gap-2'>
															<div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs'>
																{index + 1}
															</div>
															<span>{step}</span>
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
}
