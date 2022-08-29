import React from 'react';
import Icon from '../Icon';
import Button from '../Button';

const BlogCard = ({ blog }) => {
	const { image, title, author, text, date, info } = blog;
	return (
		<article className='Blog-card'>
			<div className='Blog-containerImage'>
				<img className='Blog-image' style={{ backgroundImage: `url(${image})` }} />
				<span className='button blog'>{info}</span>
			</div>
			<div className='Blog-cardInfo'>
				<h3 className='Blog-cardTitle'>
					<a>{title}</a>
				</h3>
				<p className='Blog-cardText'>{text}</p>
				<div className='Blog-cardDetails'>
					<div className='Blog-date'>
						<Icon className='Blog-icon fa-solid fa-calendar-days' />
						<div>
							<p className='Blog-dateBold'>Date:</p>
							<p className='Blog-dateLight'>{date}</p>
						</div>
					</div>
					<div className='Blog-owner'>
						<Icon className='Blog-icon fa-solid fa-users' />
						<div>
							<p className='Blog-dateBold'>By:</p>
							<p className='Blog-dateLight'>{author}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default BlogCard;
