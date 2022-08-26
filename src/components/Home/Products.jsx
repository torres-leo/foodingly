import React, { useContext } from 'react';
import Button from '../Button';
import AppContext from '../../context/AppProvider';

const Products = ({ product }) => {
	const { name, image, discount, price } = product;
	const { handleAddToCart } = useContext(AppContext);

	const showDiscount = () => {
		if (discount) return <div className='Products-cardDiscount'>{discount}%</div>;
	};

	return (
		<div className='Products-card'>
			<div className='Products-cardHeader'>
				<div className='Products-cardImage' style={{ backgroundImage: `url(${image})` }} />
				{showDiscount()}
			</div>
			<div className='Products-cardBody'>
				<p className='Products-cardName'>{name.toLowerCase()}</p>
				<p className='Products-cardInfo'>
					<span className='Products-cardRating'>4.8/5 Excellent</span>
					<span className='Products-cardReview'>(1214 reviews)</span>
				</p>

				<div className='Products-cardBuy'>
					<p className='Products-cardPrice'>${price}</p>
					<Button className='button outline' onClick={() => handleAddToCart(product)}>
						Add To Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Products;
