import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";
import Copyright from '@mui/icons-material/Copyright';
import Link from 'next/link';
import LinkedIn from "@mui/icons-material/LinkedIn";

interface navHeadings {
    text: string;
    link: string;
}

const companyHeadings = [
    {
        text:"Products",
        link:"/products"
    },
    {
        text:"Investors",
        link:"/investors"
    },
    {
      text:"About",
      link:"/about"
    },
    {
        text:"Resources",
        link:"/resources"
      },
];

const contactHeadings = [
    { title: 'Email', content: 'info@ozpremiumfinance.com.au' },
    { title: 'Phone', content: '1300 570 407' },
    { title: 'Office', content: '67 King William Road, Unley SA' }
];

const settingHeadings = [
    'Cookies Settings',
    'Privacy'
];

export default function Footer() {
    return (
        <Box id='Footer Outer Box' sx={{paddingY:{xs:6,md:8},  backgroundColor: 'secondary.light', width: '100%' }}>
            <Container maxWidth='xl'>
                {/* <Box display={'flex'} justifyContent={'center'}> */}
                <Grid container spacing={5} sx={{ color: 'white' }}>
                    {/* Logo Column */}
                    <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" justifyContent='space-between' >
                        <Link href='/'>
                            <Image
                                src={'/Logo.png'}
                                alt='logo'
                                width={200}
                                height={200}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </Link>

                        <Box id='copyright'
                        display="flex"
                        justifyContent="center"
                        bottom={0}
                        alignItems="center"
                        color="white"
                >
                            <Copyright sx={{ height: '15px', mb: '1px' }} />
                            <Typography variant='caption'>Oz Premium Finance</Typography>
                        </Box> 

                        <LinkedIn sx={{ fontSize: '35px', color:'white' }}/>

                        
                    </Grid>

                    {/* Company Column */}
                    <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Company
                        </Typography>
                        {companyHeadings.map((item, index) => (
                             <Link href={item.link} key={item.text}>
                            <Typography key={index} fontWeight={300}>
                                {item.text}
                            </Typography>
                            </Link>
                        ))}
                    </Grid>

                    {/* Contact Us Column */}
                    <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Contact Us
                        </Typography>
                        <Box display="flex" sx={{flexDirection:'column', gap:2, justifyContent:'start'}}>
                        {contactHeadings.map((item, index) => (
                            <Box id='map box' key={index} display="flex" sx={{gap:2}} >
                                <Typography fontWeight={500}>
                                    {item.title}
                                </Typography>
                                <Typography fontWeight={300}>
                                    {item.content}
                                </Typography>
                            </Box>
                        ))}
                        </Box>
                    </Grid>

                    {/* Settings Column */}
                    <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center" gap={2}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Settings
                        </Typography>
                        {settingHeadings.map((item, index) => (
                            <Typography key={index} fontWeight={300}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>

                
            </Container>
        </Box>
    );
}
