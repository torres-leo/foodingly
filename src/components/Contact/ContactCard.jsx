import React from 'react';

const ContactCard = ({ office }) => {
	const { title, city, text } = office;
	return (
		<div className='Contact-card'>
			<p className='Contact-cardTitle'>{title}</p>
			<h3 className='Contact-cardCity'>
				<span>{city}</span>
			</h3>
			<p className='Contact-cardText'>{text}</p>
			<p className='Contact-cardView'>View on map</p>
		</div>
	);
};

export default ContactCard;
