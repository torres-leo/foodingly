import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
	return (
		<div className='Blog'>
			<div className='Blog-Content'>
				<div className='Blog-heading'>
					<h3 className='Blog-title'>Our Blog</h3>
					<h2 className='Blog-text'>Our latest blogs and blogs</h2>
				</div>
				<div className='Blog-container'>
					<BlogCard
						urlImage='https://foodingly.netlify.app/assets/img/blogs/blog-1.png'
						title='Healthy food and nutrition among all the children'
						text='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...'
						date='20 Dec, 2021'
						by='Admin'
					/>
					<BlogCard
						urlImage='https://foodingly.netlify.app/assets/img/blogs/blog-2.png'
						title='Healthy food and nutrition among all the children'
						text='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...'
						date='20 Dec, 2021'
						by='Admin'
					/>
					<BlogCard
						urlImage='https://foodingly.netlify.app/assets/img/blogs/blog-3.png'
						title='Healthy food and nutrition among all the children'
						text='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...'
						date='20 Dec, 2021'
						by='Admin'
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
