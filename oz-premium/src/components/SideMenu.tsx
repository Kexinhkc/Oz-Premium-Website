
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
				<Menu sx={{ color: 'white' }} />
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





	// const [isMenuOpen, setIsMenuOpen] = useState(false);

	// const handleMenuClick = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	// const handleMenuClose = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	// return (
	// 	<>
	// 		<Box
	// 			display="flex"
	// 			justifyContent="flex-end"
	// 			onClick={handleMenuClick}
	// 		>
	// 			<Menu />
	// 		</Box>

	// 		{isMenuOpen && (
	// 			<Box
	// 				sx={{
	// 					position: 'fixed',
	// 					top: 0,
	// 					right: 0,
	// 					bottom: 0,
	// 					width: '300px',
	// 					backgroundColor: '#242424',
	// 					zIndex: 9999,
	// 				}}
	// 			>
	// 				{/*To locate the cross icon the same position as the hamburger icon*/}
	// 				<Container maxWidth="xl">
	// 					<Box
	// 						sx={{
	// 							width: '100%',
	// 							height: 60,
	// 							display: 'flex',
	// 							justifyContent: 'end',
	// 							alignItems: 'center',
	// 						}}
	// 					>
	// 						<CloseIcon
	// 							onClick={handleMenuClose}
	// 							color={'secondary'}
	// 						/>
	// 					</Box>
	// 				</Container>

	// 				<SideMenuHeadings />
	// 			</Box>
	// 		)}
	// 	</>
	// );

