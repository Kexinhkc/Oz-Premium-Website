import { Box, Typography, Container, autocompleteClasses} from "@mui/material"
import LearnMore from "./Buttons/LearnMoreLight";
import Image from "next/image";
import Link from "next/link";


export default function AboutUs(){
    return(
        <>
        <Box sx={{ 
            paddingX:{xs:4,md:8},
            paddingY:{xs:6,md:8}, 
            backgroundColor:'primary.main', width:'100%'}}>
            <Container maxWidth='xl'>
            
                <Box id='About box' 
                sx={{
                    display:'flex', 
                    flexDirection:{xs:'column', lg:'row'},justifyContents:'center', 
                    gap:5,
                    justifyContent:'center',
                    alignItems:'center'}}
                   
                    >
                        
                    <Box
                        id='about text box'
                        sx={{ 
                        display:'flex', 
                        flexDirection:'column',
                        // flexGrow:1,
                        jusdtifyContent:'space-between',

                       
                        // width:'100%',
                    
                        }}>
                        
                            {/* Small line and subheading */}
                            <Box display='flex' sx={{gap:1}}>
                                <Box sx={{
                                borderLeft:3, 
                                borderColor:'white',
                                }} />
                                <Typography color={'white'} fontWeight={500} fontSize={'16px'}>About Us</Typography>
                            </Box>
                            
                            <Box sx={{display:'flex', alignItems:'center', gap:5,  flexDirection:{xs:'column',lg:'row'},}}>
                            {/* Left text blocks */}
                            <Box sx={{  
                                pt: { xs: 4, lg: 0},
                                color:'white',
                                }}>
                                    <Box>
                                        <Typography fontSize={'19px'} 
                                        sx={{pb:{xs:2,md:4},      fontWeight: 300}}> 
                                            Founded in 2023, Oz Premium Finance is on a mission to be an industry leading provider of flexible finance solutions for Australian Business.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography fontSize={'19px'} sx={{fontWeight: 300}}>
                                            Led by a dedicated group of Industry professionals across Insurance, Finance, Legal and Technology, we bring decades of experience to the Premium Funding industry.
                                        </Typography>
                                    </Box>
                            </Box>

                            <Box sx={{justifyContent:'center', alignItems:'center', width: { xs: '100%', md: '80%',lg:'60%' } }}>
                                 <Image src={'/Colab-Illustration.jpg'} alt='About Us Image' layout='responsive' width={120} height={200} />
                            </Box>
                        </Box>

                            

                            <Box
                                    sx={{
                                        display:'flex', 
                                        justifyContent:{xs:'center',lg:'start'},
                                        mt: 'auto',
                                        pt:{xs:6,md:4,xl:0},
                                        }}> 
                                        <Link href='/about'>
                                            <LearnMore />
                                        </Link>
                            </Box>
                        </Box>

                   
                
                </Box>

            </Container>
        </Box>
        </>
    );
}