import React from 'react';
import Icon from '../Icon';

const ArticleChefs = ({ chef }) => {
	const { image, name, title } = chef;

	return (
		<article className='Chefs-card'>
			<div style={{ backgroundImage: `url(${image})` }} className='Chefs-image' />
			<div className='Chefs-info'>
				<ul className='Chefs-socialList'>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-facebook-f' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-twitter' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-instagram' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-linkedin-in' />
						</a>
					</li>
				</ul>
				<h3 className='Chefs-name'>{name}</h3>
				<p className='Chefs-profession'>{title}</p>
			</div>
		</article>
	);
};

export default ArticleChefs;
