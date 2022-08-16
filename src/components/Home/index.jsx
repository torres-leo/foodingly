import React from 'react';
import Layout from '../Layout';
import Hero from './Hero';
import Reservation from './Reservation';
import SpecialOrders from './SpecialOrders';
import Products from './Products';
import DinnerPlan from './DinnerPlan';

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Reservation />
			<SpecialOrders />
			<Products />
			<DinnerPlan />
		</Layout>
	);
};

export default Home;
