import React, { useEffect, useContext, useMemo } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import AppContext from '../../context/AppProvider';

const Cart = ({ handleChange, isVisible }) => {
	const { cart, setCart, showItemsCart, deleteItemFromCart } = useContext(AppContext);

	useEffect(() => {
		fetchCart();
	}, [isVisible]);

	const fetchCart = async () => {
		if (!isVisible) return;
		const cart = await showItemsCart();
		setCart(cart.data);
	};

	const handleRemoveItem = async (productId, cartId) => {
		await deleteItemFromCart(productId, cartId);
		const cart = await showItemsCart();
		setCart(cart.data);
		set;
	};

	const subtotal = useMemo(() => {
		let sum = 0;
		cart?.products.forEach((product) => {
			sum += product.price;
		});
		return sum;
	}, [cart?.products]);

	const renderItem = () =>
		!cart?.products ? (
			<p>No Products in Cart</p>
		) : (
			cart?.products?.map((element) => (
				<div className='Cart-item' key={element.id}>
					<div className='Cart-itemImage' style={{ backgroundImage: `url(${element.image})` }} />
					<div className='Cart-itemInfo'>
						<p className='Cart-itemName'>{element.name.toLowerCase()}</p>
						<p className='Cart-itemPrice'>1 x ${element.price}</p>
					</div>
					<Icon className='fa-solid fa-trash-can Cart-delete' onClick={() => handleRemoveItem(element.id, cart?.id)} />
				</div>
			))
		);

	return (
		<div className='Cart'>
			<div className='Cart-header'>
				<span className='Cart-counter'>My Cart ({!cart?.products ? 0 : cart.products.length})</span>
				<Icon className='fa-solid fa-xmark Cart-close' onClick={handleChange} />
			</div>
			{renderItem()}

			<div className='Cart-total'>
				<p>SUBTOTAL</p>
				<p>$ {subtotal}</p>
			</div>
			<Button className='button cart'>Checkout</Button>
		</div>
	);
};

export default Cart;
