import React from 'react';
import CarouselReservation from '../customCarousel';
import ReservationCard from './ReservationCard';

const Reservation = () => {
	return (
		<div className='Reservation'>
			<div className='Reservation-content'>
				<h3 className='Reservation-title'>
					<span>Our Reservation</span>
				</h3>
				<h2 className='Reservation-text'>
					<span>What we offer</span>
				</h2>

				<CarouselReservation show={4}>
					<ReservationCard
						title='Breakfast'
						icon='https://foodingly.netlify.app/assets/img/service/1.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-1.png'
					/>
					<ReservationCard
						title='Lunch'
						icon='https://foodingly.netlify.app/assets/img/service/2.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-2.png'
					/>
					<ReservationCard
						title='Dinner'
						icon='https://foodingly.netlify.app/assets/img/service/3.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-3.png'
					/>
					<ReservationCard
						title='Snacks'
						icon='https://foodingly.netlify.app/assets/img/service/4.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-4.png'
					/>
					<ReservationCard
						title='Breakfast'
						icon='https://foodingly.netlify.app/assets/img/service/1.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-1.png'
					/>
					<ReservationCard
						title='Lunch'
						icon='https://foodingly.netlify.app/assets/img/service/2.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-2.png'
					/>
					<ReservationCard
						title='Dinner'
						icon='https://foodingly.netlify.app/assets/img/service/3.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-3.png'
					/>
					<ReservationCard
						title='Snacks'
						icon='https://foodingly.netlify.app/assets/img/service/4.png'
						text='Eu occaecat mollit tempor denim consectetur. Labore labore est du commodo veniam.'
						image='https://foodingly.netlify.app/assets/img/service/service-4.png'
					/>
				</CarouselReservation>
			</div>
		</div>
	);
};

export default Reservation;
