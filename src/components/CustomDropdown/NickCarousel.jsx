import React, { useState } from 'react';
import Carousel, { autoplayPlugin, slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const NickCarousel = ({ children, slides, className }) => {
	const [value, setValue] = useState(0);
	const onChange = (value) => {
		setValue(value);
	};

	return (
		<>
			<Carousel
				value={value}
				onChange={onChange}
				plugins={[
					'infinite',
					{
						resolve: autoplayPlugin,
						options: {
							interval: 5000,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: slides,
						},
					},
				]}
				breakpoints={{
					992: {
						plugins: [
							'infinite',
							{
								resolve: autoplayPlugin,
								options: {
									interval: 5000,
								},
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 2,
								},
							},
						],
					},
					576: {
						plugins: [
							'infinite',
							{
								resolve: autoplayPlugin,
								options: {
									interval: 5000,
								},
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 1,
								},
							},
						],
					},
				}}
				animationSpeed={1500}
				className={className}
			>
				{children}
			</Carousel>
			<Dots value={value} onChange={onChange} number={4} />
		</>
	);
};

export default NickCarousel;
