import { Typography, Box, Container, Grid } from '@mui/material';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';

const members = [
    {
        name: "Karl Kirsten",
        title: "Founder/Director",
        image: "/bioPhotos/Karl.JPG",
        profile:"karl-kirsten"
    },
    {
        name: "Jarrod Herring",
        title: "Chief Execitive Officer/Director",
        image: "/bioPhotos/Jarrod.JPG",
        profile:"jarrod-herring"
    },
    {
        name: "Philip Riquier",
        title: "Director",
        image: "/bioPhotos/Philip.JPG",
        profile:"philip-riquier"
    },
    {
        name: "Henry Downer",
        title: "Chief Financial Officer/Director",
        image: "/bioPhotos/Henry.JPG",
        profile:"henry-downer"
    },
    {
        name: "Sam Morris",
        title: "Chief Operating Officer/Director",
        image: "/bioPhotos/Sam.JPG",
        profile:"sam-morris"
    },
    {
        name: "Ben Hage",
        title: "Sales and Distribution",
        image: "/bioPhotos/Ben.JPG",
        profile:"ben-hage"
    },
    {
        name: "Jade Murray",
        title: "Operations Manager",
        image: "/bioPhotos/Jade.JPG",
        profile:"jade-murray"
    },
   
];


export default function Team(){
    return(
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>

                <Container maxWidth='xl'>
                        <Box id="most outer box" sx={{ display: 'flex', flexDirection: 'column', gap: 1, paddingY: { xs: 6, md: 8 }, paddingX: { xs: 4, md: 8 } }}>

                        <Typography color={'primary.main'} sx={{ textAlign:{xs:'center', md:'start'}, fontSize: { xs: '28px', md: '35px' }, pb:{md:1},fontWeight: '500' }}>
                            Meet Our Team
                        </Typography>

                        {/* <Box sx={{display:'flex', gap:3, pt: { xs: 4, md: 8 } }}> */}
                        
                    <Box id='box outside map'
                        sx={{
                        pt: { xs: 5, md: 8 },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm:'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, // 1 column for xs, 4 columns for md and up
                        gridRowGap: {xs:30, md:40}, // Adjust the gap between rows                        
                        }}>

                            {members.map((member, index) => (
                                <Link key={index} href={`/about/team/${member.profile}`}>
                                    {/* <Box sx={{display:'flex', alignItems:'start'}}> */}
                                    <Box id='map box' 
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: {xs:'center', md:'start'},
                                    }}>
                                    <Box sx={{
                                        width: '180px',
                                        height: '210px',
                                    }}>
                                        <img src={member.image} alt='Bio Photo'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }} />
                                    </Box>
                                    
                                    {/* <Box sx> */}
                                    <Typography color={'primary.main'} sx={{ fontWeight: '500', fontSize: { xs: '22px', md: '24px' }, mt:1 }}>
                                        {member.name}
                                    </Typography>

                                    <Typography color={'primary.main'} sx={{ fontSize: { xs: '16px', md: '16px' } }}>
                                        {member.title}
                                    </Typography>
                                    </Box>
                                    {/* </Box> */}
                                </Link>
                            ))}
                        </Box>
                        
                </Box>
                </Container>
                </Box>

        <Footer />
        </Box>
        </>
    );
} 