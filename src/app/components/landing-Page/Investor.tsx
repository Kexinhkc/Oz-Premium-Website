import {Box, Typography, Container} from "@mui/material";
import LearnMore from "../buttons/LearnMore";

export default function Why() {
    return (
        <>
        <Box sx={{ padding:{lg:5},}}>
            <Container maxWidth='xl'>
                <Box id='why box' sx={{ width:'100%',bgcolor:'white'}}>
                    <Box display='flex' sx={{gap:1}}>
                        <Box sx={{
                            borderLeft:3, 
                            borderColor:'primary.main',
                            }}></Box>
                            <Typography color={'primary'} variant={'subtitle2'}>Investors</Typography>
                        </Box>
                        
                
                    
                    <Box sx={{
                        display:'flex',
                        gap:2.5,
                        pt:{lg:4},
                        alignItems:'center'
                        }}>
                            <Box flex={1} >
                                <Typography variant='h5'>
                                    Oz Premium Funding Trust is currently open for  investment to Wholesale Investors to facilitate growth within the Premium Funding business
                                </Typography>
                                </Box>
                        
                    
                    </Box>
                    
                    <Box sx={{textAlign:'center', pt:{lg:7}}}>
                        <LearnMore />
                    </Box>
                </Box>
            </Container>
        </Box>
        </>
    );
}