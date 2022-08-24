import React from 'react';
import useAxios from 'axios-hooks';

const Products = () => {
	const [{ data }] = useAxios('/products');
	console.log(data);
	return (
		<div className='Products'>
			<div className='ProductsContent'>
				<h3 className='Products-title'>Our Featured Items</h3>
				<h2 className='Products-text'>Our most popular items</h2>
			</div>
		</div>
	);
};

export default Products;
