import React from 'react';
import Button from '../Button';

const SpecialOrders = () => {
	return (
		<div className='Banner primary'>
			<div className='BannerContent'>
				<div>
					<p className='Banner-text'>Special Offers</p>
					<h2 className='Banner-title'>Preferred Food, Drinks, Juice 30% Off Friday Only</h2>
					<div className='Banner-btn'>
						<Button type='button' className='button secondary'>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialOrders;
