import React from 'react';

const ArticleChefs = ({ className, url }) => {
	return (
		<article className={className}>
			<div style={{ backgroundImage: `url(${url})` }} className='Chefs-image' />
		</article>
	);
};

export default ArticleChefs;
