import React from 'react';
import Icon from '../Icon';

const TestimonialCard = ({ person }) => {
	const { image, name, date, text } = person;
	return (
		<div className='Testimonial-card'>
			<div className='Testimonial-cardHeader'>
				<p className='Testimonial-cardDate'>{date}</p>
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
					<span>{name}</span>
				</h3>
				<p className='Testimonial-cardText'>“{text}”</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
