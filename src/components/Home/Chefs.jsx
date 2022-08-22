import React from 'react';
import ArticleChefs from './ArticleChefs';

const Chefs = () => {
	return (
		<div className='Chefs'>
			<div className='Chefs-content'>
				<div>
					<h3 className='Chefs-title'>Meet Our Chefs</h3>
					<h2 className='Chefs-text'>Our Experienced chefs</h2>
				</div>
				<div className='Chefs-cards'>
					<ArticleChefs
						className='Chefs-card'
						url='https://foodingly.netlify.app/assets/img/chefs/chefs-1.png'
						chefName='Jane Cooper'
						chefTitle='Chief chef'
					/>
					<ArticleChefs
						className='Chefs-card'
						url='https://foodingly.netlify.app/assets/img/chefs/chefs-2.png'
						chefName='Cameron Willamson'
						chefTitle='Asst. Chef'
					/>
					<ArticleChefs
						className='Chefs-card'
						url='https://foodingly.netlify.app/assets/img/chefs/chefs-3.png'
						chefName='Brooklyn Simmons'
						chefTitle='Asst. Chef'
					/>
					<ArticleChefs
						className='Chefs-card'
						url='https://foodingly.netlify.app/assets/img/chefs/chefs-4.png'
						chefName='Kristin Watson'
						chefTitle='Nutritionist'
					/>
				</div>
			</div>
		</div>
	);
};

export default Chefs;
