"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
	// const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		// toast({
		// 	title: "Message sent!",
		// 	description: "We'll get back to you as soon as possible.",
		// });

		// Reset form
		e.currentTarget.reset();
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			<div className='grid gap-4 sm:grid-cols-2'>
				<div className='space-y-2'>
					<Label htmlFor='first-name'>First name</Label>
					<Input id='first-name' name='first-name' required />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='last-name'>Last name</Label>
					<Input id='last-name' name='last-name' required />
				</div>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input id='email' name='email' type='email' required />
			</div>
			<div className='space-y-2'>
				<Label htmlFor='phone'>Phone (optional)</Label>
				<Input id='phone' name='phone' type='tel' />
			</div>
			<div className='space-y-2'>
				<Label htmlFor='service'>Service of Interest</Label>
				<Select name='service'>
					<SelectTrigger>
						<SelectValue placeholder='Select a service' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='seo'>SEO Optimization</SelectItem>
						<SelectItem value='ppc'>PPC Advertising</SelectItem>
						<SelectItem value='social'>
							Social Media Marketing
						</SelectItem>
						<SelectItem value='content'>
							Content Marketing
						</SelectItem>
						<SelectItem value='email'>Email Marketing</SelectItem>
						<SelectItem value='other'>Other</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='message'>Message</Label>
				<Textarea id='message' name='message' rows={5} required />
			</div>
			<Button type='submit' className='w-full' disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
