import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
	title: "Blog - DigiMarkPro",
	description:
		"Explore our latest insights, tips, and strategies for digital marketing success.",
};

export default function BlogPage() {
	const blogPosts = [
		{
			title: "10 SEO Strategies That Actually Work in 2025",
			excerpt:
				"Discover the most effective SEO strategies that are driving results in today's competitive digital landscape.",
			date: "March 15, 2025",
			author: "Sarah Williams",
			category: "SEO",
			image: "/placeholder.svg?height=400&width=600",
			slug: "seo-strategies-2025",
		},
		{
			title: "How to Create a PPC Campaign That Converts",
			excerpt:
				"Learn the step-by-step process for creating high-converting PPC campaigns that maximize your ROI.",
			date: "March 10, 2025",
			author: "Michael Chen",
			category: "PPC",
			image: "/placeholder.svg?height=400&width=600",
			slug: "ppc-campaign-converts",
		},
		{
			title: "Social Media Trends to Watch in 2025",
			excerpt:
				"Stay ahead of the curve with these emerging social media trends that are shaping the digital marketing landscape.",
			date: "March 5, 2025",
			author: "Emily Rodriguez",
			category: "Social Media",
			image: "/placeholder.svg?height=400&width=600",
			slug: "social-media-trends-2025",
		},
		{
			title: "The Ultimate Guide to Content Marketing",
			excerpt:
				"Everything you need to know about creating a content marketing strategy that drives traffic, engagement, and conversions.",
			date: "February 28, 2025",
			author: "David Thompson",
			category: "Content Marketing",
			image: "/placeholder.svg?height=400&width=600",
			slug: "ultimate-guide-content-marketing",
		},
		{
			title: "Email Marketing Best Practices for Higher Open Rates",
			excerpt:
				"Improve your email open rates and engagement with these proven best practices and strategies.",
			date: "February 20, 2025",
			author: "Jessica Lee",
			category: "Email Marketing",
			image: "/placeholder.svg?height=400&width=600",
			slug: "email-marketing-best-practices",
		},
		{
			title: "How to Measure Digital Marketing ROI",
			excerpt:
				"Learn how to effectively track and measure the ROI of your digital marketing campaigns across all channels.",
			date: "February 15, 2025",
			author: "Alex Johnson",
			category: "Analytics",
			image: "/placeholder.svg?height=400&width=600",
			slug: "measure-digital-marketing-roi",
		},
	];

	const categories = [
		"All",
		"SEO",
		"PPC",
		"Social Media",
		"Content Marketing",
		"Email Marketing",
		"Analytics",
	];

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Digital Marketing Insights
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Expert tips, strategies, and insights to help
								you succeed in the digital landscape.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Blog Posts */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					{/* Categories */}
					<div className='flex flex-wrap gap-2 mb-12 justify-center'>
						{categories.map((category, index) => (
							<Button
								key={index}
								variant={index === 0 ? "default" : "outline"}
								size='sm'>
								{category}
							</Button>
						))}
					</div>

					{/* Featured Post */}
					<div className='mb-12'>
						<Card className='overflow-hidden'>
							<div className='grid md:grid-cols-2 gap-6'>
								<div className='relative aspect-video md:aspect-auto md:h-full'>
									<Image
										src={
											blogPosts[0].image ||
											"/placeholder.svg"
										}
										alt={blogPosts[0].title}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-6 flex flex-col justify-center'>
									<div className='space-y-2 mb-4'>
										<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
											{blogPosts[0].category}
										</div>
										<h2 className='text-3xl font-bold'>
											{blogPosts[0].title}
										</h2>
										<p className='text-muted-foreground'>
											{blogPosts[0].excerpt}
										</p>
									</div>
									<div className='flex items-center gap-4 text-sm text-muted-foreground mb-6'>
										<div className='flex items-center gap-1'>
											<Calendar className='h-4 w-4' />
											<span>{blogPosts[0].date}</span>
										</div>
										<div className='flex items-center gap-1'>
											<User className='h-4 w-4' />
											<span>{blogPosts[0].author}</span>
										</div>
									</div>
									<Link href={`/blog/${blogPosts[0].slug}`}>
										<Button>
											Read More
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</div>
							</div>
						</Card>
					</div>

					{/* Blog Grid */}
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{blogPosts.slice(1).map((post, index) => (
							<Card
								key={index}
								className='overflow-hidden flex flex-col h-full'>
								<div className='relative aspect-video'>
									<Image
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										fill
										className='object-cover'
									/>
								</div>
								<CardHeader className='p-6 pb-4'>
									<div className='space-y-2'>
										<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
											{post.category}
										</div>
										<CardTitle>{post.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent className='p-6 pt-0 flex-1'>
									<CardDescription className='mb-4'>
										{post.excerpt}
									</CardDescription>
									<div className='flex items-center gap-4 text-sm text-muted-foreground'>
										<div className='flex items-center gap-1'>
											<Calendar className='h-4 w-4' />
											<span>{post.date}</span>
										</div>
										<div className='flex items-center gap-1'>
											<User className='h-4 w-4' />
											<span>{post.author}</span>
										</div>
									</div>
								</CardContent>
								<CardFooter className='p-6 pt-0'>
									<Link
										href={`/blog/${post.slug}`}
										className='w-full'>
										<Button
											variant='outline'
											className='w-full'>
											Read More
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>

					{/* Pagination */}
					<div className='flex justify-center mt-12'>
						<div className='flex gap-2'>
							<Button variant='outline' size='icon' disabled>
								<ArrowRight className='h-4 w-4 rotate-180' />
							</Button>
							<Button size='sm'>1</Button>
							<Button variant='outline' size='sm'>
								2
							</Button>
							<Button variant='outline' size='sm'>
								3
							</Button>
							<Button variant='outline' size='icon'>
								<ArrowRight className='h-4 w-4' />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Subscribe to Our Newsletter
							</h2>
							<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Get the latest digital marketing insights, tips,
								and strategies delivered straight to your inbox.
							</p>
						</div>
						<div className='w-full max-w-md space-y-2'>
							<form className='flex space-x-2'>
								<input
									className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
									placeholder='Enter your email'
									type='email'
									required
								/>
								<Button type='submit'>Subscribe</Button>
							</form>
							<p className='text-xs text-muted-foreground'>
								We respect your privacy. Unsubscribe at any
								time.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
