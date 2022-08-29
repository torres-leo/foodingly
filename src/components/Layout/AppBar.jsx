import React from 'react';
import Icon from '../Icon';
import CustomDropdown from '../CustomDropdown';

function AppBar() {
	const menu = [
		{
			id: 1,
			title: 'English',
			firstText: 'English',
			secondText: 'Arabic',
			thirdText: 'French',
		},
		{ id: 2, title: 'USD', firstText: 'USD', secondText: 'BD', thirdText: 'URQ' },
	];

	return (
		<div className='Appbar'>
			<div className='Appbar-content'>
				<ul className='Appbar-info'>
					<li className='Appbar-item'>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-square-facebook' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-square-twitter' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-instagram' />
						</a>
						<a href='#' className='Appbar-icon'>
							<Icon className='fa-brands fa-linkedin' />
						</a>
					</li>
					<li className='Appbar-item'>+011 234 567 89</li>
					<li className='Appbar-item'>contact@domain.com</li>
				</ul>

				<div className='Appbar-settings'>
					{menu.map((element) => (
						<CustomDropdown key={element.id} element={element} />
					))}
					<p className='Appbar-text'>My account</p>
				</div>
			</div>
		</div>
	);
}

export default AppBar;
