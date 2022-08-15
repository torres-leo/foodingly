import React from 'react';
import Appbar from './Appbar';
import AppMenu from './AppMenu';

const index = ({ children }) => {
	return (
		<>
			<Appbar />
			<AppMenu />
			{children}
		</>
	);
};

export default index;
