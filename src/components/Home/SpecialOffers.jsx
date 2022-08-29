import React from 'react';
import Button from '../Button';

const SpecialOffers = () => {
	return (
		<div className='SpecialOffers'>
			<div className='SpecialOffers-content'>
				<h3 className='SpecialOffers-title'>Special Offers</h3>
				<h2 className='SpecialOffers-text'>Preferred Food, Drinks, Juice 30% Off Friday Only</h2>
				<Button type='button' className='button secondary'>
					Buy Now
				</Button>
			</div>
		</div>
	);
};

export default SpecialOffers;
