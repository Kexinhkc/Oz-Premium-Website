import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import {
	WEBSITE_DESCRIPTION,
	WEBSITE_KEYWORDS,
	WEBSITE_NAME,
} from '@/components/metadata';

export const metadata= {
	title: `Products - ${WEBSITE_NAME}`,
	description: WEBSITE_DESCRIPTION,
	keywords: WEBSITE_KEYWORDS.join(', '),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
      <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
    </>
  );
}




