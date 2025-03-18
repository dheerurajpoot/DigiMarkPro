"use client";

import { motion } from "framer-motion";
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_NAME,
	COMPANY_PHONE,
} from "@/lib/constant";

export default function CookiePolicyClientPage() {
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
								Cookie Policy
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
								This Cookie Policy explains how {COMPANY_NAME}
								&quot;we,&quot; &quot;our,&quot; or
								&quot;us&quot;) uses cookies and similar
								technologies on our website. This policy
								provides you with information about how we use
								cookies, what types of cookies we use, and how
								you can control them.
							</p>
							<p>
								By using our website, you consent to the use of
								cookies in accordance with this Cookie Policy.
								If you do not accept the use of cookies, please
								disable them as described in this policy or
								refrain from using our website.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. What Are Cookies?
							</h2>
							<p>
								Cookies are small text files that are stored on
								your device (computer, tablet, or mobile) when
								you visit a website. They are widely used to
								make websites work more efficiently, provide a
								better user experience, and give website owners
								information about how their site is being used.
							</p>
							<p>Cookies can be:</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									<strong>Session cookies:</strong> These are
									temporary cookies that expire when you close
									your browser.
								</li>
								<li>
									<strong>Persistent cookies:</strong> These
									remain on your device until they expire or
									you delete them.
								</li>
								<li>
									<strong>First-party cookies:</strong> These
									are set by the website you are visiting.
								</li>
								<li>
									<strong>Third-party cookies:</strong> These
									are set by a domain other than the one you
									are visiting.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								3. Types of Cookies We Use
							</h2>
							<p>
								We use the following types of cookies on our
								website:
							</p>

							<h3 className='text-xl font-semibold'>
								Essential Cookies
							</h3>
							<p>
								These cookies are necessary for the website to
								function properly. They enable basic functions
								like page navigation, secure areas access, and
								remembering your preferences. The website cannot
								function properly without these cookies, and
								they can only be disabled by changing your
								browser settings.
							</p>

							<h3 className='text-xl font-semibold'>
								Performance Cookies
							</h3>
							<p>
								These cookies help us understand how visitors
								interact with our website by collecting and
								reporting information anonymously. They provide
								us with information about which pages are most
								popular, how visitors move around the site, and
								whether they encounter any errors. This helps us
								improve the website&apos;s performance and user
								experience.
							</p>

							<h3 className='text-xl font-semibold'>
								Functional Cookies
							</h3>
							<p>
								These cookies enable enhanced functionality and
								personalization on our website. They may be set
								by us or by third-party providers whose services
								we have added to our pages. If you do not allow
								these cookies, some or all of these services may
								not function properly.
							</p>

							<h3 className='text-xl font-semibold'>
								Targeting/Advertising Cookies
							</h3>
							<p>
								These cookies are used to build a profile of
								your interests and show you relevant
								advertisements on other sites. They remember
								that you have visited our website and may share
								this information with other organizations, such
								as advertisers. If you do not allow these
								cookies, you will experience less targeted
								advertising.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. Specific Cookies We Use
							</h2>
							<p>
								Here are some of the specific cookies we use on
								our website:
							</p>
							<div className='overflow-x-auto'>
								<table className='min-w-full border-collapse'>
									<thead>
										<tr className='border-b'>
											<th className='py-2 px-4 text-left'>
												Cookie Name
											</th>
											<th className='py-2 px-4 text-left'>
												Type
											</th>
											<th className='py-2 px-4 text-left'>
												Purpose
											</th>
											<th className='py-2 px-4 text-left'>
												Duration
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className='border-b'>
											<td className='py-2 px-4'>_ga</td>
											<td className='py-2 px-4'>
												Performance
											</td>
											<td className='py-2 px-4'>
												Used by Google Analytics to
												distinguish users
											</td>
											<td className='py-2 px-4'>
												2 years
											</td>
										</tr>
										<tr className='border-b'>
											<td className='py-2 px-4'>_gid</td>
											<td className='py-2 px-4'>
												Performance
											</td>
											<td className='py-2 px-4'>
												Used by Google Analytics to
												distinguish users
											</td>
											<td className='py-2 px-4'>
												24 hours
											</td>
										</tr>
										<tr className='border-b'>
											<td className='py-2 px-4'>_gat</td>
											<td className='py-2 px-4'>
												Performance
											</td>
											<td className='py-2 px-4'>
												Used by Google Analytics to
												throttle request rate
											</td>
											<td className='py-2 px-4'>
												1 minute
											</td>
										</tr>
										<tr className='border-b'>
											<td className='py-2 px-4'>
												cookieconsent_status
											</td>
											<td className='py-2 px-4'>
												Essential
											</td>
											<td className='py-2 px-4'>
												Stores your cookie consent
												preferences
											</td>
											<td className='py-2 px-4'>
												1 year
											</td>
										</tr>
										<tr className='border-b'>
											<td className='py-2 px-4'>_fbp</td>
											<td className='py-2 px-4'>
												Targeting
											</td>
											<td className='py-2 px-4'>
												Used by Facebook to deliver
												advertisements
											</td>
											<td className='py-2 px-4'>
												3 months
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								5. Third-Party Cookies
							</h2>
							<p>
								We use services from third parties who may also
								set cookies on our website. These third parties
								include:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									Google Analytics (for website analytics)
								</li>
								<li>Google Ads (for advertising)</li>
								<li>
									Facebook (for social media integration and
									advertising)
								</li>
								<li>
									LinkedIn (for social media integration and
									advertising)
								</li>
								<li>HubSpot (for marketing automation)</li>
							</ul>
							<p>
								Please note that we do not have control over
								these third-party cookies. You can check the
								privacy policies of these third parties for more
								information about their cookies.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Managing Cookies
							</h2>
							<p>
								You can control and manage cookies in various
								ways. Please keep in mind that removing or
								blocking cookies may impact your user experience
								and parts of our website may no longer be fully
								accessible.
							</p>

							<h3 className='text-xl font-semibold'>
								Browser Controls
							</h3>
							<p>
								Most browsers allow you to view, manage, delete,
								and block cookies. Here&apos;s how to do it in
								popular browsers:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									<strong>Google Chrome:</strong> Settings
									&gt; Privacy and security &gt; Cookies and
									other site data
								</li>
								<li>
									<strong>Mozilla Firefox:</strong> Options
									&gt; Privacy & Security &gt; Cookies and
									Site Data
								</li>
								<li>
									<strong>Safari:</strong> Preferences &gt;
									Privacy &gt; Cookies and website data
								</li>
								<li>
									<strong>Microsoft Edge:</strong> Settings
									&gt; Cookies and site permissions &gt;
									Cookies and site data
								</li>
							</ul>

							<h3 className='text-xl font-semibold'>
								Opt-Out of Third-Party Cookies
							</h3>
							<p>
								You can opt out of third-party cookies used for
								advertising purposes by visiting:
							</p>
							<ul className='list-disc pl-6 space-y-2'>
								<li>
									<a
										href='http://www.aboutads.info/choices/'
										className='text-primary hover:underline'>
										Digital Advertising Alliance
									</a>
								</li>
								<li>
									<a
										href='http://www.youronlinechoices.eu/'
										className='text-primary hover:underline'>
										Your Online Choices (EU)
									</a>
								</li>
								<li>
									<a
										href='http://optout.networkadvertising.org/'
										className='text-primary hover:underline'>
										Network Advertising Initiative
									</a>
								</li>
							</ul>

							<h3 className='text-xl font-semibold'>
								Google Analytics Opt-Out
							</h3>
							<p>
								You can opt out of Google Analytics tracking by
								installing the{" "}
								<a
									href='https://tools.google.com/dlpage/gaoptout'
									className='text-primary hover:underline'
									target='_blank'
									rel='noopener noreferrer'>
									Google Analytics Opt-out Browser Add-on
								</a>
								.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Changes to This Cookie Policy
							</h2>
							<p>
								We may update our Cookie Policy from time to
								time. We will notify you of any changes by
								posting the new Cookie Policy on this page and
								updating the &quot;Last updated&quot; date. You
								are advised to review this Cookie Policy
								periodically for any changes.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Contact Us
							</h2>
							<p>
								If you have any questions or concerns about our
								Cookie Policy, please contact us at:
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
