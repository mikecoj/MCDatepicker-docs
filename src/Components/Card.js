const Card = ({ name, children }) => {
	return (
		<div className="card">
			<h1 className="card__header">{name}</h1>
			<div className="card__body">{children}</div>
		</div>
	);
};

export default Card;