import React from 'react';
import AppMenu from './AppMenu';
import AppBar from './AppBar';
import MenuResponsive from './MenuResponsive';

const Header = () => {
	return (
		<>
			<AppBar />
			<MenuResponsive />
			<AppMenu />
		</>
	);
};

export default Header;
