import React from 'react';

const FormField = ({ type, name, options }) => {
	return (
		<div className="form-field">
			<label className="form-field__label"> {name}</label>
			{type === 'input' && <input className="form-field__input" type="text" />}
			{type === 'select' && options && (
				<select className="form-field__select" name={name}>
					{options.map((option) => (
						<option className="form-field__options" value={option} key={option}>
							{option}
						</option>
					))}
				</select>
			)}
		</div>
	);
};

export default FormField;