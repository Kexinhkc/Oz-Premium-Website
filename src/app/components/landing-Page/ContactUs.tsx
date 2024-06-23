import { Box, Typography, Container } from "@mui/material"
import LearnMore from "../buttons/LearnMoreLight";


export default function AboutUs(){
    return(
        <>
        <Box sx={{ padding:{lg:5}, backgroundColor:'secondary.main', width:'100%'}}>
            <Container maxWidth='xl'>
            
                {/* <Box id='About box' sx={{display:'flex', justifyContents:'center', gap:5}}> */}

                    {/* Box to place sub heading and contents vertically */}
                    <Box  
                        sx={{ 
                        display:'flex', 
                        flexDirection:'column', 
                        // width:'100%',
                    
                        }}>
                        
                            {/* Small line and subheading */}
                            <Box display='flex' sx={{gap:1}}>
                                <Box sx={{
                                borderLeft:3, 
                                borderColor:'white',
                                }} />
                                <Typography color={'white'} variant={'subtitle2'}>Contact Us</Typography>
                            </Box>

                            {/* Contact Contents */}
                            <Box sx={{  
                                pt:{lg:4},
                                color:'white',
                                display:'flex',
                                
                                }}>
                                    <Box flex={1} sx={{display:'flex', justifyContent:'center'}}>
                                        <Typography>
                                            info@ozpremiumfinance.com.au
                                        </Typography>
                                    </Box>
                                    <Box flex={1} sx={{display:'flex', justifyContent:'center'}}>
                                        <Typography>
                                            1300 570 407
                                        </Typography>
                                    </Box>
                                    <Box flex={1} sx={{display:'flex', justifyContent:'center'}}>
                                        <Typography>
                                            67 King William Road, Unley, South Australia 5061
                                        </Typography>
                                    </Box>
                            </Box>

                            <Box flex={0} sx={{textAlign:'center', pt:{lg:5}}}> 
                                <LearnMore />
                            </Box>
                           
                    </Box>
                {/* </Box> */}
            </Container>
        </Box>
        </>
    );
}