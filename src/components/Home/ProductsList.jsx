import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Button from '../Button';
import Product from './Product';

const ProductsList = () => {
	const [productList, setProductList] = useState([]);
	const [{ data }, refetch] = useAxios('/products');

	useEffect(() => {
		if (!data) return;
		setProductList(data);
	}, [data]);

	const filterProducts = async (category) => {
		await refetch({
			params: {
				category,
			},
		});
	};

	const renderProducts = () => productList.map((product) => <Product product={product} key={product.id} />);

	return (
		<div className='Products'>
			<div className='Products-content'>
				<h3 className='Products-title'>Our Featured Items</h3>
				<h2 className='Products-text'>Our most popular items</h2>
				<div className='Products-filters'>
					<Button className='button products' onClick={() => filterProducts('')}>
						All Categories
					</Button>
					<Button className='button products' onClick={() => filterProducts('NOODLES')}>
						Noodles
					</Button>
					<Button className='button products' onClick={() => filterProducts('BURGER')}>
						Burger
					</Button>
					<Button className='button products' onClick={() => filterProducts('CHICKEN')}>
						Chicken
					</Button>
					<Button className='button products' onClick={() => filterProducts('ICE_CREAM')}>
						Ice Cream
					</Button>
					<Button className='button products' onClick={() => filterProducts('DRINKS')}>
						Drinks
					</Button>
				</div>
				<div className='Products-list'>{renderProducts()}</div>
			</div>
		</div>
	);
};

export default ProductsList;
