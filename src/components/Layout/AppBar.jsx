import React from 'react';
import Icon from '../Icon';

const AppBar = () => {
	return (
		<div className='Appbar'>
			<div className='Appbar-content'>
				<ul className='Appbar-info'>
					<li className='Appbar-item'>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-square-facebook' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-square-twitter' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-instagram' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-linkedin' />
						</a>
					</li>
					<li className='Appbar-item'>+011 234 567 89</li>
					<li className='Appbar-item'>contact@domain.com</li>
				</ul>
				<ul className='AppbarSettings'>
					<li className='Appbar-setting'>
						<span className='Appbar-text'>English</span>
						<Icon className='fa-solid fa-angle-down' />
					</li>
					<li className='Appbar-setting'>
						<span className='Appbar-text'>USD</span>
						<Icon className='fa-solid fa-angle-down' />
					</li>
					<li className='Appbar-setting'>My Account</li>
				</ul>
			</div>
		</div>
	);
};

export default AppBar;
