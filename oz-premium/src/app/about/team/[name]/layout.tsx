import {
	WEBSITE_DESCRIPTION,
	WEBSITE_KEYWORDS,
	WEBSITE_NAME,
} from '@/components/metadata';

export const metadata= {
	title: `Team Member - ${WEBSITE_NAME}`,
	description: WEBSITE_DESCRIPTION,
	keywords: WEBSITE_KEYWORDS.join(', '),
};

export default function UserPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
		</>
	);
}