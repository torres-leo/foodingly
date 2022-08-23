import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children, show }) => {
	const settings = {
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 6000,
		infinite: true,
		speed: 1500,
		slidesToShow: show,
		slidesToScroll: 1,
		pauseOnHover: false,
	};
	return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
