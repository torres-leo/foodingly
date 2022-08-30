import React from 'react';
import { Formik, Field, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../Input';

const ContactForm = () => {
	const MyTextArea = ({ ...props }) => {
		const [field, meta] = useField(props);
		return (
			<>
				<textarea className='text-area' {...field} {...props} />
				{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
			</>
		);
	};

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className='ContactMessage'>
			<div className='ContactMessage-title'>Leave us a message</div>
			<Formik
				initialValues={{ name: '', email: '', phone: '', message: '' }}
				onSubmit={handleSubmit}
				validationSchema={Yup.object({
					name: Yup.string().min(4, 'Name to short').required('Name is Required'),
					email: Yup.string().email('Invalid email address').required('Email is Required'),
					phone: Yup.number()
						.positive('Must be positive number')
						.integer('Write a valid number')
						.typeError('Must be number'),
					message: Yup.string().max(1000).required('Write a message'),
				})}>
				<Form className='ContactMessage-form'>
					<div className='ContactMessage-input'>
						<Field id='name' name='name' type='text' placeholder='First Name' className='ContactMessage-field' />
						<ErrorMessage name='name' />
					</div>

					<div className='ContactMessage-input'>
						<Field id='email' name='email' type='email' placeholder='Email Address' className='ContactMessage-field' />
						<ErrorMessage name='email' />
					</div>

					<div className='ContactMessage-input'>
						<Field id='phone' name='phone' type='tel' placeholder='Phone' className='ContactMessage-field' />
						<ErrorMessage name='phone' />
					</div>

					<div className='ContactMessage-input'>
						<Field
							as='textarea'
							id='message'
							name='message'
							placeholder='Write message'
							className='ContactMessage-field message'
						/>
						<ErrorMessage name='message' className='Contact-error' />
					</div>

					<Input type='submit' className='button secondary' value='Send Messag' />
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
