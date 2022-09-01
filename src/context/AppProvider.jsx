import React, { createContext, useState, useEffect } from 'react';
import useAxios from 'axios-hooks';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(null);
	const [{ data }, refetch] = useAxios('/cart');
	const [counter, setCounter] = useState(0);

	const createCart = () => {
		return refetch({
			method: 'POST',
			data: {
				products: [],
			},
		});
	};

	const addItemToCart = async (productId, cartId) => {
		await refetch({
			url: '/cart/add-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
		setCounter(counter + 1);
	};

	const showItemsCart = () => {
		return refetch({
			url: `/cart/${cart?.id}`,
			method: 'GET',
		});
	};

	const deleteItemFromCart = async (productId, cartId) => {
		await refetch({
			url: '/cart/remove-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
		setCounter(counter - 1);
	};

	return (
		<AppContext.Provider
			value={{ cart, setCart, addItemToCart, showItemsCart, createCart, deleteItemFromCart, counter }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
