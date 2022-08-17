import React from 'react';

const Chefs = () => {
	return (
		<div className='Chefs'>
			<div className='ChefsContent'>
				<div>
					<h3 className='Chefs-title'>Meet Our Chefs</h3>
					<h2 className='Chefs-text'>Our Experienced chefs</h2>
				</div>
				<div className='ChefsCards'>
					<article className='Chefs-card'>
						<div
							style={{ backgroundImage: `url("https://foodingly.netlify.app/assets/img/chefs/chefs-1.png")` }}
							className='Chefs-image'
						/>
					</article>
					<article className='Chefs-card'>
						<div
							style={{ backgroundImage: `url("https://foodingly.netlify.app/assets/img/chefs/chefs-2.png")` }}
							className='Chefs-image'
						/>
					</article>
					<article className='Chefs-card'>
						<div
							style={{ backgroundImage: `url("https://foodingly.netlify.app/assets/img/chefs/chefs-3.png")` }}
							className='Chefs-image'
						/>
					</article>
					<article className='Chefs-card'>
						<div
							style={{ backgroundImage: `url("https://foodingly.netlify.app/assets/img/chefs/chefs-4.png")` }}
							className='Chefs-image'
						/>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
