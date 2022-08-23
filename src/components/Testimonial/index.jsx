import React from 'react';
import CarouselTestimonial from '../customCarousel';
import TestimonialCard from './TestimonialCard';

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
					<TestimonialCard
						image='https://foodingly.netlify.app/assets/img/review/review1.png'
						testimonialName='Manresh Chandra'
					/>
					<TestimonialCard
						image='https://foodingly.netlify.app/assets/img/review/review2.png'
						testimonialName='Manresh Chandra'
					/>
					<TestimonialCard
						image='https://foodingly.netlify.app/assets/img/review/review3.png'
						testimonialName='Manresh Chandra'
					/>
					<TestimonialCard
						image='https://foodingly.netlify.app/assets/img/review/review4.png'
						testimonialName='Manresh Chandra'
					/>
				</CarouselTestimonial>
			</div>
		</div>
	);
};

export default Testimonials;
