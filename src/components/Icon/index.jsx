import React from 'react';

const Icon = ({ className, onClick, children }) => {
	return (
		<i className={className} onClick={onClick}>
			{children}
		</i>
	);
};

export default Icon;
