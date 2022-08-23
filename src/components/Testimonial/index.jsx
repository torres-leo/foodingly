import React from 'react';
import CarouselTestimonial from '../customCarousel';
import ReservationCard from '../Reservation/ReservationCard';

const Testimonials = () => {
	return (
		<div className='Testimonial'>
			<div className='Testimonial-content'>
				<h3 className='Testimonial-title'>
					<span>Testimonials</span>
				</h3>
				<h2 className='Testimonial-text'>
					<span>What Our Client's Say About Us</span>
				</h2>

				<CarouselTestimonial show={3}>
					<ReservationCard />
					<ReservationCard />
					<ReservationCard />
					<ReservationCard />
				</CarouselTestimonial>
			</div>
		</div>
	);
};

export default Testimonials;
