'use client'
import Box from '@mui/material/Box';
import Image from 'next/image'; // Assuming you're using Next.js Image component
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

export default function Logo() {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box
        sx={{
          width: matchesXS ? '90px' : '120px', // Responsive width using MUI breakpoints
          height: 'auto', // Fixed height, adjust as needed
        }}
      >
        <Link href='/'>
          <Image
            src={'/Logo.png'}
            alt='Company Logo'
            // layout="intrinsic"
            layout="responsive"
            width={120} // Adjust the width based on the screen size
            height={200}
          />
          </Link>
      </Box>
    );
  }