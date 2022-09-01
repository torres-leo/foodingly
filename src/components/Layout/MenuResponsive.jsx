import React, { useState } from 'react';
import { Dock } from 'react-dock';
import { Link } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown';
import Icon from '../Icon';
import Cart from '../Cart';

const MenuResponsive = () => {
	const [isVisible, setIsVisible] = useState(false);

	const renderModal = () => (
		<Dock position='right' isVisible={isVisible} onVisibleChange={handleChange} fluid={true} size={0.45}>
			<Cart isVisible={isVisible} handleChange={handleChange} />
		</Dock>
	);
	const handleChange = () => {
		setIsVisible(!isVisible);
	};

	const iconDots = <Icon className='fa-solid fa-ellipsis MenuResponsive-option' />;
	const menuBars = <Icon className='fa-solid fa-bars MenuResponsive-option' />;

	const iconSearch = <Icon className='fa-solid fa-magnifying-glass MenuResponsive-icon' />;
	const iconCart = <Icon className='fa-solid fa-bag-shopping MenuResponsive-icon' onClick={handleChange} />;
	const icons = [iconSearch, iconCart];

	const menu = ['Home', 'About us', 'Food Menu', 'Blog', 'Pages', 'Contact'];

	return (
		<div className='MenuResponsive sticky'>
			<div className='MenuResponsive-container'>
				<Link to='/'>
					<div className='MenuResponsive-image' />
				</Link>
				<div className='MenuResponsive-options'>
					<CustomDropdown element={icons} selectedDefault={iconDots} customClass='icons'></CustomDropdown>
					<CustomDropdown element={menu} selectedDefault={menuBars} customClass='hamburguer' />
					{renderModal()}
				</div>
			</div>
		</div>
	);
};

export default MenuResponsive;
