import React from 'react';

const index = ({ type, placeholder, className, value }) => {
	return <input type={type} placeholder={placeholder} className={className} value={value} />;
};

export default index;
