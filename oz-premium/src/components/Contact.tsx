import { Box, Typography, Container, Grid } from "@mui/material"
import LearnMore from "./Buttons/LearnMore";
import Email from '@mui/icons-material/MailOutline';
import Call from '@mui/icons-material/Call';
import Location from '@mui/icons-material/LocationOn';


export default function ContactUs(){
    return(
        <>
        <Box sx={{  
            paddingX:{xs:4,md:8},
            paddingY:{xs:6,md:8}, 
            width:'100%',
            backgroundColor:'secondary.main', 
            }}>
            <Container maxWidth='xl'>
            
                {/* <Box id='About box' sx={{display:'flex', justifyContents:'center', gap:5}}> */}

                    {/* Box to place sub heading and contents vertically */}
                    <Box sx={{ flexGrow: 1 }}>

                        {/* Small line and subheading */}
                        <Box display='flex' sx={{gap:1}}>
                            
                            <Box sx={{
                                borderLeft:3, 
                                borderColor:'white',
                                }}>

                            </Box>
                                <Typography color={'white'} fontWeight={500} fontSize={'16px'}>Contact</Typography>
                            </Box>
                        

                            {/* Contact Contents */}
                            <Grid container spacing={{xs:5,md:2}} sx={{spacing:{xs:4,md:2},pt: { xs: 4, md: 4 }, pb:{md:4}, color: 'white' }}>
                                
                                <Grid id="email grid" item xs={12} md={4} display="flex" justifyContent="center">
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Email />
                                    <Typography fontSize={'19px'}>
                                    info@ozpremiumfinance.com.au
                                    </Typography>
                                </Box>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Call />
                                    <Typography fontSize={'19px'}>
                                    1300 570 407
                                    </Typography>
                                </Box>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Location />
                                    <Typography fontSize={'19px'}>
                                    67 King William Road, Unley SA
                                    </Typography>
                                </Box>
                                </Grid>
                            </Grid>

                            {/* Learn More Button */}
                            {/* <Grid container>
                                <Grid item xs={12} sx={{ textAlign: 'center', pt: { xs: 6, md: 8 } }}>
                                <LearnMore content='Contact Us'/>
                                </Grid>
                            </Grid> */}

                        </Box>
            </Container>
        </Box>
        </>
    );
}