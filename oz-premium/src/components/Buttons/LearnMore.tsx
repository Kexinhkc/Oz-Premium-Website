import { Box, Typography } from "@mui/material";

interface ButtonText {
    content:string;

}

export default function LearnMore({content}:ButtonText){
    return(
        <>
        <Box bgcolor={'primary.main'} 
        sx=
        {{
            paddingY:{xs:1.5, md:1.5},
            paddingX:{xs:3, md:4},
            display:'inline-flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography variant="body1" color={'white'} >
            {content}
            </Typography>
        </Box>
        </>
    );
}