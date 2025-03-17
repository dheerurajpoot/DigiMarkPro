import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Briefcase, Heart } from "lucide-react";
import CtaSection from "@/components/cta-section";

export const metadata = {
	title: "About Us - DigiMarkPro",
	description:
		"Learn about our digital marketing agency, our mission, values, and the team behind our success.",
};

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Alex Johnson",
			role: "Founder & CEO",
			bio: "With over 15 years of experience in digital marketing, Alex founded DigiMarkPro with a vision to help businesses achieve meaningful growth through strategic digital solutions.",
			image: "/placeholder.svg?height=300&width=300",
		},
		{
			name: "Sarah Williams",
			role: "SEO Director",
			bio: "Sarah leads our SEO department with her extensive knowledge of search algorithms and optimization strategies that drive organic traffic and improve rankings.",
			image: "/placeholder.svg?height=300&width=300",
		},
		{
			name: "Michael Chen",
			role: "PPC Specialist",
			bio: "Michael's expertise in paid advertising has helped our clients achieve remarkable ROI through carefully crafted and optimized ad campaigns across multiple platforms.",
			image: "/placeholder.svg?height=300&width=300",
		},
		{
			name: "Emily Rodriguez",
			role: "Social Media Manager",
			bio: "Emily's creative approach to social media strategy has enabled brands to build meaningful connections with their audiences and drive engagement across platforms.",
			image: "/placeholder.svg?height=300&width=300",
		},
	];

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									About DigiMarkPro
								</h1>
								<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed'>
									We're a team of digital marketing experts
									passionate about helping businesses grow
									their online presence and achieve their
									goals.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<Image
								src='/placeholder.svg?height=550&width=550'
								width={550}
								height={550}
								alt='Our Team'
								className='rounded-lg object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
						<div className='flex items-center justify-center'>
							<Image
								src='/placeholder.svg?height=550&width=550'
								width={550}
								height={550}
								alt='Our Story'
								className='rounded-lg object-cover'
							/>
						</div>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
									Our Story
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
									From Humble Beginnings to Industry Leaders
								</h2>
								<p className='text-muted-foreground md:text-xl/relaxed'>
									Founded in 2010, DigiMarkPro began as a
									small team with a big vision: to make
									effective digital marketing accessible to
									businesses of all sizes.
								</p>
							</div>
							<div className='space-y-4'>
								<p>
									What started as a three-person operation has
									grown into a full-service digital marketing
									agency with a team of over 50 specialists
									across SEO, PPC, social media, content
									marketing, and more.
								</p>
								<p>
									Throughout our journey, we've remained
									committed to our core values: delivering
									measurable results, maintaining
									transparency, fostering innovation, and
									building lasting client relationships.
								</p>
								<p>
									Today, we're proud to have helped hundreds
									of businesses across various industries
									achieve their digital marketing goals and
									establish a strong online presence.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Our Values
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								What Drives Us
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Our core values shape everything we do and guide
								our approach to digital marketing.
							</p>
						</div>
					</div>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
						<Card className='bg-background'>
							<CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
								<Award className='h-12 w-12 text-primary' />
								<h3 className='text-xl font-bold'>
									Excellence
								</h3>
								<p className='text-muted-foreground'>
									We strive for excellence in everything we
									do, from strategy development to campaign
									execution and reporting.
								</p>
							</CardContent>
						</Card>
						<Card className='bg-background'>
							<CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
								<Users className='h-12 w-12 text-primary' />
								<h3 className='text-xl font-bold'>
									Collaboration
								</h3>
								<p className='text-muted-foreground'>
									We believe in the power of collaboration,
									both within our team and with our clients,
									to achieve the best results.
								</p>
							</CardContent>
						</Card>
						<Card className='bg-background'>
							<CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
								<Briefcase className='h-12 w-12 text-primary' />
								<h3 className='text-xl font-bold'>Integrity</h3>
								<p className='text-muted-foreground'>
									We operate with complete transparency and
									honesty, ensuring our clients always know
									what we're doing and why.
								</p>
							</CardContent>
						</Card>
						<Card className='bg-background'>
							<CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
								<Heart className='h-12 w-12 text-primary' />
								<h3 className='text-xl font-bold'>Passion</h3>
								<p className='text-muted-foreground'>
									We're passionate about digital marketing and
									dedicated to helping our clients succeed in
									the digital landscape.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Meet Our Team */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
						<div className='space-y-2'>
							<div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
								Our Team
							</div>
							<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
								Meet the Experts
							</h2>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Our talented team of digital marketing
								specialists is the heart of our agency.
							</p>
						</div>
					</div>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className='flex flex-col items-center text-center space-y-4'>
								<div className='relative h-60 w-60 overflow-hidden rounded-full'>
									<Image
										src={member.image || "/placeholder.svg"}
										width={240}
										height={240}
										alt={member.name}
										className='object-cover'
									/>
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										{member.name}
									</h3>
									<p className='text-primary font-medium'>
										{member.role}
									</p>
									<p className='text-muted-foreground'>
										{member.bio}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className='mt-12 text-center'>
						<Link href='/team'>
							<Button variant='outline' size='lg'>
								View Full Team
								<ArrowRight className='ml-2 h-4 w-4' />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
}
