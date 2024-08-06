import {Box, Typography, Container, Grid} from "@mui/material";
import LearnMore from "./Buttons/LearnMore";
import Link from "next/link";

export default function Why() {
    return (
        <>
        <Box id='why box' sx={{ width:'100%',bgcolor:'white', paddingY:{xs:8,md:12},paddingX:{xs:4,md:8}}}>
            <Container maxWidth='xl'>
                <Box display='flex' sx={{gap:1}}>
                    <Box sx={{
                        borderLeft:3, 
                        borderColor:'primary.main',
                        }}></Box>
                        <Typography color={'text.primary'} fontWeight={500} fontSize={'16px'}>Why Premium Funding</Typography>
                    </Box>

              <Box sx={{position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ pt: { xs: 4, md: 4 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'start' }}>
                    <Box sx={{ width: { xs: '100%', md: '50%' }, color: 'primary.main', mb: { xs: 3, md: 0 } }}>
                    <Typography fontSize={'20px'}>
                        Spread the cost of the annual insurance premiums over time, thereby improving their cash flow management and financial flexibility
                    </Typography>
                </Box>

                {/* Vertical line */}
                <Box 
                sx={{
                position: 'absolute',
                left: '50%',// Center the line horizontally to its parents
                top: '60%', // Make line start from 70% of the parent's height
                transform: 'translateX(-50%) translateY(-35%)', // First part moves the child element to the left by 50% of its own width, the second part moves it up by 50% of its own height
                height: '60%', // Set the height of the line here
                borderLeft: {xs:0, md:1},
                borderTop: {xs:1, md:0},
                borderColor: 'primary.main',
                }} />

                <Box sx={{ width: { xs: '100%', md: '50%' }, color: 'primary.main', pl: { md: 3 } }}>
                <Typography fontSize={'20px'}>
                    Essential for maintaining the uninterrupted protection businesses need to safeguard against risks and uncertainties inherent in their operations.
                </Typography>
                </Box>
            </Box>
        </Box>

                   

            
                <Box sx={{textAlign:'center', pt:{xs:6,md:8}}}>
                    <Link href='/products'>
                        <LearnMore content="Learn More"/>
                    </Link>
                </Box>
            </Container>
        </Box>
        </>
    );
}