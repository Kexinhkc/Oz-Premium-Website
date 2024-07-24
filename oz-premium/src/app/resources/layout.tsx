import {
	WEBSITE_DESCRIPTION,
	WEBSITE_KEYWORDS,
	WEBSITE_NAME,
} from '@/components/metadata';

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata= {
	title: `Resources - ${WEBSITE_NAME}`,
	description: WEBSITE_DESCRIPTION,
	keywords: WEBSITE_KEYWORDS.join(', '),
    robots: {
        index: false,
      },
    googleBot: "noindex, follow"
};

export default function UserPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<SpeedInsights />
		</>
	);
}