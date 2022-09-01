import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const Banner = ({ title }) => {
	return (
		<div className='Banner'>
			<div className='Banner-content'>
				<h1 className='Banner-title'>
					<span>{title}</span>
				</h1>

				<ul className='Banner-pages'>
					<li className='Banner-item'>
						<Link to='/' className='Banner-light'>
							Home
						</Link>
					</li>
					<li className='Banner-item'>
						<Icon className='fa-solid fa-circle Banner-icon' />
					</li>
					<li className='Banner-item'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Banner;
