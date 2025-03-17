"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientsSection() {
	const clients = [
		{ name: "Client 1", logo: "/placeholder-logo.svg" },
		{ name: "Client 2", logo: "/placeholder-logo.svg" },
		{ name: "Client 3", logo: "/placeholder-logo.svg" },
		{ name: "Client 4", logo: "/placeholder-logo.svg" },
		{ name: "Client 5", logo: "/placeholder-logo.svg" },
		{ name: "Client 6", logo: "/placeholder-logo.svg" },
	];

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
		<section className='w-full py-12 md:py-24 bg-background border-t border-b'>
			<div className='container mx-auto px-4 md:px-6'>
				<motion.div
					className='flex flex-col items-center justify-center space-y-4 text-center mb-8'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter'>
							Trusted by Leading Brands
						</h2>
						<p className='max-w-[900px] text-muted-foreground'>
							We've helped businesses of all sizes achieve their
							digital marketing goals.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}>
					{clients.map((client, index) => (
						<motion.div
							key={index}
							className='w-full max-w-[160px] h-16 flex items-center justify-center'
							variants={itemVariants}
							whileHover={{ scale: 1.1 }}
							transition={{
								type: "spring",
								stiffness: 400,
								damping: 10,
							}}>
							<Image
								src={client.logo || "/placeholder.svg"}
								width={120}
								height={60}
								alt={client.name}
								className='opacity-70 hover:opacity-100 transition-opacity'
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
