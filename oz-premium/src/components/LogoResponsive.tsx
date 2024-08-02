'use client'
import Box from '@mui/material/Box';
import Image from "next/image"; // Assuming you're using Next.js Image component
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

export default function Logo() {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box
        sx={{
          width: matchesXS ? '120px' : '220px', // Responsive width using MUI breakpoints
          height: 'auto', // Fixed height, adjust as needed
        }}
      >
        <Link href='/'>
          <Image
            src={'/Logo.png'}
            alt='Company Logo'
            // Adjust the width based on the screen size
            width={120}
            height={200}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
          </Link>
      </Box>
    );
  }