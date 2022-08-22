import React from 'react';
import Layout from '../Layout';
import Hero from './Hero';
import Reservation from '../Reservation/index';
import SpecialOffers from './SpecialOrders';
import Products from './Products';
import DinnerPlan from './DinnerPlan';
import Chefs from './Chefs';
import Download from './Download';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';
import Blog from './Blog';

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Reservation />
			<SpecialOffers />
			<Products />
			<DinnerPlan />
			<Chefs />
			<Download />
			<Testimonials />
			<Subscribe />
			<Blog />
		</Layout>
	);
};

export default Home;
