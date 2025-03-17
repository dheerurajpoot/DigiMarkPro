import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ToolsSection() {
	const tools = [
		{
			category: "Analytics",
			items: [
				{
					name: "Google Analytics",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{
					name: "SEMrush",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{
					name: "Ahrefs",
					logo: "/placeholder.svg?height=60&width=120",
				},
			],
		},
		{
			category: "Advertising",
			items: [
				{
					name: "Google Ads",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{
					name: "Facebook Ads",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{
					name: "LinkedIn Ads",
					logo: "/placeholder.svg?height=60&width=120",
				},
			],
		},
		{
			category: "Content & Social",
			items: [
				{
					name: "Hootsuite",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{ name: "Canva", logo: "/placeholder.svg?height=60&width=120" },
				{
					name: "Buffer",
					logo: "/placeholder.svg?height=60&width=120",
				},
			],
		},
		{
			category: "SEO",
			items: [
				{ name: "Moz", logo: "/placeholder.svg?height=60&width=120" },
				{
					name: "Screaming Frog",
					logo: "/placeholder.svg?height=60&width=120",
				},
				{
					name: "Yoast SEO",
					logo: "/placeholder.svg?height=60&width=120",
				},
			],
		},
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
							Our Toolkit
						</div>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Industry-Leading Tools
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							We leverage the best digital marketing tools to
							deliver exceptional results for our clients.
						</p>
					</div>
				</div>

				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{tools.map((toolCategory, index) => (
						<Card key={index} className='bg-background'>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold mb-4'>
									{toolCategory.category}
								</h3>
								<div className='space-y-4'>
									{toolCategory.items.map(
										(tool, toolIndex) => (
											<div
												key={toolIndex}
												className='flex items-center gap-3'>
												<div className='w-12 h-12 flex items-center justify-center bg-muted rounded-md overflow-hidden'>
													<Image
														src={
															tool.logo ||
															"/placeholder.svg"
														}
														width={60}
														height={30}
														alt={tool.name}
														className='object-contain'
													/>
												</div>
												<span>{tool.name}</span>
											</div>
										)
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
