import React from 'react';
import Proptypes from 'prop-types';

const ContactCard = ({ office }) => {
	const { title, city, text } = office;
	return (
		<article className='Contact-card'>
			<p className='Contact-cardTitle'>{title}</p>
			<h3 className='Contact-cardCity'>
				<span>{city}</span>
			</h3>
			<p className='Contact-cardText'>{text}</p>
			<p className='Contact-cardView'>View on map</p>
		</article>
	);
};

ContactCard.defaultProps = {
	title: '',
	city: '',
	text: '',
};

ContactCard.propTypes = {
	title: Proptypes.string,
	city: Proptypes.string,
	text: Proptypes.string,
};

export default ContactCard;
