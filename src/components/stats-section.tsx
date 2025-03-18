"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("stats-section");
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	const stats = [
		{ value: 200, label: "Clients Served", suffix: "+" },
		{ value: 500, label: "Campaigns Launched", suffix: "+" },
		{ value: 5, label: "Years Experience", suffix: "" },
		{ value: 300, label: "Average ROI", suffix: "%" },
	];

	return (
		<section
			id='stats-section'
			className='w-full py-12 md:py-24 bg-primary text-primary-foreground'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
					{stats.map((stat, index) => (
						<div key={index} className='space-y-2'>
							<motion.div
								className='text-4xl md:text-5xl font-bold'
								initial={{ opacity: 0, y: 20 }}
								animate={
									isVisible
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}>
								{isVisible ? (
									<Counter
										from={0}
										to={stat.value}
										duration={2}
									/>
								) : (
									0
								)}
								{stat.suffix}
							</motion.div>
							<p className='text-primary-foreground/80'>
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Counter({
	from,
	to,
	duration,
}: {
	from: number;
	to: number;
	duration: number;
}) {
	const [count, setCount] = useState(from);

	useEffect(() => {
		let startTime: number;
		let animationFrame: number;

		const step = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min(
				(timestamp - startTime) / (duration * 1000),
				1
			);
			setCount(Math.floor(progress * (to - from) + from));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(step);
			}
		};

		animationFrame = requestAnimationFrame(step);

		return () => cancelAnimationFrame(animationFrame);
	}, [from, to, duration]);

	return <>{count}</>;
}
