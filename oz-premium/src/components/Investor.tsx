import {Box, Typography, Container} from "@mui/material";
import LearnMore from "./Buttons/LearnMore";
import Link from "next/link";

export default function Investor() {
    return (
        <>
        <Box 
        sx={{
            paddingX:{xs:4,md:8},
            paddingY:{xs:8,md:12}, 
            width:'100%'}}
            >
            <Container maxWidth='xl'>
                <Box id='why box' sx={{ width:'100%',bgcolor:'white'}}>
                    <Box display='flex' sx={{gap:1}}>
                        <Box sx={{
                            borderLeft:3, 
                            borderColor:'primary.main',
                            }}></Box>
                            <Typography color={'text.primary'} fontWeight={500} fontSize={'16px'}>Investors</Typography>
                        </Box>
                        
                    
                    <Box sx={{
                        display:'flex',
                        gap:2.5,
                        alignItems:'center',
                        pt: { xs: 4, md: 4 }
                        }}>
                            <Box flex={1} color={'primary.main'} textAlign={'start'}>
                                <Typography fontSize={'20px'}>
                                    Oz Premium Funding Trust is currently open for investment to Wholesale Investors to facilitate growth within the Premium Funding business
                                </Typography>
                                </Box>
                        </Box>
                    
                    <Box sx={{textAlign:'center', pt:{xs:6,md:8}}}>
                        <Link href='/investors'>
                            <LearnMore content='Learn More'/>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
        </>
    );
}