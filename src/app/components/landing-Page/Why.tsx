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
                            <Typography color={'primary'} variant={'subtitle2'}>Why Premium Funding</Typography>
                        </Box>
                        
                
                    
                    <Box sx={{
                        display:'flex',
                        gap:2.5,
                        pt:{lg:4},
                        alignItems:'center'
                        }}>
                            <Box flex={1} >
                            <Typography >
                                Spread the cost of the annual insurance premiums over time, thereby improving their cash flow management and financial flexibility.
                            </Typography >
                            </Box>


                                <Box sx={{border:1, borderColor:'primary.main', height:{lg:'39px'}}}>

                                </Box>

                                <Box flex={1}>
                                <Typography >
                                    Essential for maintaining the uninterrupted protection businesses need to safeguard against risks and uncertainties inherent in their operations.
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