import React from 'react';

const Download = () => {
	return (
		<div className='Download'>
			<div className='Download-content'>
				<div className='Download-info'>
					<h2 className='Download-title'>Never Feel Hungry! Download Our Mobile App & Enjoy Delicious Food</h2>
					<p className='Download-text'>
						Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor demon consequat eu in id. Eu ex ea commodo.
					</p>
					<div className='Download-buttons'>
						<div
							style={{
								backgroundImage: `url("https://foodingly.netlify.app/assets/img/promotion/apple-store-icon.png")`,
							}}
							className='Download-appleButton'
						/>
						<div
							style={{
								backgroundImage: `url("https://foodingly.netlify.app/assets/img/promotion/google-play-store-icon.png")`,
							}}
							className='Download-googleButton'
						/>
					</div>
				</div>
				<div className='Download-image'></div>
			</div>
		</div>
	);
};

export default Download;
