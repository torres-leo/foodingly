import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';

const LayoutApp = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default LayoutApp;
