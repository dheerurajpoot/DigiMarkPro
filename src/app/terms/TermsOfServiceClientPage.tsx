"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
	DOMAIN_NAME,
} from "@/lib/constant";

export default function TermsOfServicePageClient() {
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
								Terms of Service
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
								Welcome to {COMPANY_NAME}. These Terms of
								Service ("Terms") govern your access to and use
								of the
								{COMPANY_NAME} website and services. By
								accessing or using our services, you agree to be
								bound by these Terms. If you disagree with any
								part of the Terms, you may not access our
								services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. Definitions
							</h2>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									<strong>
										"Company," "we," "us," or "our"
									</strong>{" "}
									refers to {COMPANY_NAME}.
								</li>
								<li>
									<strong>"Services"</strong> refers to the
									digital marketing services provided by
									{COMPANY_NAME}, including but not limited to
									SEO, PPC advertising, social media
									marketing, content marketing, and email
									marketing.
								</li>
								<li>
									<strong>"Website"</strong> refers to the
									{COMPANY_NAME} website, accessible at
									{DOMAIN_NAME}.
								</li>
								<li>
									<strong>"You," "your," or "Client"</strong>{" "}
									refers to the individual or entity accessing
									or using our Services.
								</li>
								<li>
									<strong>"Content"</strong> refers to all
									materials, information, data, text,
									graphics, links, or other materials provided
									by us or you in connection with the
									Services.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>3. Services</h2>
							<p>
								{COMPANY_NAME} provides digital marketing
								services to help businesses improve their online
								presence and achieve their marketing goals. The
								specific services to be provided will be
								outlined in a separate agreement or statement of
								work.
							</p>
							<p>
								We reserve the right to modify, suspend, or
								discontinue any part of our Services at any
								time, with or without notice. We shall not be
								liable to you or any third party for any
								modification, suspension, or discontinuation of
								our Services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. Client Responsibilities
							</h2>
							<p>As a client, you agree to:</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									Provide accurate and complete information
									necessary for the provision of Services.
								</li>
								<li>
									Respond to our requests for information,
									approvals, or decisions in a timely manner
									to avoid delays in service delivery.
								</li>
								<li>
									Review and provide feedback on deliverables
									within the timeframes specified in the
									service agreement.
								</li>
								<li>
									Comply with all applicable laws,
									regulations, and industry standards in
									connection with your use of our Services.
								</li>
								<li>
									Maintain the confidentiality of any account
									credentials and be responsible for all
									activities that occur under your account.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								5. Payment Terms
							</h2>
							<p>
								Payment terms, including fees, invoicing
								schedule, and payment methods, will be specified
								in the service agreement. Unless otherwise
								stated:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									All fees are quoted in US dollars and are
									exclusive of applicable taxes.
								</li>
								<li>
									Invoices are due upon receipt unless
									otherwise specified.
								</li>
								<li>
									Late payments may result in the suspension
									of Services and may incur late payment fees
									as permitted by law.
								</li>
								<li>
									We reserve the right to change our fees upon
									reasonable notice, which will be effective
									for any renewal term.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Intellectual Property
							</h2>
							<h3 className='text-xl font-semibold'>
								Our Intellectual Property
							</h3>
							<p>
								All content, features, and functionality of our
								Website, including but not limited to text,
								graphics, logos, icons, images, audio clips,
								digital downloads, data compilations, and
								software, are the exclusive property of
								{COMPANY_NAME} or our licensors and are
								protected by copyright, trademark, and other
								intellectual property laws.
							</p>

							<h3 className='text-xl font-semibold'>
								Client Materials
							</h3>
							<p>
								You retain ownership of all intellectual
								property rights in any materials, content, or
								data you provide to us for the purpose of
								providing the Services. You grant us a
								non-exclusive, worldwide, royalty-free license
								to use, reproduce, modify, and display such
								materials solely for the purpose of providing
								the Services to you.
							</p>

							<h3 className='text-xl font-semibold'>
								Deliverables
							</h3>
							<p>
								Unless otherwise specified in the service
								agreement, upon full payment of all applicable
								fees, you will own all rights to the
								deliverables created specifically for you as
								part of the Services, excluding any pre-existing
								materials, third-party materials, or tools used
								to create the deliverables.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Confidentiality
							</h2>
							<p>
								Each party agrees to maintain the
								confidentiality of any confidential information
								received from the other party in connection with
								the Services. Confidential information includes,
								but is not limited to, business plans, customer
								lists, financial information, marketing
								strategies, and proprietary technology.
							</p>
							<p>
								This confidentiality obligation does not apply
								to information that: (a) is or becomes publicly
								available through no fault of the receiving
								party; (b) was known to the receiving party
								prior to disclosure; (c) is independently
								developed by the receiving party; or (d) is
								required to be disclosed by law or legal
								process.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Limitation of Liability
							</h2>
							<p>
								To the maximum extent permitted by law,
								{COMPANY_NAME} shall not be liable for any
								indirect, incidental, special, consequential, or
								punitive damages, including but not limited to
								loss of profits, data, use, or goodwill, arising
								out of or in connection with these Terms or your
								use of our Services.
							</p>
							<p>
								In no event shall our aggregate liability for
								any claims arising out of or related to these
								Terms or the Services exceed the total amount
								paid by you to us for the Services during the
								six (6) months preceding the event giving rise
								to the claim.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								9. Indemnification
							</h2>
							<p>
								You agree to indemnify, defend, and hold
								harmless {COMPANY_NAME} and our officers,
								directors, employees, agents, and affiliates
								from and against any and all claims,
								liabilities, damages, losses, costs, expenses,
								or fees (including reasonable attorneys' fees)
								arising from or relating to:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>Your use of our Services;</li>
								<li>Your violation of these Terms;</li>
								<li>
									Your violation of any rights of a third
									party; or
								</li>
								<li>
									Your conduct in connection with the
									Services.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								10. Term and Termination
							</h2>
							<p>
								The term of the Services will be specified in
								the service agreement. Either party may
								terminate the Services as provided in the
								service agreement or:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>By mutual written agreement;</li>
								<li>
									If the other party materially breaches these
									Terms and fails to cure such breach within
									thirty (30) days after receiving written
									notice;
								</li>
								<li>
									If the other party becomes insolvent, makes
									an assignment for the benefit of creditors,
									or becomes subject to bankruptcy
									proceedings.
								</li>
							</ul>
							<p>
								Upon termination, you shall pay all outstanding
								fees for Services rendered up to the date of
								termination. Sections of these Terms that by
								their nature should survive termination shall
								survive, including but not limited to
								intellectual property, confidentiality,
								limitation of liability, and indemnification.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								11. Governing Law and Dispute Resolution
							</h2>
							<p>
								These Terms shall be governed by and construed
								in accordance with the laws of the State of
								[State], without regard to its conflict of law
								principles.
							</p>
							<p>
								Any dispute arising out of or relating to these
								Terms or the Services shall be resolved through
								binding arbitration in accordance with the rules
								of the American Arbitration Association. The
								arbitration shall take place in [City, State],
								and the language of the arbitration shall be
								English.
							</p>
							<p>
								Notwithstanding the foregoing, either party may
								seek injunctive or other equitable relief in any
								court of competent jurisdiction to protect its
								intellectual property rights.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								12. Miscellaneous
							</h2>
							<h3 className='text-xl font-semibold'>
								Entire Agreement
							</h3>
							<p>
								These Terms, together with the service agreement
								and any other agreements referenced herein,
								constitute the entire agreement between you and
								{COMPANY_NAME} regarding the Services and
								supersede all prior agreements and
								understandings.
							</p>

							<h3 className='text-xl font-semibold'>
								Severability
							</h3>
							<p>
								If any provision of these Terms is found to be
								unenforceable or invalid, that provision shall
								be limited or eliminated to the minimum extent
								necessary so that the Terms shall otherwise
								remain in full force and effect.
							</p>

							<h3 className='text-xl font-semibold'>Waiver</h3>
							<p>
								The failure of either party to enforce any right
								or provision of these Terms shall not be deemed
								a waiver of such right or provision.
							</p>

							<h3 className='text-xl font-semibold'>
								Assignment
							</h3>
							<p>
								You may not assign or transfer these Terms or
								your rights and obligations hereunder without
								our prior written consent. We may assign or
								transfer these Terms without your consent.
							</p>

							<h3 className='text-xl font-semibold'>
								Force Majeure
							</h3>
							<p>
								Neither party shall be liable for any failure or
								delay in performance due to circumstances beyond
								its reasonable control, including but not
								limited to acts of God, natural disasters, war,
								terrorism, riots, embargoes, acts of civil or
								military authorities, fire, floods, accidents,
								strikes, or shortages of transportation
								facilities, fuel, energy, labor, or materials.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								13. Contact Information
							</h2>
							<p>
								If you have any questions about these Terms,
								please contact us at:
							</p>
							<div className='not-prose'>
								<p>{COMPANY_NAME}</p>
								<p>{COMPANY_ADDRESS}</p>
								<p>Email: {COMPANY_EMAIL}</p>
								<p>Phone: {COMPANY_PHONE}</p>
							</div>
						</div>

						<div className='pt-8'>
							<Link href='/'>
								<Button variant='outline' className='group'>
									<ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
									Back to Home
								</Button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
