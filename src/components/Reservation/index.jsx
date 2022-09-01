import React from 'react';
// import Carousel from '../customCarousel/react-slick';
import ReservationCard from './ReservationCard';
import Carousel from '../customCarousel';

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
];
const Reservation = () => {
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

				<Carousel slides={4} className='Reservation-carousel'>
					{renderOffers()}
				</Carousel>
			</div>
		</div>
	);
};

export default Reservation;
