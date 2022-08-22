import React from 'react';
import CarouselReservation from '../customCarousel';

const Reservation = () => {
	return (
		<div className='Reservation'>
			<div className='Reservation-content'>
				<h3 className='Reservation-title'>Our Reservation</h3>
				<h2 className='Reservation-text'>What we offer</h2>

				<CarouselReservation />
			</div>
		</div>
	);
};

export default Reservation;
