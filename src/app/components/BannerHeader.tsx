import { Button, Grid, Typography, Box, ListItem } from "@mui/material";
import Link from "next/link";

interface navHeadings {
    text: string;
    link: string;
}

const navHeadings: navHeadings[]=[
    {
        text:"About",
        link:"/About"
    },
    {
        text:"Resources",
        link:"/Resources"
    },
    {
        text:"Investors",
        link:"/Investors"
    },
    {
        text:"Contact Us",
        link:"/Contact"
    },

]

export default function BannerHeader(){
    return (
        <>
         <Box  
           sx={{
            display:"flex",
            justifyContent:'space-between',
            alignItems:"center",
            color:'white',
         
           }}
           >

            {/* left */}
            <Box >
                <Typography variant="h5" >
                    Oz Premium
                </Typography>
            </Box>

            {/* right */}
            <Box sx={{display:"flex", gap:3, alignItems:"center"}}>
                <Box 
                sx={{
                    display:"flex",
                    gap:3,
                }}
                >
                    {navHeadings.map((item,index)=>(

                        <Link href={item.link} key={item.text}>
                            <Typography color="white" variant="body1">
                                {item.text}
                            </Typography>
                        </Link>
                    ))
                    }    
                    
                </Box>
                
                
                <Button variant="contained" color="primary" disableElevation sx={{borderRadius: 10}}>Login</Button>
                
            </Box>
           </Box>
        </>
    );
}