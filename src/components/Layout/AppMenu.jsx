import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

const AppMenu = () => {
	return (
		<div className='Appmenu'>
			<div className='AppmenuImage'></div>
			<div className='AppmenuContent'>
				<nav className='AppmenuNav'>
					<a href='#' className='Appmenu-item'>
						Home
					</a>
					<a href='#' className='Appmenu-item'>
						About us
					</a>
					<a href='#' className='Appmenu-item'>
						Food Menu
					</a>
					<a href='#' className='Appmenu-item'>
						Blog
					</a>
					<a href='#' className='Appmenu-item'>
						Pages
					</a>
					<a href='#' className='Appmenu-item'>
						Contact
					</a>
				</nav>
				<ul className='AppmenuButtons'>
					<li className='Appmenu-button'>
						<Icon className='fa-solid fa-bag-shopping' />
					</li>
					<li className='Appmenu-button'>
						<Icon className='fa-solid fa-magnifying-glass' />
					</li>

					<li className='Appmenu-button'>
						<Button className='btn primary'>Reservation</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AppMenu;
