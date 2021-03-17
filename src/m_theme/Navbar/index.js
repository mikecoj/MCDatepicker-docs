import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Hamburger from '../../Components/Hamburger';
import Navigation from '../../Components/Navigation';

const menuItems = [
	{ path: '/get-started', name: 'Get Started', left: 24, width: 85 },
	{ path: '/usage', name: 'Usage', left: 128, width: 50 },
	{ path: '/docs', name: 'Documentation', left: 195, width: 115 },
	{ path: '/try-online', name: 'Try Online', left: 330, width: 75 }
];

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { siteConfig } = useDocusaurusContext();
  const { items } = siteConfig.themeConfig.navbar;

  console.log(items);

	const handleToggle = (e) => {
		if (!toggle) return;
		setToggle(!toggle);
	};

	return (
		<header className="m-header">
			<div className="m-menu m-container">
				<div className="m-menu__section--first m-row">
					<Link to="/">
						<h1 className="m-logo" onClick={handleToggle}>
							MCDatepicker
						</h1>
					</Link>
					<Hamburger openned={toggle} onClickHandler={() => setToggle(!toggle)} />
				</div>
				<Navigation navItems={menuItems} toggle={toggle} toggleHandler={handleToggle} />
			</div>
		</header>
	);
};

export default Navbar;
