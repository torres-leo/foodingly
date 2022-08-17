import React from 'react';

const Subscribe = () => {
	return (
		<div className='Subscribe'>
			<div className='Subscribe-content'>
				<div className='Subscribe-info'>
					<div className='Subscribe-icon'></div>
					<div>
						<h4 className='Subscribe-text'>Get the latest Blogs and offers</h4>
						<h2 className='Subscribe-text'>Subscribe to our Blogsletter</h2>
					</div>
				</div>
				<form>
					<input type='text' placeholder='Enter your mail address' className='Subscribe-input' />
					<button type='button' className='button subscribe'>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Subscribe;
