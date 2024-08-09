'use client'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

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

export default function NavMenu() {
    const [aboutAnchorEl, setAboutAnchorEl] = React.useState<null | HTMLElement>(null); //contain null or HTMLElement
    const [loginAnchorEl, setLoginAnchorEl] = React.useState<null | HTMLElement>(null); //contain null or HTMLElement

    const [isClient, setIsClient] = useState(false);

    const aboutOpen = Boolean(aboutAnchorEl); //return true if anchorEl is not null
    const loginOpen = Boolean(loginAnchorEl); 

    //When the button is clicked, the anchorEl state is set to the button element that was clicked. This is used to position the menu.
    const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAboutAnchorEl(event.currentTarget);
    };

    const handleAboutClose = () => {
    setAboutAnchorEl(null);
    };

    const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setLoginAnchorEl(event.currentTarget);
      };
  
      const handleLoginClose = () => {
      setLoginAnchorEl(null);
      };

    useEffect(() => {
    // This will set isClient to true only after the component mounts,
    // ensuring server-side rendering does not include client-side only content
    setIsClient(true);
    }, []);

    return (
    <Box>
        <Box sx={{ display: { md: 'block', xs: 'none' }, pt:{xs:0,md:1} }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 3 }}>

                {navHeadings.map((item, index) => (

                item.text === "About" ? (

                isClient ? ( 
                
                  <Button
                    id="about-button"
                    aria-controls={aboutOpen ? 'about-menu' : undefined} //if open is true, the 'about-menu' element is controlled by this button. Helps screen readers understand the relationship between the button and the menu that it controls.
                    aria-haspopup="true" //a signal to aassistive technologies that the button has a popup menu
                    aria-expanded={aboutOpen ? 'true' : undefined}//reflects the state of the popup menu
                    onClick={handleAboutClick}
                    sx={{ color: 'white', textTransform: 'none', padding: 0,  verticalAlign: 'start',}}
                    key={item.text}
                    
                  >
                    <Typography sx={{typography:{xs:'body1', md:'h6'},fontWeight:{md:400}}}
                    > 
                        About
                    </Typography>
                  
                  </Button>

                ) : 

                  <Typography key={item.text} 
                    sx={{typography:{xs:'body1', md:'h6'},fontWeight:{md:400}}}
                    > 
                      About
                  </Typography>
                
                ):( 

                  <Link href={item.link} key={item.text} >
                      <Typography color="white" 
                      sx={{
                        typography:{xs:'body1', md:'h6'},
                        fontWeight:{md:400},
                      }}
                        >
                      {item.text}
                      </Typography>
                  </Link>
                )

                ))}

        </Box>
            
            {/* Login button  */}
            {isClient? (  
              
            <Button 
            variant="outlined" 
            id="login-button"
            aria-controls={loginOpen ? 'login-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={aboutOpen ? 'true' : undefined}
            onClick={handleLoginClick}
            disableElevation 
            sx={{
              color:'white', 
              border:'1px solid', 
              borderColor:'white', 
              borderRadius:'5px',
              paddingY:1
            }}
            >
                <Typography color="white" 
                    sx={{
                      typography:{xs:'body1'},
                      fontWeight:{md:400},
                    }}
                      >
                      Login
                </Typography>
             
            </Button>)
            :
            <Button 
            variant="outlined" 
            disableElevation 
            sx={{
              color:'white', 
              border:'1px solid', 
              borderColor:'white', 
              borderRadius:'5px',
              paddingY:1
            }}
              component="a"
              href="https://odyssey.redplanetsoftware.com/express/#/oz/login"
              target="_blank"
              rel="noopener noreferrer">

                <Typography color="white" 
                    sx={{
                      typography:{xs:'body1'},
                      fontWeight:{md:400},
                    }}
                      >
                      Login
                </Typography>
             
            </Button>
            }
           
          </Box>
        </Box>

      {/* 'About' dropdown menu */}
      <Menu
        id="about-menu"
        anchorEl={aboutAnchorEl}
        open={aboutOpen}
        onClose={handleAboutClose}
        MenuListProps={{
          'aria-labelledby': 'about-button',
        }}
        sx={{ 
          color: 'white',  
          '& .MuiPaper-root': {
             // Targeting the Paper component inside Menu
            borderRadius: 0.5, // Setting corner radius to 0
          }
        }}
        anchorOrigin={{
          vertical: 'bottom', // Align the top of the Menu with the bottom of the anchorEl
          horizontal: 'left', // Align the left of the Menu with the left of the anchorEl
        }}
     
      >
        <Link component={NextLink} href="/about">
          <MenuItem onClick={handleAboutClose}>About Us</MenuItem>
        </Link>

        <Link component={NextLink} href="/about/team">
          <MenuItem onClick={handleAboutClose}>Our Team</MenuItem>
        </Link>
      </Menu>


       {/* 'Login' dropdown menu */}
       <Menu
        id="login-menu"
        anchorEl={loginAnchorEl}
        open={loginOpen}
        onClose={handleLoginClose}
        MenuListProps={{
          'aria-labelledby': 'login-button',
        }}
        sx={{ 
          color: 'white',  
         
          '& .MuiPaper-root': {
             // Targeting the Paper component inside Menu
            borderRadius: 0.5, // Setting corner radius to 0
            // transform: 'translateY(32px)',
          }
        }}
        anchorOrigin={{
          vertical: 'bottom', // Align the top of the Menu with the bottom of the anchorEl
          horizontal: 'left', // Align the left of the Menu with the left of the anchorEl
        }}
     
      >
        <Link href="https://odyssey.redplanetsoftware.com/express/#/oz/login">
          <MenuItem onClick={handleLoginClose}>Brokers Login</MenuItem>
        </Link>

        <Link href="https://williambuck-portal.7g.com.au/login/apply/68322/647">
          <MenuItem onClick={handleLoginClose}>Investors Login</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}
