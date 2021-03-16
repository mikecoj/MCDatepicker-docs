import React from 'react';

const Card = ({ name, children }) => {
	return (
		<div className="m-card">
			<h1 className="m-card__header">{name}</h1>
			<div className="m-card__body">{children}</div>
		</div>
	);
};

export default Card;