import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// const [cartItem, setCartItem] = useState({});

	const handleAddToCart = ({ category, createdAt, deleteAt, updateAt, ...product }) => {
		setCart([...cart, product]);
		console.log(cart);
	};

	return <AppContext.Provider value={{ cart, setCart, handleAddToCart }}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
