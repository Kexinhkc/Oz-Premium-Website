'use client'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); //contain null or HTMLElement
    const [isClient, setIsClient] = useState(false);

    const open = Boolean(anchorEl); //return true if anchorEl is not null

    //When the button is clicked, the anchorEl state is set to the button element that was clicked. This is used to position the menu.
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    useEffect(() => {
    // This will set isClient to true only after the component mounts,
    // ensuring server-side rendering does not include client-side only content
    setIsClient(true);
    }, []);

    return (
    <Box>
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 3 }}>

                {navHeadings.map((item, index) => (

                item.text === "About" ? (

                isClient ? ( 
                
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'about-menu' : undefined} //if open is true, the 'about-menu' element is controlled by this button. Helps screeb readers understand the relationship between the button and the menu that it controls.
                    aria-haspopup="true" //a signal to aassistive technologies that the button has a popup menu
                    aria-expanded={open ? 'true' : undefined}//reflects the state of the popup menu
                    onClick={handleClick}
                    sx={{ color: 'white', textTransform: 'none', padding: 0,  verticalAlign: 'start',}}
                    key={item.text}
                    
                  >
                    <Typography variant="body1"> 
                        About
                    </Typography>
                  
                  </Button>

                ) : 

                  <Typography variant="body1" key={item.text}> About</Typography>
                
                ):( 

                  <Link href={item.link} key={item.text} >
                      <Typography color="white" variant="body1">
                      {item.text}
                      </Typography>
                  </Link>
                )

                ))}

        </Box>

        <Button variant="outlined" disableElevation sx={{color:'white', border:'1px solid', borderColor:'white', borderRadius:'5px'}}>
          Login
        </Button>
        </Box>
        </Box>

      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ 
          color: 'white',  
          '& .MuiPaper-root': {
             // Targeting the Paper component inside Menu
            borderRadius: 0, // Setting corner radius to 0
          }
        }}
        anchorOrigin={{
          vertical: 'bottom', // Align the top of the Menu with the bottom of the anchorEl
          horizontal: 'left', // Align the left of the Menu with the left of the anchorEl
        }}
        // transformOrigin={{
        //   vertical: 'top', // Animation starts from the top of the Menu
        //   horizontal: 'left', // Animation starts from the left of the Menu
        // }}
        
      >
        <Link href="/about">
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Link>

        <Link href="/about/team">
          <MenuItem onClick={handleClose}>Our Team</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}
