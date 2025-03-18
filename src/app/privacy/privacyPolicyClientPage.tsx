"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "@/lib/constant";

export default function PrivacyPolicyClientPage() {
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
			<section className='w-full py-12 bg-gradient-to-b from-primary/5 to-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='flex flex-col items-center justify-center space-y-4 text-center'
						initial='hidden'
						animate='visible'
						variants={containerVariants}>
						<motion.div
							className='space-y-2'
							variants={itemVariants}>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Privacy Policy
							</h1>
							<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Last updated: March 18, 2025
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section className='w-full py-12 bg-background'>
				<div className='container mx-auto px-4 md:px-6'>
					<motion.div
						className='mx-auto max-w-3xl space-y-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								1. Introduction
							</h2>
							<p>
								At {COMPANY_NAME} (&quot;we,&quot;
								&quot;our,&quot; or &quot;us&quot;), we respect
								your privacy and are committed to protecting
								your personal information. This Privacy Policy
								explains how we collect, use, disclose, and
								safeguard your information when you visit our
								website or use our services.
							</p>
							<p>
								Please read this Privacy Policy carefully. If
								you do not agree with the terms of this Privacy
								Policy, please do not access the site or use our
								services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. Information We Collect
							</h2>
							<h3 className='text-xl font-semibold'>
								Personal Information
							</h3>
							<p>
								We may collect personal information that you
								voluntarily provide to us when you:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>Fill out forms on our website</li>
								<li>Subscribe to our newsletter</li>
								<li>Request information or services</li>
								<li>Participate in surveys or promotions</li>
								<li>
									Contact us via email, phone, or other
									communication channels
								</li>
							</ul>
							<p>
								This information may include your name, email
								address, phone number, company name, job title,
								and any other information you choose to provide.
							</p>

							<h3 className='text-xl font-semibold'>
								Automatically Collected Information
							</h3>
							<p>
								When you visit our website, we may automatically
								collect certain information about your device
								and usage patterns. This information may
								include:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>IP address</li>
								<li>Browser type and version</li>
								<li>Operating system</li>
								<li>Referring website</li>
								<li>Pages viewed and time spent on pages</li>
								<li>Links clicked</li>
								<li>Date and time of visit</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								3. How We Use Your Information
							</h2>
							<p>
								We may use the information we collect for
								various purposes, including to:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									Provide, maintain, and improve our services
								</li>
								<li>
									Process transactions and send related
									information
								</li>
								<li>
									Send administrative information, such as
									updates, security alerts, and support
									messages
								</li>
								<li>
									Respond to your comments, questions, and
									requests
								</li>
								<li>
									Communicate with you about products,
									services, offers, and events
								</li>
								<li>
									Monitor and analyze trends, usage, and
									activities
								</li>
								<li>
									Detect, prevent, and address technical
									issues
								</li>
								<li>
									Protect against harmful or unlawful activity
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. Cookies and Tracking Technologies
							</h2>
							<p>
								We use cookies and similar tracking technologies
								to track activity on our website and hold
								certain information. Cookies are files with a
								small amount of data that may include an
								anonymous unique identifier.
							</p>
							<p>
								You can instruct your browser to refuse all
								cookies or to indicate when a cookie is being
								sent. However, if you do not accept cookies, you
								may not be able to use some portions of our
								website.
							</p>
							<p>
								For more information about our use of cookies,
								please see our{" "}
								<Link
									href='/cookies'
									className='text-primary hover:underline'>
									Cookie Policy
								</Link>
								.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								5. Data Sharing and Disclosure
							</h2>
							<p>
								We may share your information in the following
								situations:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									<strong>Service Providers:</strong> We may
									share your information with third-party
									vendors, service providers, contractors, or
									agents who perform services for us.
								</li>
								<li>
									<strong>Business Transfers:</strong> We may
									share or transfer your information in
									connection with, or during negotiations of,
									any merger, sale of company assets,
									financing, or acquisition of all or a
									portion of our business.
								</li>
								<li>
									<strong>Legal Requirements:</strong> We may
									disclose your information if required to do
									so by law or in response to valid requests
									by public authorities.
								</li>
								<li>
									<strong>Protection of Rights:</strong> We
									may disclose your information to protect and
									defend our rights or property, or the safety
									of our users or others.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Your Privacy Rights
							</h2>
							<p>
								Depending on your location, you may have certain
								rights regarding your personal information,
								including:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									The right to access personal information we
									hold about you
								</li>
								<li>
									The right to request correction of
									inaccurate information
								</li>
								<li>
									The right to request deletion of your
									information
								</li>
								<li>
									The right to restrict or object to
									processing
								</li>
								<li>The right to data portability</li>
								<li>The right to withdraw consent</li>
							</ul>
							<p>
								To exercise these rights, please contact us
								using the information provided in the
								&quot;Contact Us&quot; section below.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Data Security
							</h2>
							<p>
								We implement appropriate technical and
								organizational measures to protect your personal
								information against unauthorized access,
								alteration, disclosure, or destruction. However,
								no method of transmission over the Internet or
								electronic storage is 100% secure, and we cannot
								guarantee absolute security.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Children&apos;s Privacy
							</h2>
							<p>
								Our services are not intended for individuals
								under the age of 16. We do not knowingly collect
								personal information from children. If you are a
								parent or guardian and believe your child has
								provided us with personal information, please
								contact us, and we will take steps to delete
								such information.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								9. Changes to This Privacy Policy
							</h2>
							<p>
								We may update our Privacy Policy from time to
								time. We will notify you of any changes by
								posting the new Privacy Policy on this page and
								updating the &quot;Last updated&quot; date. You
								are advised to review this Privacy Policy
								periodically for any changes.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								10. Contact Us
							</h2>
							<p>
								If you have any questions or concerns about this
								Privacy Policy or our data practices, please
								contact us at:
							</p>
							<div className='not-prose'>
								<p>{COMPANY_NAME}</p>
								<p>{COMPANY_ADDRESS}</p>
								<p>Email: {COMPANY_EMAIL}</p>
								<p>Phone: {COMPANY_PHONE}</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
