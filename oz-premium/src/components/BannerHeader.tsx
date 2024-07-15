
import { Button, Grid, Typography, Box, useMediaQuery, Theme } from "@mui/material";
import Link from "next/link";
import SideMenu from "./SideMenu";
import Image from "next/image";
import Logo from "./LogoResponsive";
// import SideMenu from "./landing-Page/SideMenu";

interface navHeadings {
    text: string;
    link: string;
}

const navHeadings: navHeadings[]=[
    
    {
        text:"Products",
        link:"/products"
    },
    {
        text:"Investors",
        link:"/investors"
    },
    {
      text:"About",
      link:"/about"
    },
    {
      text:"Resources",
      link:"/resources"
    },
    {
        text:"Contact Us",
        link:"/contact"
    },

]

export default function BannerHeader() {
  return (
    <>
      <Box
        id="header content"
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          alignItems: "start",
          color: 'white',
          pt: { xs: 1.5, md: 1.5 },
          // paddingX: { xs: 2, md:3 },
          pl: { xs: 2, md: 3 },
          pr: { xs: 2, md: 2 },
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 2
          
        }}
      >
        {/* left */}
        <Box>
          <Logo />
        </Box>

        {/* right */}
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              {navHeadings.map((item, index) => (
                <Link href={item.link} key={item.text}>
                  <Typography color="white" variant="body1">
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Button variant="contained" color="primary" disableElevation sx={{ borderRadius: 10 }}>
              Login
            </Button>
          </Box>
        </Box>

        {/* Menu button for small screens */}
        <Box id="sideMenu" sx={{ display: { md: 'none', xs: 'block' } }}>
          <Button
            id="button comp"
            sx={{
              display: 'flex',
              justifyContent: 'end',
              padding: 0,
              color: 'white'
             
            }}
          >
            <SideMenu />
          </Button>
        </Box>
      </Box>
    </>
  );
}