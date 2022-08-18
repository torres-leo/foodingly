import React from 'react';
import ArticleChefs from './ArticleChefs';

const Chefs = () => {
	return (
		<div className='Chefs'>
			<div className='ChefsContent'>
				<div>
					<h3 className='Chefs-title'>Meet Our Chefs</h3>
					<h2 className='Chefs-text'>Our Experienced chefs</h2>
				</div>
				<div className='ChefsCards'>
					<ArticleChefs className='Chefs-card' url='https://foodingly.netlify.app/assets/img/chefs/chefs-1.png' />
					<ArticleChefs className='Chefs-card' url='https://foodingly.netlify.app/assets/img/chefs/chefs-2.png' />
					<ArticleChefs className='Chefs-card' url='https://foodingly.netlify.app/assets/img/chefs/chefs-3.png' />
					<ArticleChefs className='Chefs-card' url='https://foodingly.netlify.app/assets/img/chefs/chefs-4.png' />
				</div>
			</div>
		</div>
	);
};

export default Chefs;
