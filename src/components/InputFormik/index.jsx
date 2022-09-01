import React from 'react';
import Proptypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

const InputFormik = ({ name, placeholder, as, type, customClass }) => {
	return (
		<>
			<Field
				as={as}
				name={name}
				type={type}
				placeholder={placeholder}
				className={`ContactMessage-field ${customClass}`}
			/>
			<span className='ContactMessage-error'>
				<ErrorMessage name={name} />
			</span>
		</>
	);
};

InputFormik.defaultProps = {
	name: '',
	customClass: '',
	as: '',
	type: '',
	placeholder: '',
};

InputFormik.propTypes = {
	as: Proptypes.string,
	name: Proptypes.string,
	type: Proptypes.string,
	customClass: Proptypes.string,
	placeholder: Proptypes.string,
};

export default InputFormik;
