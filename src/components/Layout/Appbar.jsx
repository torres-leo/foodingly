import React from 'react';
import Icon from '../Icon';

const Appbar = () => {
	return (
		<div className='Appbar'>
			<div className='AppbarContent'>
				<ul className='AppbarInfo'>
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
					<li className='Appbar-setting'>English</li>
					<li className='Appbar-setting'>USD</li>
					<li className='Appbar-setting'>My Account</li>
				</ul>
			</div>
		</div>
	);
};

export default Appbar;
