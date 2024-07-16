'use client'
import { Button, Grid, Typography, Box, useMediaQuery, Theme } from "@mui/material";
import Link from "next/link";
import SideMenu from "./SideMenu";
import Logo from "./LogoResponsive";
// import SideMenu from "./landing-Page/SideMenu";
// import AboutDropdown from "@/components/aboutDropdown";
import dynamic from "next/dynamic";
import NavMenu from "./NavMenu";



// const AboutDropdown = dynamic(() => import('@/components/aboutDropdown'), { ssr: false });


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
          pt: { xs: 1.5, md: 2 },
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
        <NavMenu />

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
    </>
  );
}