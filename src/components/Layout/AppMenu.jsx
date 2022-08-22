import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

const AppMenu = () => {
	return (
		<div className='Appmenu sticky'>
			<div className='Appmenu-container'>
				<div className='Appmenu-image'></div>
				<div className='Appmenu-content'>
					<nav className='Appmenu-nav'>
						<a href='#' className='Appmenu-item'>
							Home
						</a>
						<a href='#' className='Appmenu-item'>
							About us
						</a>
						<a href='#' className='Appmenu-item'>
							Food Menu
							<ul className='Appmenu-dropdown'>
								<li className='Appmenu-dropdownItem'>1</li>
								<li className='Appmenu-dropdownItem'>2</li>
								<li className='Appmenu-dropdownItem'>3</li>
								<li className='Appmenu-dropdownItem'>4</li>
								<li className='Appmenu-dropdownItem'>5</li>
							</ul>
						</a>
						<a href='#' className='Appmenu-item'>
							Blog
							<ul className='Appmenu-dropdown'>
								<li className='Appmenu-dropdownItem'>1</li>
								<li className='Appmenu-dropdownItem'>2</li>
							</ul>
						</a>
						<a href='#' className='Appmenu-item'>
							Pages
							<ul className='Appmenu-dropdown'>
								<li className='Appmenu-dropdownItem'>1</li>
								<li className='Appmenu-dropdownItem'>2</li>
								<li className='Appmenu-dropdownItem'>3</li>
								<li className='Appmenu-dropdownItem'>4</li>
								<li className='Appmenu-dropdownItem'>5</li>
								<li className='Appmenu-dropdownItem'>6</li>
								<li className='Appmenu-dropdownItem'>7</li>
								<li className='Appmenu-dropdownItem'>8</li>
								<li className='Appmenu-dropdownItem'>9</li>
								<li className='Appmenu-dropdownItem'>10</li>
							</ul>
						</a>
						<a href='#' className='Appmenu-item'>
							Contact
						</a>
					</nav>
					<ul className='Appmenu-buttons'>
						<li className='Appmenu-icon'>
							<Icon className='fa-solid fa-bag-shopping' />
						</li>
						<li className='Appmenu-icon'>
							<Icon className='fa-solid fa-magnifying-glass' />
						</li>

						<li className='Appmenu-icon'>
							<Button type='button' className='button primary'>
								Reservation
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AppMenu;
