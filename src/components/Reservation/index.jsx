import React from 'react';
import Carousel from '../customCarousel';
import ReservationCard from './ReservationCard';

const Reservation = () => {
	const offers = [
		{
			id: 1,
			image: 'https://foodingly.netlify.app/assets/img/service/service-1.png',
			title: 'Breakfast',
			icon: 'https://foodingly.netlify.app/assets/img/service/1.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 2,
			image: 'https://foodingly.netlify.app/assets/img/service/service-2.png',
			title: 'Lunch',
			icon: 'https://foodingly.netlify.app/assets/img/service/2.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 3,
			image: 'https://foodingly.netlify.app/assets/img/service/service-3.png',
			title: 'Dinner',
			icon: 'https://foodingly.netlify.app/assets/img/service/3.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 4,
			image: 'https://foodingly.netlify.app/assets/img/service/service-4.png',
			title: 'Snacks',
			icon: 'https://foodingly.netlify.app/assets/img/service/4.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 5,
			image: 'https://foodingly.netlify.app/assets/img/service/service-1.png',
			title: 'Breakfast',
			icon: 'https://foodingly.netlify.app/assets/img/service/1.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 6,
			image: 'https://foodingly.netlify.app/assets/img/service/service-2.png',
			title: 'Lunch',
			icon: 'https://foodingly.netlify.app/assets/img/service/2.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 7,
			image: 'https://foodingly.netlify.app/assets/img/service/service-3.png',
			title: 'Dinner',
			icon: 'https://foodingly.netlify.app/assets/img/service/3.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
		{
			id: 8,
			image: 'https://foodingly.netlify.app/assets/img/service/service-4.png',
			title: 'Snacks',
			icon: 'https://foodingly.netlify.app/assets/img/service/4.png',
			text: 'Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.',
		},
	];

	const renderOffers = () => offers.map((offer) => <ReservationCard key={offer.id} offer={offer} />);

	return (
		<div className='Reservation'>
			<div className='Reservation-content'>
				<h3 className='Reservation-title'>
					<span>Our Reservation</span>
				</h3>
				<h2 className='Reservation-text'>
					<span>What we offer</span>
				</h2>

				<div className='Reservation-cards'>
					<Carousel show={4}>{renderOffers()}</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
