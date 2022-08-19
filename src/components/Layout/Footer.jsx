import React from 'react';

const Footer = () => {
	return (
		<div className='Footer'>
			<div className='Footer-content'>
				<div>
					<h5 className='Footer-title'>
						<span>Need any help?</span>
					</h5>
					<div className='Footer-helpInfo'>
						<div className='Footer-help'>
							<p className='Footer-helpText'>Call 24/7 for any help</p>
							<p className='Footer-helpGreen'>+00 123 456 789</p>
						</div>
						<div className='Footer-help'>
							<p className='Footer-helpText'>Mail to our support team</p>
							<p className='Footer-helpGreen'>support@domain.com</p>
						</div>
						<div className='Footer-help'>
							<p className='Footer-helpText'>Follow us on</p>
							<p>Follow us on</p>
						</div>
					</div>
				</div>

				<div>
					<h5 className='Footer-title'>
						<span>Quick links</span>
					</h5>
					<ul>
						<li className='Footer-link'>About us</li>
						<li className='Footer-link'>Testimonials</li>
						<li className='Footer-link'>Faqs</li>
						<li className='Footer-link'>Terms Service</li>
						<li className='Footer-link'>Food Grid</li>
						<li className='Footer-link'>Blog</li>
					</ul>
				</div>

				<div>
					<h5 className='Footer-title'>
						<span>Support</span>
					</h5>

					<ul>
						<li className='Footer-link'>customer dashboard</li>
						<li className='Footer-link'>login</li>
						<li className='Footer-link'>cart</li>
						<li className='Footer-link'>contact</li>
						<li className='Footer-link'>reservation</li>
						<li className='Footer-link'>privacy policy</li>
					</ul>
				</div>

				<div>
					<h5 className='Footer-title'>
						<span>Opening hours</span>
					</h5>
					<table>
						<tr>
							<td className='Footer-tablecell'>Monday</td>
							<td className='Footer-tablecell'>0.9.00-18.00</td>
						</tr>
						<tr>
							<td className='Footer-tablecell'>Tuesday</td>
							<td className='Footer-tablecell'>10.0.00-18.00</td>
						</tr>
						<tr>
							<td className='Footer-tablecell'>Wednesday</td>
							<td className='Footer-tablecell'>11.0.00-18.00</td>
						</tr>
						<tr>
							<td className='Footer-tablecell'>Thursday</td>
							<td className='Footer-tablecell'>12.0.00-18.00</td>
						</tr>
						<tr>
							<td className='Footer-tablecell'>Thursday</td>
							<td className='Footer-tablecell'>14.0.00-18.00</td>
						</tr>
						<tr>
							<td className='Footer-tablecell'>Saturday, Sunday</td>
							<td className='Footer-tablecell'>closed</td>
						</tr>
					</table>
				</div>
			</div>
			<div className='Footer-copyright'></div>
		</div>
	);
};

export default Footer;
