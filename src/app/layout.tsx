import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://digimarkpro.com"),
	title: {
		default: "DigiMarkPro - Digital Marketing Agency",
		template: "%s | DigiMarkPro",
	},
	description:
		"Professional digital marketing services to help your business grow online. SEO, PPC, social media, and content marketing solutions.",
	keywords: [
		"digital marketing",
		"SEO",
		"PPC",
		"social media marketing",
		"content marketing",
		"digital agency",
	],
	authors: [{ name: "Dheeru Rajpoot" }],
	creator: "DigiMarkPro",
	publisher: "DigiMarkPro",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://digimarkpro.com",
		siteName: "DigiMarkPro",
		title: "DigiMarkPro - Digital Marketing Agency",
		description:
			"Professional digital marketing services to help your business grow online. SEO, PPC, social media, and content marketing solutions.",
		images: [
			{
				url: "https://digimarkpro.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "DigiMarkPro - Digital Marketing Agency",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "DigiMarkPro - Digital Marketing Agency",
		description:
			"Professional digital marketing services to help your business grow online. SEO, PPC, social media, and content marketing solutions.",
		creator: "@digimarkpro",
		images: ["https://digimarkpro.com/twitter-image.jpg"],
	},
	alternates: {
		canonical: "https://digimarkpro.com",
		languages: {
			"en-US": "https://digimarkpro.com",
		},
	},
	verification: {
		google: "your-google-site-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Google Analytics */}
				<Script
					src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
				</Script>

				{/* Google AdSense */}
				<Script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'
					strategy='afterInteractive'
				/>
			</head>
			<body className={inter.className}>
				<div className='flex min-h-screen flex-col'>
					<Navbar />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>

				{/* Structured Data */}
				<Script
					id='structured-data'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "DigiMarkPro",
							url: "https://digimarkpro.com",
							logo: "https://digimarkpro.com/logo.png",
							sameAs: [
								"https://www.facebook.com/digimarkpro",
								"https://www.twitter.com/digimarkpro",
								"https://www.linkedin.com/company/digimarkpro",
								"https://www.instagram.com/digimarkpro",
							],
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+1-555-123-4567",
								contactType: "customer service",
								availableLanguage: "English",
							},
						}),
					}}
				/>
			</body>
		</html>
	);
}
