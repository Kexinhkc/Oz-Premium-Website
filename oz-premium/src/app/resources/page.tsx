'use client'
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

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
              <Link href="/pdfs/privacy-policy.pdf" target="_blank" underline="hover" sx={{fontFamily:'Roboto, sans-serif'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                      <Typography sx={{ fontSize: { xs: '20px', md: '26px' } }}>
                          Privacy Policy
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <ArrowForward sx={{fontSize:{xs:'14px', sm:'20px'}}}/>
                    </Box>
                </Box>
              </Link>
            </Box>

            <Box>
              <Link href="/pdfs/direct-debit-service-agreement.pdf" target="_blank" underline="hover" sx={{fontFamily:'sans-serif'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box>
                    <Typography sx={{ fontSize: { xs: '20px', md: '26px' } }}>
                      Direct Debit Service Agreement
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <ArrowForward sx={{fontSize:{xs:'14px', sm:'20px'}}}/>
                  </Box>
                </Box>
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