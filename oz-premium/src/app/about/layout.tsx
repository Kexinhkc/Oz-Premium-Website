import {
	WEBSITE_DESCRIPTION,
	WEBSITE_KEYWORDS,
	WEBSITE_NAME,
} from '@/components/metadata';


export const metadata = {
	title: `About - ${WEBSITE_NAME}`,
	description: WEBSITE_DESCRIPTION,
	keywords: WEBSITE_KEYWORDS.join(', '),
};



export default function AboutPageLayout({
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