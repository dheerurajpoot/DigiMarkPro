import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { COMPANY_NAME, DOMAIN_NAME } from "@/lib/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(`${DOMAIN_NAME}`),
	title: {
		default: `${COMPANY_NAME} - Digital Marketing Agency`,
		template: `%s | ${COMPANY_NAME}`,
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
		`${COMPANY_NAME}`,
	],
	authors: [{ name: "Dheeru Rajpoot" }],
	creator: `${COMPANY_NAME}`,
	publisher: `${COMPANY_NAME}`,
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
		url: `${DOMAIN_NAME}`,
		siteName: `${COMPANY_NAME}`,
		title: `${COMPANY_NAME} - Digital Marketing Agency`,
		description:
			"Professional digital marketing services to help your business grow online. SEO, PPC, social media, and content marketing solutions.",
		images: [
			{
				url: `${DOMAIN_NAME}/aboutimg.jpg`,
				width: 1200,
				height: 630,
				alt: `${COMPANY_NAME} - Digital Marketing Agency`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${COMPANY_NAME} - Digital Marketing Agency`,
		description:
			"Professional digital marketing services to help your business grow online. SEO, PPC, social media, and content marketing solutions.",
		creator: `@${COMPANY_NAME}`,
		images: [`${DOMAIN_NAME}/aboutimg.jpg`],
	},
	alternates: {
		canonical: `${DOMAIN_NAME}`,
		languages: {
			"en-US": `${DOMAIN_NAME}`,
		},
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
				{/* Paste Google Analytics and Search Console code here */}
				{/* Taboola Pixel Code */}
<script type='text/javascript' dangerouslySetInnerHTML={{ __html: `
  window._tfa = window._tfa || [];
  window._tfa.push({notify: 'event', name: 'page_view', id: 1856494});
  !function (t, f, a, x) {
    if (!document.getElementById(x)) {
      t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/unip/1856494/tfa.js',
  'tb_tfa_script');
` }} />
{/* End of Taboola Pixel Code */}
				

				{/* Paste Google AdSense Code Here */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3138751846532107'
					crossOrigin='anonymous'></script>
			</head>
			<body className={inter.className}>
				<div className='flex min-h-screen flex-col'>
					<Navbar />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
