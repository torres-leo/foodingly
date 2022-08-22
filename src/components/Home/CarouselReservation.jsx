import React from 'react';
// import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import Slider from 'react-slick';

const CarouselReservation = () => {
	// const swiper = new Swiper('.swiper', {
	// 	// configure Swiper to use modules
	// 	modules: [Navigation, Pagination],
	// });
	// const swiperSlide = useSwiperSlide();
	// const settings = {
	// 	// dots: true,
	// 	infinite: true,
	// 	speed: 3100,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 3,
	// };
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			autoPlay={true}
			spaceBetween={50}
			// scrollbar={{ draggable: true }}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={4}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			swiperslide='true'>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
			<SwiperSlide>Slide 8</SwiperSlide>
			<SwiperSlide>Slide 9</SwiperSlide>
			<SwiperSlide>Slide 10</SwiperSlide>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			<SwiperSlide>Slide 5</SwiperSlide>
			<SwiperSlide>Slide 6</SwiperSlide>
			<SwiperSlide>Slide 7</SwiperSlide>
		</Swiper>
		// <Slider {...settings}>
		// 	<div>
		// 		<h3>1</h3>
		// 	</div>
		// 	<div>
		// 		<h3>2</h3>
		// 	</div>
		// 	<div>
		// 		<h3>3</h3>
		// 	</div>
		// 	<div>
		// 		<h3>4</h3>
		// 	</div>
		// 	<div>
		// 		<h3>5</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// 	<div>
		// 		<h3>6</h3>
		// 	</div>
		// </Slider>
	);
};

export default CarouselReservation;
