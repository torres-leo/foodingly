import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
	const blogs = [
		{
			image: 'https://foodingly.netlify.app/assets/img/blogs/blog-1.png',
			title: 'Healthy food and nutrition among all the children',
			text: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...',
			date: '20 Dec, 2021',
			author: 'Admin',
			info: 'Food & water',
		},
		{
			image: 'https://foodingly.netlify.app/assets/img/blogs/blog-2.png',
			title: 'How to make delicious and spicy chicken grill',
			text: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...',
			date: '20 Dec, 2021',
			author: 'Admin',
			info: 'Delicious',
		},
		{
			image: 'https://foodingly.netlify.app/assets/img/blogs/blog-3.png',
			title: 'Historical culture of asian food and nutrition',
			text: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...',
			date: '20 Dec, 2021',
			author: 'Admin',
			info: 'food and nutrition',
		},
	];

	const renderBlogs = () => blogs.map((blog) => <BlogCard key={blog.title} blog={blog} />);

	return (
		<div className='Blog'>
			<div className='Blog-content'>
				<h3 className='Blog-title'>Our Blog</h3>
				<h2 className='Blog-text'>Our latest blogs and blogs</h2>

				<div className='Blog-cards'>{renderBlogs()}</div>
			</div>
		</div>
	);
};

export default Blog;
