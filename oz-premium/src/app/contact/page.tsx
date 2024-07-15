'use client'
import { Typography, Box, Container, Grid, TextField, Button } from '@mui/material';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Email from "@mui/icons-material/Email";
import Call from "@mui/icons-material/Call";
import Location from "@mui/icons-material/LocationOn";
import Image from 'next/image';
import { CorporateContactJsonLd } from 'next-seo';

const formFields = [
    { label: "First Name", type:'text', xs: 6, multiline: false },
    { label: "Last Name", type:'text', xs: 6, multiline: false },
    { label: "Subject", type:'text', xs: 12,  multiline: false },
    { label: "Message", type:'text', xs: 12, multiline: true, rows: 4 },
  ];

export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Process form data here
        console.log('Form submitted');
      };
    return (
        <>
        <CorporateContactJsonLd 
            useAppDir={true}
            url="https://ozpremiumfinance.com"
            logo="https://ozpremiumfinance.com/images/Logo.png"
            contactPoint={[
            {
                telephone: '1300 570 407',
                contactType: 'customer service',
                email: 'info@ozpremiumfinance.com.au',
                areaServed: 'AU',
                availableLanguage: 'English',
            },
         ]}
         />
        <Header />
            <Container maxWidth="xl">
            <Box id="most outer box" sx={{display:'flex', flexDirection:'column', gap:3, paddingY:{xs:6,md:8} ,paddingX:{xs:4,md:8}, color:'primary.main'}}>

                <Box id='image box' sx={{ width: '100%',  justifyContent: 'center', alignItems: 'center', paddingX:{md:5} }}>
                    <Image src={'/oz-premium-map.png'} alt='Map of Oz Premium Finance' layout='responsive' width={120} height={200} />
                </Box>
                
                <Box sx={{paddingY:{xs:5, md:7}, display:'flex', flexDirection:'column', gap:{xs:4, md:2}}}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Email />
                        <Typography sx={{fontSize:{xs:'17px', md:'19px'}}}>
                        info@ozpremiumfinance.com.au
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Call />
                        <Typography sx={{fontSize:{xs:'17px', md:'19px'}}}>
                        1300 570 407
                        </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Location />
                        <Typography sx={{fontSize:{xs:'17px', md:'19px'}}}>
                        67 King William Road, Unley SA
                        </Typography>
                    </Box>

                </Box>

                    <form onSubmit={handleSubmit}>
                        <Typography sx={{fontSize:{xs:'26px', md:'35px'}, paddingY:{xs:2, md:3}, fontWeight:500 }}>
                            Contact Us
                        </Typography>

                        <Grid container spacing={2}>

                        {formFields.map(({ label, xs, type = "text", multiline, rows }) => (

                            <Grid item xs={xs} key={label}>
                                <Typography fontSize={'16px'} fontWeight={500}>
                                    {label}
                                </Typography>
                                
                                <TextField
                                // label={label}
                                type={type}
                                variant="outlined"
                                fullWidth
                                required
                                multiline={multiline}
                                rows={rows || 1}
                                sx={{ '& .MuiOutlinedInput-root': {
                                    borderRadius: '0px', 
                                }, }} 
                                />
                            </Grid>
                            ))}
                        </Grid>

                        <Box sx={{textAlign:'center', pt:4}}>
                                <Grid item xs={12} >
                                    <Button type="submit" variant="contained" color="primary" sx={{width:'100%', paddingY:1.5, borderRadius: '3px', }}>
                                        Send
                                    </Button>
                                </Grid>

                                {/* <LearnMore content='Send' /> */}
                            </Box>
                </form>

                </Box>
            </Container>
        <Footer />
        </>
    )
}