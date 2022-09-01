import React from 'react';
import Icon from '../Icon';
import CustomDropdown from '../CustomDropdown';

function AppBar() {
	const language = ['English', 'Arabic', 'French'];
	const currency = ['USD', 'BD', 'URQ'];

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
					<CustomDropdown element={language} customClass='line' selected='English' />
					{/* <span className='Appbar-line'>|</span> */}
					<CustomDropdown element={currency} customClass='line' selected='USD' />
					{/* <span className='Appbar-line'>|</span> */}
					<p className='Appbar-text'>My account</p>
				</div>
			</div>
		</div>
	);
}

export default AppBar;
