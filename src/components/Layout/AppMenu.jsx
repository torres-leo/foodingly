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
							<span>Food Menu</span>
							<span className='Appmenu-dropIcon'>
								<Icon className='fa-solid fa-angle-down icon' />
							</span>
							<ul className='Appmenu-submenu'>
								<li className='Appmenu-submenuItem'>
									<a className='Appmenu-submenuLink'>Food Grid</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Food Details
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Cart View
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Checkout View
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Order Success
									</a>
								</li>
							</ul>
						</a>
						<a href='#' className='Appmenu-item'>
							<span>Blog</span>
							<span className='Appmenu-dropIcon'>
								<Icon className='fa-solid fa-angle-down' />
							</span>
							<ul className='Appmenu-submenu'>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Blog
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Blog Details
									</a>
								</li>
							</ul>
						</a>
						<a href='#' className='Appmenu-item'>
							<span>Pages</span>
							<span className='Appmenu-dropIcon'>
								<Icon className='fa-solid fa-angle-down' />
							</span>

							<ul className='Appmenu-submenu'>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										About us
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Reservation
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Chefs
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Testimonials
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										FAQ
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										User Pages
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Customer Dashboard
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Privacy Policy
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										Terms Of Service
									</a>
								</li>
								<li className='Appmenu-submenuItem'>
									<a href='' className='Appmenu-submenuLink'>
										404 Error
									</a>
								</li>
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
