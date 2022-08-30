import React from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactUs = () => {
	const offices = [
		{
			title: 'Head Office',
			city: 'New Mexico',
			text: '4140 Parker Rd. Allentown, New Mexico 31134',
		},
		{
			title: 'Washington Office',
			city: 'Washington',
			text: '4517 Washington Ave. Manchester, Kentucky 39495',
		},
		{
			title: 'California Office',
			city: 'California',
			text: '3891 Ranchview Dr. Richardson, California 62639',
		},
		{
			title: 'Office schedule',
			city: 'Working hours',
			text: 'Monday to Frinday 9 am to 10pm',
		},
	];

	const renderOffice = () => offices.map((office) => <ContactCard key={office.title} office={office} />);

	return (
		<div className='ContactWithus'>
			<div className='ContactWithus-content'>
				<h2 className='ContactWithus-title'>
					<span>Contact with us</span>
				</h2>
				<div className='ContactWithus-phone'>
					<span className='ContactWithus-text'>Stay in touch</span>
					<span className='ContactWithus-text'>+00 123 456 789</span>
				</div>
				<div className='ContactWithus-cards'>{renderOffice()}</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactUs;
