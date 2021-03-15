import { useState } from 'react';
const MethodField = ({ name, onClickHandler }) => {
	const [result, setResult] = useState(null);
	const handleClick = () => {
		const val = onClickHandler();
		setResult(val);
	};
	return (
		<div className="method-field">
			<button className="method-field__btn" onClick={handleClick}>
				{name}
			</button>
			<div className="method-field__result">{result}</div>
		</div>
	);
};

export default MethodField;