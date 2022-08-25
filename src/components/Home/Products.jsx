import React from 'react';

const Products = ({ product }) => {
	const { name, image, discount, price } = product;
	return (
		<div className='Products-card'>
			<div className='Products-cardHeader'>
				<div className='Products-cardImage' style={{ backgroundImage: `url(${image})` }} />
				{discount && <div className='Products-cardDiscount'>{discount}%</div>}
			</div>
			<div className='Products-cardBody'>
				<p className='Products-cardName'>{name}</p>
				<p className='Products-cardRating'>
					<span>4.8/5 Excellent</span>
					<span>(1214 reviews)</span>
				</p>
				<div className='Products-cardBuy'>
					<p className='Products-cardPrice'>${price}</p>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default Products;
