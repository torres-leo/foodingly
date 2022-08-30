import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const ContactBanner = () => {
	return (
		<div className='ContactBanner'>
			<div className='ContactBanner-content'>
				<h1 className='ContactBanner-title'>
					<span>Contact</span>
				</h1>

				<ul className='ContactBanner-pages'>
					<li className='ContactBanner-item'>
						<Link to='/' className='ContactBanner-light'>
							Home
						</Link>
					</li>
					<li className='ContactBanner-item'>
						<Icon className='fa-solid fa-circle ContactBanner-icon' />
					</li>
					<li className='ContactBanner-item'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactBanner;
