import React from 'react';
import { Field, ErrorMessage } from 'formik';

const index = ({ name, placeholder, as, type, customClass }) => {
	return (
		<>
			<Field
				as={as}
				name={name}
				type={type}
				placeholder={placeholder}
				className={`ContactMessage-field ${customClass}`}
			/>
			<ErrorMessage name={name} />
		</>
	);
};

export default index;
