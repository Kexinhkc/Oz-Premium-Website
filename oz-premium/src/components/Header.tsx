
import { Button, Grid, Typography, Box, useMediaQuery, Theme } from "@mui/material";
import SideMenu from "./SideMenu";
import Logo from "./LogoResponsive";
import NavMenu from "./NavMenu";

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

export default function Header() {
  return (
    <>
      <Box
        id="header content"
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          alignItems: "center",
          color: 'white',
          paddingY: { xs: 2, md: 1.5 },
          // paddingX: { xs: 2, md:3 },
          pl: { xs: 2, md: 3 },
          pr:  3,
          bgcolor: 'primary.main',
         
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