import React, { createContext, useState, useEffect } from 'react';
import useAxios from 'axios-hooks';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(null);
	const [{ data }, refetch] = useAxios('/cart');

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
	};

	const showItemsCart = () => {
		return refetch({
			url: `/cart/${cart?.id}`,
			method: 'GET',
		});
	};

	const deleteItemFromCart = (productId, cartId) => {
		return refetch({
			url: '/cart/remove-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
	};

	return (
		<AppContext.Provider value={{ cart, setCart, addItemToCart, showItemsCart, createCart, deleteItemFromCart }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
