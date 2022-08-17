import React from 'react';
import Layout from '../Layout';
import Hero from './Hero';
import Reservation from './Reservation';
import SpecialOffers from './SpecialOrders';
import Products from './Products';
import DinnerPlan from './DinnerPlan';
import Chefs from './Chefs';
import Download from './Download';
import Testimonials from './Testimonials';
import Subscribe from './Subscribe';

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
		</Layout>
	);
};

export default Home;
