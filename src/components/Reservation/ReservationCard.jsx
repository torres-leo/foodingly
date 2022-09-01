import React from 'react';
import Proptypes from 'prop-types';

const ReservationCard = ({ offer }) => {
	const { title, image, text, icon } = offer;

	return (
		<article className='Reservation-card'>
			<div className='Reservation-cardIcon' style={{ backgroundImage: `url(${icon})` }} />
			<h3 className='Reservation-cardTitle'>{title}</h3>
			<p className='Reservation-cardText'>{text}</p>
			<div className='Reservation-cardImage' style={{ backgroundImage: `url(${image})` }} />
		</article>
	);
};

ReservationCard.defaultProps = {
	image: '',
	name: '',
	title: '',
	icon: '',
};

ReservationCard.propTypes = {
	image: Proptypes.string,
	name: Proptypes.string,
	title: Proptypes.string,
	icon: Proptypes.string,
};

export default ReservationCard;
