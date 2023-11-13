import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'IPCC for dummies',
	description: 'Explore bite-sized chapters of the IPCC report in a gamified format. Learn about expert strategies for adaptation and mitigation without being overwhelmed by dense research papers.',
	openGraph: {
		title: "IPCC for dummies",
		description: "Explore bite-sized chapters of the IPCC report in a gamified format. Learn about expert strategies for adaptation and mitigation without being overwhelmed by dense research papers.",
		images: [`http://${process.env.URL}/images/misc/og-image.png`],
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} overscroll-none`}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
