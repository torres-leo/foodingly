import React, { useEffect, useState } from 'react';
import Products from './Products';
import useAxios from 'axios-hooks';

const ProductsList = () => {
	const [productList, setProductList] = useState([]);
	const [{ data }] = useAxios('/products');

	useEffect(() => {
		if (!data) return;
		setProductList(data);
		console.log(data);
	}, [data]);

	return (
		<div className='Products'>
			<div className='Products-content'>
				<h3 className='Products-title'>Our Featured Items</h3>
				<h2 className='Products-text'>Our most popular items</h2>
				<div className='Products-list'>
					{productList.map((product) => (
						<Products product={product} key={product.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
