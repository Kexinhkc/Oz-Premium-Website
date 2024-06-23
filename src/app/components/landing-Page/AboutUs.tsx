import { Box, Typography, Container } from "@mui/material"
import LearnMore from "../buttons/LearnMoreLight";


export default function AboutUs(){
    return(
        <>
        <Box sx={{ padding:{lg:5}, backgroundColor:'primary.main', width:'100%'}}>
            <Container maxWidth='xl'>
            
                <Box id='About box' sx={{display:'flex', justifyContents:'center', gap:5}}>
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
                                <Typography color={'white'} variant={'subtitle2'}>About Us</Typography>
                            </Box>

                            {/* Left text blocks */}
                            <Box sx={{  
                                pt:{lg:4},
                                color:'white'
                                }}>
                                    <Box>
                                        <Typography sx={{pb:{lg:2}}}>
                                            Founded in 2023, Oz Premium Finance is on a mission to be an industry leading provider of flexible finance solutions for Australian Business.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            Led by a dedicated group of Industry professionals across Insurance, Finance, Legal and Technology, we bring decades of experience to the Premium Funding industry.
                                        </Typography>
                                    </Box>
                            </Box>

                            <Box flex={0} sx={{pt:{lg:5}}}> 
                                <LearnMore />
                            </Box>
                           
                    </Box>

                    {/* Image */}
                    <Box sx={{backgroundColor:'white', width:'500px',height:'350px'}}></Box>

                </Box>
            </Container>
        </Box>
        </>
    );
}