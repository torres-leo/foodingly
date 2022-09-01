import React from 'react';
import Button from '../Button';

const DinnerPlan = () => {
	return (
		<div className='Dinner'>
			<div className='Dinner-content'>
				<div className='Dinner-info'>
					<h2 className='Dinner-title'>Do You Have Any Dinner Plan Today? Reserve Your Tbale</h2>
					<p className='Dinner-text'>
						Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor demon consequat eu in id. Eu ex ea commodo.
					</p>
					<Button type='button' className='button secondary'>
						Make Reservation
					</Button>
				</div>
				<div className='Dinner-image'></div>
			</div>
		</div>
	);
};

export default DinnerPlan;
