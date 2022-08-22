import React from 'react';

const ReservationCard = ({ icon, title, text, image }) => {
	return (
		<div className='Reservation-card'>
			<div className='Reservation-cardIcon' style={{ backgroundImage: `url(${icon})` }} />
			<h3 className='Reservation-cardTitle'>{title}</h3>
			<p className='Reservation-cardText'>{text}</p>
			<div className='Reservation-cardImage' style={{ backgroundImage: `url(${image})` }} />
		</div>
	);
};

export default ReservationCard;
