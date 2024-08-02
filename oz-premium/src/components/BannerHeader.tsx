'use client'
import { Button, Grid, Typography, Box, useMediaQuery, Theme } from "@mui/material";
import Link from "next/link";
import SideMenu from "./SideMenu";
import Logo from "./LogoResponsive";
import NavMenu from "./NavMenu";

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
          pl: { xs: 1, md: 3 },
          pr: { xs: 2, md: 5 },
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

          {/* Menu button for small screens */}
          <Box id="sideMenu" sx={{ display: { xs: 'block', md: 'none',} }}>
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