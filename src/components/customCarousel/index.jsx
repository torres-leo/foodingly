import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children, className }) => {
	const settings = {
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 6000,
		infinite: true,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	};
	return (
		<Slider {...settings} className={className}>
			{children}
		</Slider>
	);
};

export default Carousel;
