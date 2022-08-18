import React from 'react';
import Button from '../Button';
import Input from '../Input';
import Icon from '../Icon';

const Subscribe = () => {
	return (
		<div className='Subscribe'>
			<div className='Subscribe-content'>
				<div className='Subscribe-info'>
					<Icon className='Subscribe-icon' />
					<div>
						<h4 className='Subscribe-text'>
							<span>Get the latest Blogs and offers</span>
						</h4>
						<h2 className='Subscribe-text'>Subscribe to our Blogsletter</h2>
					</div>
				</div>
				<form>
					<Input type='text' placeholder='Enter your mail address' className='Subscribe-input' />
					<Button type='button' className='button subscribe'>
						Subscribe
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Subscribe;
