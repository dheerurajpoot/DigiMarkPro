import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "@/lib/constant";

export const metadata = {
	title: `Contact Us - ${COMPANY_NAME}`,
	description:
		"Get in touch with our digital marketing experts to discuss your business needs.",
};

export default function ContactPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Get In Touch
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Have questions or ready to start your digital
								marketing journey? We're here to help.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section className='w-full py-12 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-8 lg:grid-cols-2'>
						<Card>
							<CardHeader>
								<CardTitle>Send Us a Message</CardTitle>
								<CardDescription>
									Fill out the form below and our team will
									get back to you within 24 hours.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ContactForm />
							</CardContent>
						</Card>
						<div className='space-y-8'>
							<Card>
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
									<CardDescription>
										Reach out to us directly using the
										information below.
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='flex items-start gap-3'>
										<MapPin className='h-5 w-5 text-primary shrink-0 mt-0.5' />
										<div>
											<h3 className='font-medium'>
												Address
											</h3>
											<p className='text-muted-foreground'>
												{COMPANY_ADDRESS}
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<Phone className='h-5 w-5 text-primary shrink-0 mt-0.5' />
										<div>
											<h3 className='font-medium'>
												Phone
											</h3>
											<p className='text-muted-foreground'>
												{COMPANY_PHONE}
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<Mail className='h-5 w-5 text-primary shrink-0 mt-0.5' />
										<div>
											<h3 className='font-medium'>
												Email
											</h3>
											<p className='text-muted-foreground'>
												{COMPANY_EMAIL}
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<Clock className='h-5 w-5 text-primary shrink-0 mt-0.5' />
										<div>
											<h3 className='font-medium'>
												Business Hours
											</h3>
											<p className='text-muted-foreground'>
												Monday - Friday: 9:00 AM - 5:00
												PM
												<br />
												Saturday - Sunday: Closed
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>
										Schedule a Consultation
									</CardTitle>
									<CardDescription>
										Book a free 30-minute consultation with
										one of our digital marketing experts.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button className='w-full'>
										Book a Call
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
