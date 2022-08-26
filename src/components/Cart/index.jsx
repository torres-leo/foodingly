import React, { useContext } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import AppContext from '../../context/AppProvider';

const Cart = ({ handleChange }) => {
	const { cart } = useContext(AppContext);
	console.log(cart);

	const renderItem = () =>
		cart.map((element) => (
			<div className='Cart-item' key={element.id}>
				<div className='Cart-itemImage' style={{ backgroundImage: `url(${element.image})` }} />
				<div className='Cart-itemInfo'>
					<p className='Cart-itemName'>{element.name.toLowerCase()}</p>
					<p className='Cart-itemPrice'>${element.price}</p>
				</div>
				<Icon className='fa-solid fa-trash-can cart-icon' />
			</div>
		));

	return (
		<div className='Cart'>
			<div className='Cart-header'>
				<span className='Cart-counter'>My Cart ({cart.length})</span>
				<Icon className='fa-solid fa-xmark Cart-close' onClick={handleChange} />
			</div>
			{renderItem()}

			<div className='Cart-total'>
				<p>SUBTOTAL</p>
				<p>$164.00</p>
			</div>
			<Button className='button cart'>Checkout</Button>
		</div>
	);
};

export default Cart;
