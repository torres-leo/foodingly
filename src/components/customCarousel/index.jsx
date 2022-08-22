import React from 'react';
import Slider from 'react-slick';
import ReservationCard from './';

const Carousel = ({ children }) => {
	const settings = {
		autoplay: true,
		arrows: false,
		autoplaySpeed: 6000,
		infinite: true,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
	};
	return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
