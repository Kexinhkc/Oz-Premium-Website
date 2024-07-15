'use client'
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Page = () => {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight(); // Initial setting

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <Box id='most outer box' sx={{ display: 'flex', flexDirection: 'column', height: viewportHeight }}>
        <Header />
      <Box id='flex grow box' sx={{ flexGrow: 1 }}>
        <Container maxWidth='xl'>
          <Box id="normal box" sx={{ display: 'flex', flexDirection: 'column', gap: 5, pt: { xs:6, md: 8 }, paddingX: { xs: 4, md: 8 }, pb:{ xs:10, md: 8 }, color: 'primary.main' }}>
            <Typography sx={{ fontSize: { xs: '28px', md: '35px' } }}>
              Resources
            </Typography>
            <Box>
              <Typography fontWeight={500} paddingBottom={1}>
                Privacy
              </Typography>
              <Link href="https://www.ozpremiumfinance.com.au/privacy" underline="hover">
                https://www.ozpremiumfinance.com.au/privacy
              </Link>
            </Box>
            <Box>
              <Typography fontWeight={500} paddingBottom={1}>
                DDR Forms
              </Typography>
              <Link href="https://www.ozpremiumfinance.com.au/ddr" underline="always">
                https://www.ozpremiumfinance.com.au/ddr
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;