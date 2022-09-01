import React from 'react';
import ChefsCard from './ChefsCard';

const chefList = [
	{
		image: 'https://foodingly.netlify.app/assets/img/chefs/chefs-1.png',
		name: 'Jane Cooper',
		title: 'Chief chef',
	},
	{
		image: 'https://foodingly.netlify.app/assets/img/chefs/chefs-2.png',
		name: 'Cameron Willamson',
		title: 'Asst. Chef',
	},
	{
		image: 'https://foodingly.netlify.app/assets/img/chefs/chefs-3.png',
		name: 'Brooklyn Simmons',
		title: 'Asst. Chef',
	},
	{
		image: 'https://foodingly.netlify.app/assets/img/chefs/chefs-4.png',
		name: 'Kristin Watson',
		title: 'Nutritionist',
	},
];
const Chefs = () => {
	const renderChefs = () => chefList.map((chef) => <ChefsCard chef={chef} key={chef.name} />);

	return (
		<div className='Chefs'>
			<div className='Chefs-content'>
				<h3 className='Chefs-title'>
					<span>Meet Our Chefs</span>
				</h3>
				<h2 className='Chefs-text'>
					<span>Our Experienced chefs</span>
				</h2>
				<div className='Chefs-cards'>{renderChefs()}</div>
			</div>
		</div>
	);
};

export default Chefs;
