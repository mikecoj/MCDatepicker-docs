const MethodButton = ({ name, onClickHandler }) => {
	return (
		<button className="method-btn" onClick={onClickHandler}>
			{name}
		</button>
	);
};

export default MethodButton;