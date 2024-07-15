'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

interface NavbarMenuProps{
	text:string,
	link:string,
}


const companyHeadings = [
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
];

export default function SideMenuHeadings() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 4,
				}}
			>
				{companyHeadings.map((heading, index) => (
					<Link key={index} href={heading.link}>
						<Typography
							sx={{
								fontWeight: 400,
							}}
							color="white"
							variant="subtitle2"
						>
							{heading.text}
						</Typography>
					</Link>
				))}
			</Box>
		</>
	);
}
