import React from 'react';
import Icon from '../Icon';

const TestimonialCard = ({ image, testimonialName }) => {
	return (
		<div className='Testimonial-card'>
			<div className='Testimonial-cardHeader'>
				<p className='Testimonial-cardDate'>08 June, 2022</p>
				<div className='Testimonial-cardRating'>
					<p className='Testimonial-cardRatingText'>Excellent</p>
					<ul className='Testimonial-cardStars'>
						<li className='Testimonial-cardIcon'>
							<Icon className='fa-solid fa-star' />
						</li>
						<li className='Testimonial-cardIcon'>
							<Icon className='fa-solid fa-star' />
						</li>
						<li className='Testimonial-cardIcon'>
							<Icon className='fa-solid fa-star' />
						</li>
						<li className='Testimonial-cardIcon'>
							<Icon className='fa-solid fa-star' />
						</li>
						<li className='Testimonial-cardIcon'>
							<Icon className='fa-solid fa-star' />
						</li>
					</ul>
				</div>
			</div>
			<div className='Testimonial-cardBody'>
				<div className='Testimonial-cardImage' style={{ backgroundImage: `url(${image})` }}></div>
				<h3 className='Testimonial-cardName'>
					<span>{testimonialName}</span>
				</h3>
				<p className='Testimonial-cardText'>
					“Eu ipsum ut dolore magna minim cupidatat ullamco anim sit minim irure. Consectetur voluptate nisi magna
					consectetur cillum proident dolore veniam voluptate adipisicing labore. Anim eiusmod dolor quis pariatur.”
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
