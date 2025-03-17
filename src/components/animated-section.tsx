"use client";

import { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export default function AnimatedSection({
	children,
	className = "",
	delay = 0,
}: AnimatedSectionProps) {
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

		const element = document.getElementById(`section-${delay}`);
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [delay]);

	return (
		<motion.div
			id={`section-${delay}`}
			className={className}
			initial={{ opacity: 0, y: 50 }}
			animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.7, delay: delay * 0.1 }}>
			{children}
		</motion.div>
	);
}
