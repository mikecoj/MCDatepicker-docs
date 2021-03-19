import React from 'react';
import Layout from '@theme/Layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import DownloadButton from '../../Components/DownloadButton';

const installation = `<head>
<!-- ... -->
<link href="https://cdn.jsdelivr.net/npm/mc-datepicker/dist/mc-calendar.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/mc-datepicker/dist/mc-calendar.min.js"></script>
<!-- Javascript Files -->
</head>`;

const GetStarted = () => {
	return (
		<Layout title={'Get Started'}>
			<main className="get-started flex-center page">
				<section className="primary-content m-container">
					<div className="primary-content__block">
						<h1>Install via NPM</h1>
						<p>Install NPM module using npm CLI</p>
						<SyntaxHighlighter language="xml" useInlineStyles={false}>
							{`npm install mc-datepicker --save`}
						</SyntaxHighlighter>
					</div>
					<div className="primary-content__block">
						<h1>CDN Links</h1>
						<p>Using hosted files is probably the easiest way to get started using MCDatepicker, you simply need to include the CDN links to your HTML.</p>

						{/* <Codeblock lang="html" code={installation} /> */}
						<SyntaxHighlighter language="xml" useInlineStyles={false}>
							{installation}
						</SyntaxHighlighter>
					</div>
					<div className="primary-content__block">
						<h1>Download and Use</h1>
						<p>Manage dependencies by "directly downloading" them and placing them into your source code.</p>
						<DownloadButton />
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default GetStarted;
