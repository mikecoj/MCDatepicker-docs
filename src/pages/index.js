import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import DownloadButton from '../Components/DownloadButton';
import CalendarPic from '../assets/images/calendar_demo.png';
import ViewButton from '../Components/ViewButton';

const Home = () => {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
			<main className="home flex-center page">
				<section className="m-hero m-container">
					<div className="m-hero__text">
						<h1>MCDatepicker.js</h1>
						<h3>Highly customizable Vanilla JS Datepicker with zero dependencies.</h3>
						<p>
							Pick a date with Vanilla JavaScript! MCDatepicker It's a beautiful calendar component, that looks great eather on desctop or mobile devices. It
							has no dependencies and it's highly customizable! Just add the options you need and boom, you're ready to go!!
						</p>
						<div>
							<DownloadButton />
							<ViewButton />
						</div>
					</div>
					<img className="m-hero__img" src={CalendarPic} alt="Calendar Demo"></img>
				</section>
			</main>
		</Layout>
	);
};

export default Home;
