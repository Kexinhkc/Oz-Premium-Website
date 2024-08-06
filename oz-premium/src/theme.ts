'use client';
import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

let theme = createTheme({
  typography: {
    fontFamily: `${roboto.style.fontFamily}, Arial, sans-serif`
    
  },
  palette:{
    primary:{
        light: '#4D67B1',
        main: '#25386F',
        dark: '#363636',
    },
    secondary:{
        main:'#2A2A2A',
        light:'#363636',
        dark:'#000000',
    },
    text:{
        primary:'#1f2763',
        secondary:'#FFFFFF',
    },
  
  }
});

theme = responsiveFontSizes(theme);

export default theme;