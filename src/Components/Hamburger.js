import React from 'react';

const Hamburger = ({ openned, onClickHandler }) => {
	return (
		<button className={`hamburger ${openned ? 'hamburger--open' : ''}`} onClick={onClickHandler}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default Hamburger;
