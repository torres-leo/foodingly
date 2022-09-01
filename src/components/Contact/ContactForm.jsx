import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFormik from '../InputFormik';
import Input from '../Input';

const ContactForm = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};
	const schema = Yup.object({
		name: Yup.string().min(4, 'Name to short').required('Name is Required'),
		email: Yup.string().email('Invalid email address').required('Email is Required'),
		phone: Yup.number().positive('Must be positive number').integer('Write a valid number').typeError('Must be number'),
		message: Yup.string().max(1000).min(30).required('Write a message'),
	});

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	return (
		<div className='ContactMessage'>
			<div className='ContactMessage-title'>Leave us a message</div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
				<Form className='ContactMessage-form'>
					<div className='ContactMessage-input'>
						<InputFormik name='name' type='text' placeholder='First Name' />
					</div>

					<div className='ContactMessage-input'>
						<InputFormik name='email' type='email' placeholder='Email Address' />
					</div>

					<div className='ContactMessage-input'>
						<InputFormik name='phone' type='tel' placeholder='Phone' />
					</div>

					<div className='ContactMessage-input'>
						<InputFormik as='textarea' name='message' type='text' placeholder='Write message' customClass='message' />
					</div>

					<Input type='submit' className='button secondary' value='Send Messag' />
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
