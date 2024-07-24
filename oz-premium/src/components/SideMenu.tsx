
'use client';
import { useState } from 'react';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { Box, Container } from '@mui/material';
import SideMenuHeadings from './SideMenuHeadings';

export default function SideMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<Box
				display="flex"
				justifyContent="flex-end"
				onClick={handleMenuClick}
			>
				<Menu  sx={{ color: 'white', fontSize:'26px'  }} />
			</Box>

			{isMenuOpen && (
				<Box
					sx={{
						position: 'fixed',
						top: 0,
						right: 0,
						bottom: 0,
						width: '40%',
						height: '100vh',
						backgroundColor: '#363636',
						zIndex: 9999,
					}}
				>
					<Box
						sx={{
							width: '100%',
							pr: 3,
							height: 60,
							display: 'flex',
							justifyContent: 'end',
							alignItems: 'center',
						}}
					>
						<Close
							onClick={handleMenuClose}
							sx={{ color: 'white', cursor: 'pointer' }}
						/>
					</Box>
					<SideMenuHeadings />
				</Box>
			)}
		</>
	);
}