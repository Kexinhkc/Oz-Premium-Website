import { Typography, Box } from "@mui/material";
import BannerHeader from "./BannerHeader";
import Oz from "@/app/components/Oz Premium Finance bgd-01.svg"
import Image from "next/image";
import { WidthFull } from "@mui/icons-material";
import LearnMore from "./buttons/LearnMore";
import Link from "next/link";

export default function Banner(){
    return(
        <>
         <Box 
            // className='overlay'
            sx={{ 
                paddingX:{md:3},
                pt:{md:2},
                height:'100vh',
                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Oz-Premium-Finance-bgd-01.svg')`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
            }}
        >
           
            <BannerHeader />
            <Box id='text box'
                sx={{

                // height:'100vh',
                pt:{sm:26, lg:40},
                
                color:'white',
                display:'flex',
                justifyContent:'center',
                alignItems:'center', 
                flexDirection:'column'
                }}>
                <Typography variant="h2" fontWeight={400} textAlign={'center'}>Oz Premium Finance</Typography>
                <Typography fontSize={'18px'} fontWeight={200} textAlign={'center'}>The Premium Way To Fund Your Insurance </Typography>

                <Box sx={{pt:{md:4}}}>
                    <Link href={'/'}>
                        <LearnMore />
                    </Link>
                </Box>
            </Box>

            
            
    </Box>

      
        
        </>
    );
}