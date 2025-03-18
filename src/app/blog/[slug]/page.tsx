"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	ArrowLeft,
	Calendar,
	User,
	MessageCircle,
	ThumbsUp,
	Facebook,
	Twitter,
	Linkedin,
	Mail,
	ArrowRight,
	Clock,
} from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
	const [post, setPost] = useState<any>(null);
	const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// In a real application, you would fetch the post data from an API
		// For this example, we'll use mock data
		const fetchPost = async () => {
			setIsLoading(true);

			// Simulate API call delay
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Mock data for the current post
			const mockPost = {
				title: "10 SEO Strategies That Actually Work in 2025",
				slug: "seo-strategies-2025",
				excerpt:
					"Discover the most effective SEO strategies that are driving results in today's competitive digital landscape.",
				content: `
          <p>Search Engine Optimization (SEO) continues to evolve at a rapid pace. What worked a few years ago may not be effective today. As we move into 2025, it's crucial for businesses to stay ahead of the curve and adapt their SEO strategies to the changing landscape.</p>
          
          <h2>1. Focus on User Experience</h2>
          <p>Google's algorithms are increasingly prioritizing websites that provide an excellent user experience. This includes factors like page load speed, mobile responsiveness, intuitive navigation, and engaging content. In 2025, user experience is not just a ranking factor—it's a fundamental aspect of successful SEO.</p>
          
          <h2>2. Optimize for Voice Search</h2>
          <p>With the growing popularity of voice assistants like Siri, Alexa, and Google Assistant, optimizing for voice search has become essential. Voice searches tend to be more conversational and question-based, so focus on long-tail keywords and natural language in your content.</p>
          
          <h2>3. Create High-Quality, In-Depth Content</h2>
          <p>Content remains king in SEO, but the bar for quality continues to rise. In 2025, successful content needs to be comprehensive, authoritative, and valuable to your audience. Focus on creating in-depth articles that thoroughly cover topics relevant to your industry.</p>
          
          <h2>4. Leverage AI and Machine Learning</h2>
          <p>AI tools can help you analyze vast amounts of data to identify trends, optimize content, and personalize user experiences. Incorporating AI into your SEO strategy can give you a competitive edge in understanding user intent and delivering relevant content.</p>
          
          <h2>5. Prioritize E-E-A-T</h2>
          <p>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are crucial factors in Google's evaluation of content quality. Establish your brand as an authority in your industry by showcasing expertise, providing accurate information, and building trust with your audience.</p>
          
          <h2>6. Optimize for Core Web Vitals</h2>
          <p>Core Web Vitals—metrics that measure loading performance, interactivity, and visual stability—continue to be important ranking factors. Ensure your website performs well in these areas to improve both user experience and search rankings.</p>
          
          <h2>7. Focus on Local SEO</h2>
          <p>For businesses with physical locations, local SEO remains crucial. Optimize your Google Business Profile, encourage customer reviews, and ensure your NAP (Name, Address, Phone) information is consistent across all platforms.</p>
          
          <h2>8. Build High-Quality Backlinks</h2>
          <p>Backlinks from reputable websites continue to be a strong ranking factor. Focus on earning high-quality backlinks through creating valuable content, guest posting, and building relationships with industry influencers.</p>
          
          <h2>9. Implement Schema Markup</h2>
          <p>Schema markup helps search engines understand the context of your content, which can lead to rich snippets in search results. Implementing schema markup can improve click-through rates and visibility in search results.</p>
          
          <h2>10. Monitor and Adapt to Algorithm Updates</h2>
          <p>Google regularly updates its algorithms, and staying informed about these changes is essential for maintaining and improving your search rankings. Monitor industry news, track your website's performance, and be ready to adapt your strategy as needed.</p>
          
          <h2>Conclusion</h2>
          <p>SEO in 2025 is about creating a holistic strategy that prioritizes user experience, quality content, and technical excellence. By implementing these ten strategies, you can improve your website's visibility in search results and drive more organic traffic to your business.</p>
        `,
				date: "March 15, 2025",
				author: {
					name: "Sarah Williams",
					role: "SEO Director",
					avatar: "/placeholder.svg?height=80&width=80",
				},
				category: "SEO",
				image: "/placeholder.svg?height=600&width=1200",
				tags: [
					"SEO",
					"Digital Marketing",
					"Content Strategy",
					"Google Algorithm",
				],
				readTime: "8 min read",
			};

			// Mock data for related posts
			const mockRelatedPosts = [
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
			];

			setPost(mockPost);
			setRelatedPosts(mockRelatedPosts);
			setIsLoading(false);
		};

		fetchPost();
	}, [params.slug]);

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

	if (isLoading) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'></div>
			</div>
		);
	}

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='flex flex-col items-center justify-center space-y-4 text-center'
						initial='hidden'
						animate='visible'
						variants={containerVariants}>
						<motion.div
							className='space-y-2 max-w-3xl'
							variants={itemVariants}>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								{post.category}
							</div>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								{post.title}
							</h1>
							<p className='text-muted-foreground md:text-xl/relaxed'>
								{post.excerpt}
							</p>
						</motion.div>
						<motion.div
							className='flex items-center gap-4 text-sm text-muted-foreground'
							variants={itemVariants}>
							<div className='flex items-center gap-1'>
								<Calendar className='h-4 w-4' />
								<span>{post.date}</span>
							</div>
							<div className='flex items-center gap-1'>
								<User className='h-4 w-4' />
								<span>{post.author.name}</span>
							</div>
							<div className='flex items-center gap-1'>
								<Clock className='h-4 w-4' />
								<span>{post.readTime}</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Featured Image */}
			<section className='w-full py-8 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='relative aspect-video overflow-hidden rounded-lg'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<Image
							src={post.image || "/placeholder.svg"}
							alt={post.title}
							fill
							className='object-cover'
							priority
						/>
					</motion.div>
				</div>
			</section>

			{/* Blog Content */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-10 lg:grid-cols-12'>
						{/* Main Content */}
						<motion.div
							className='lg:col-span-8 space-y-10'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}>
							{/* Author Info */}
							<div className='flex items-center gap-4 p-4 bg-muted rounded-lg'>
								<Avatar className='h-12 w-12'>
									<AvatarImage
										src={post.author.avatar}
										alt={post.author.name}
									/>
									<AvatarFallback>
										{post.author.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className='font-semibold'>
										{post.author.name}
									</p>
									<p className='text-sm text-muted-foreground'>
										{post.author.role}
									</p>
								</div>
							</div>

							{/* Article Content */}
							<article className='prose prose-lg max-w-none dark:prose-invert'>
								<div
									dangerouslySetInnerHTML={{
										__html: post.content,
									}}
								/>
							</article>

							{/* Tags */}
							<div className='flex flex-wrap gap-2'>
								{post.tags.map((tag: string, index: number) => (
									<Link
										key={index}
										href={`/blog/tag/${tag
											.toLowerCase()
											.replace(/\s+/g, "-")}`}>
										<div className='bg-muted hover:bg-muted/80 px-3 py-1 rounded-full text-sm'>
											{tag}
										</div>
									</Link>
								))}
							</div>

							{/* Social Share */}
							<div className='border-t border-b py-6 space-y-4'>
								<h3 className='font-semibold'>
									Share this article
								</h3>
								<div className='flex gap-4'>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full'>
										<Facebook className='h-5 w-5' />
										<span className='sr-only'>
											Share on Facebook
										</span>
									</Button>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full'>
										<Twitter className='h-5 w-5' />
										<span className='sr-only'>
											Share on Twitter
										</span>
									</Button>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full'>
										<Linkedin className='h-5 w-5' />
										<span className='sr-only'>
											Share on LinkedIn
										</span>
									</Button>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full'>
										<Mail className='h-5 w-5' />
										<span className='sr-only'>
											Share via Email
										</span>
									</Button>
								</div>
							</div>

							{/* Comments Section */}
							<div className='space-y-6'>
								<h3 className='text-2xl font-bold'>
									Comments (3)
								</h3>
								<div className='space-y-6'>
									{[1, 2, 3].map((comment) => (
										<div
											key={comment}
											className='p-4 border rounded-lg space-y-2'>
											<div className='flex items-center gap-2'>
												<Avatar className='h-8 w-8'>
													<AvatarImage
														src={`/placeholder.svg?height=32&width=32`}
														alt='User'
													/>
													<AvatarFallback>
														U
													</AvatarFallback>
												</Avatar>
												<div>
													<p className='font-semibold'>
														User Name
													</p>
													<p className='text-xs text-muted-foreground'>
														March 16, 2025
													</p>
												</div>
											</div>
											<p>
												Great article! I&apos;ve been
												implementing some of these
												strategies and have seen
												significant improvements in our
												search rankings.
											</p>
											<div className='flex items-center gap-4 text-sm'>
												<button className='flex items-center gap-1 text-muted-foreground hover:text-foreground'>
													<ThumbsUp className='h-4 w-4' />
													<span>Like</span>
												</button>
												<button className='flex items-center gap-1 text-muted-foreground hover:text-foreground'>
													<MessageCircle className='h-4 w-4' />
													<span>Reply</span>
												</button>
											</div>
										</div>
									))}
								</div>
								<div className='mt-6'>
									<h4 className='font-semibold mb-2'>
										Leave a comment
									</h4>
									<textarea
										className='w-full p-3 border rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary'
										placeholder='Share your thoughts...'></textarea>
									<Button className='mt-2'>
										Submit Comment
									</Button>
								</div>
							</div>
						</motion.div>

						{/* Sidebar */}
						<motion.div
							className='lg:col-span-4 space-y-8'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							{/* Related Posts */}
							<div className='space-y-4'>
								<h3 className='text-xl font-bold'>
									Related Articles
								</h3>
								<div className='space-y-4'>
									{relatedPosts.map((relatedPost, index) => (
										<Link
											key={index}
											href={`/blog/${relatedPost.slug}`}>
											<Card className='overflow-hidden hover:shadow-md transition-shadow'>
												<div className='relative aspect-video'>
													<Image
														src={
															relatedPost.image ||
															"/placeholder.svg"
														}
														alt={relatedPost.title}
														fill
														className='object-cover'
													/>
												</div>
												<CardHeader className='p-4 pb-2'>
													<CardTitle className='text-base'>
														{relatedPost.title}
													</CardTitle>
												</CardHeader>
												<CardContent className='p-4 pt-0'>
													<CardDescription className='line-clamp-2 text-xs'>
														{relatedPost.excerpt}
													</CardDescription>
												</CardContent>
											</Card>
										</Link>
									))}
								</div>
							</div>

							{/* Categories */}
							<div className='space-y-4'>
								<h3 className='text-xl font-bold'>
									Categories
								</h3>
								<div className='space-y-2'>
									{[
										"SEO",
										"PPC",
										"Social Media",
										"Content Marketing",
										"Email Marketing",
										"Analytics",
									].map((category, index) => (
										<Link
											key={index}
											href={`/blog/category/${category
												.toLowerCase()
												.replace(/\s+/g, "-")}`}>
											<div className='flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors'>
												<span>{category}</span>
												<ArrowRight className='h-4 w-4' />
											</div>
										</Link>
									))}
								</div>
							</div>

							{/* Newsletter Signup */}
							<Card>
								<CardHeader>
									<CardTitle>
										Subscribe to Our Newsletter
									</CardTitle>
									<CardDescription>
										Get the latest digital marketing
										insights delivered to your inbox.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='space-y-2'>
										<input
											type='email'
											placeholder='Your email address'
											className='w-full p-2 border rounded-md'
										/>
										<Button className='w-full'>
											Subscribe
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Back to Blog */}
			<section className='w-full py-8 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<Link href='/blog'>
						<Button variant='outline' className='group'>
							<ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
							Back to Blog
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
