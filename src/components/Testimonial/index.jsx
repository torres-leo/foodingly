import React from 'react';
import CarouselTestimonial from '../customCarousel';
import TestimonialCard from './TestimonialCard';
import NickCarousel from '../CustomDropdown/NickCarousel';

const Testimonials = () => {
	const testimonialList = [
		{
			image: 'https://foodingly.netlify.app/assets/img/review/review1.png',
			name: 'Manresh Chandra',
			date: '05 Jan, 2022',
			text: 'Eu ipsum ut dolore magna minim cupidatat ullamco anim sit minim irure. Consectetur voluptate nisi magna consectetur cillum proident dolore veniam voluptate adipisicing labore. Anim eiusmod dolor quis pariatur.',
		},
		{
			image: 'https://foodingly.netlify.app/assets/img/review/review2.png',
			name: 'Santa mariam',
			date: '08 June, 2022',
			text: 'Eu ipsum ut dolore magna minim cupidatat ullamco anim sit minim irure. Consectetur voluptate nisi magna consectetur cillum proident dolore veniam voluptate adipisicing labore. Anim eiusmod dolor quis pariatur.',
		},
		{
			image: 'https://foodingly.netlify.app/assets/img/review/review3.png',
			name: 'Jack cremer',
			date: '23 Feb, 2022',
			text: 'Eu ipsum ut dolore magna minim cupidatat ullamco anim sit minim irure. Consectetur voluptate nisi magna consectetur cillum proident dolore veniam voluptate adipisicing labore. Anim eiusmod dolor quis pariatur.',
		},
		{
			image: 'https://foodingly.netlify.app/assets/img/review/review4.png',
			name: 'Mandeep harshaal',
			date: '28 June, 2022',
			text: 'Eu ipsum ut dolore magna minim cupidatat ullamco anim sit minim irure. Consectetur voluptate nisi magna consectetur cillum proident dolore veniam voluptate adipisicing labore. Anim eiusmod dolor quis pariatur.',
		},
	];

	const renderTestimonials = () =>
		testimonialList.map((person) => <TestimonialCard person={person} key={person.name} />);

	return (
		<div className='Testimonial'>
			<div className='Testimonial-content'>
				<h3 className='Testimonial-title'>
					<span>Testimonials</span>
				</h3>
				<h2 className='Testimonial-text'>
					<span>What Our Client's Say About Us</span>
				</h2>

				{/* <CarouselTestimonial show={3}>{renderTestimonials()}</CarouselTestimonial> */}
				<NickCarousel slides={3} className='Testimonial-carousel'>
					{renderTestimonials()}
				</NickCarousel>
			</div>
		</div>
	);
};

export default Testimonials;
