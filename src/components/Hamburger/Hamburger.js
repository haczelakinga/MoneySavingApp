import React, { useEffect } from 'react';
import './Hamburger.scss';

const Hamburger = () => {
	let nav = '';
	let hamburger = '';
	useEffect(() => {
		nav = document.querySelector('.navigation');
		hamburger = document.querySelector('.hamburger');

		if (nav && !nav.classList.contains('open')) {
			hamburger.classList.remove('white-hamburger');
		}
	}, []);

	const handleClick = () => {
		nav.classList.toggle('open');
		hamburger.classList.toggle('white-hamburger');
	};

	return (
		(
			<div className="hamburger">
				<span
					className="fas fa-ellipsis-v hamburger-icon"
					onClick={handleClick}></span>
			</div>
		)
	);
};

export default Hamburger;
