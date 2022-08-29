import React from 'react';
// import Layout from '../Layout';
import Hero from './Hero';
import Reservation from '../Reservation';
import SpecialOffers from './SpecialOffers';
import ProductsList from './ProductsList';
import DinnerPlan from './DinnerPlan';
import Chefs from './Chefs';
import Download from './Download';
import Testimonials from '../Testimonial';
import Subscribe from './Subscribe';
import Blog from './Blog';

const Home = () => {
	return (
		<>
			<Hero />
			<Reservation />
			<SpecialOffers />
			<ProductsList />
			<DinnerPlan />
			<Chefs />
			<Download />
			<Testimonials />
			<Subscribe />
			<Blog />
		</>
	);
};

export default Home;
