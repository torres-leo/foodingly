import React from 'react';
import Icon from '../Icon';

const ArticleChefs = ({ className, url }) => {
	return (
		<article className={className}>
			<div style={{ backgroundImage: `url(${url})` }} className='Chefs-image' />
			<div className='Chefs-info'>
				<ul className='Chefs-socialList'>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-square-facebook' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-square-twitter' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-instagram' />
						</a>
					</li>
					<li className='Chefs-link'>
						<a href='' className='Chefs-icon'>
							<Icon className='fa-brands fa-linkedin' />
						</a>
					</li>
				</ul>
				<h3 className='Chefs-name'>Kristin Watson</h3>
				<p className='Chefs-profession'>Nutritionist</p>
			</div>
		</article>
	);
};

export default ArticleChefs;
