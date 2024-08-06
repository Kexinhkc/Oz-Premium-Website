import { Typography, Box } from "@mui/material";
import BannerHeader from "./BannerHeader";
import Oz from "@/app/components/Oz Premium Finance bgd-01.svg"
import Image from "next/image";
import { WidthFull } from "@mui/icons-material";
import LearnMore from "./Buttons/LearnMore";
import Link from "next/link";

export default function Banner(){
    return(
        <>
        <Box 
          id="background image"
          sx={{ 
            position: 'relative', // Step 1: Set positioning context
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingX: {md: 3},
            pt: {md: 2},
            height: '100vh',
            width: '100vw',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Oz-Premium-Finance-bgd-01.svg')`,
            backgroundColor: 'black',
            backgroundSize: {xs: 'cover'},
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            overflow: 'hidden auto',
  }}
>
  {/* Step 2 & 3: Absolute Positioning for BannerHeader */}
  <BannerHeader  />r

  <Box id='text box'
    sx={{
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      flexDirection: 'column',
      paddingX: {xs: 2},
      gap:{md: 1},
    }}
  >

  {/* <Typography  textAlign={'center'} sx ={{typography:{md:'h2'}, fontWeight:{md:400}, fontSize:{xs:'36px'}}}>Oz Premium Finance</Typography> */}

  <Typography fontSize={18} fontWeight={400} textAlign={'center'} sx ={{fontSize:{xs:'32px',sm:'50px',md:'64px'}, lineHeight:{xs:1}}}>The Premium Way To Fund Your Insurance </Typography>

  <Box sx={{pt: {xs:5, md: 5}}}>
    <Link href={'/products'}>
      <LearnMore content="Learn More"/>
    </Link>
  </Box>
  
  </Box>
</Box>
        </>
    );
}