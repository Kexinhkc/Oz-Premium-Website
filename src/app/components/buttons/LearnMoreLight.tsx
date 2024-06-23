import { Box, Typography } from "@mui/material";

export default function LearnMore(){
    return(
        <>
        <Box bgcolor={'primary.light'} 
        sx=
        {{
            paddingY:{md:1.5},
            paddingX:{md:4},
            display:'inline-flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography variant="body1" color={'white'} >
            Learn More
            </Typography>
        </Box>
        </>
    );
}