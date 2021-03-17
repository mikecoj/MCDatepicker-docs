import React from 'react';
import Layout from '@theme/Layout';
import TabItem from '@theme/TabItem';
import SyntaxHighlighter from 'react-syntax-highlighter';


const installation = `<head>
<!-- ... -->
<link  href="https://cdn.jsdelivr.net/gh/mikecoj/MCDatepicker@0.1.0/dist/mc-calendar.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/mikecoj/MCDatepicker@0.1.0/dist/mc-calendar.min.js"></script>
<!-- Javascript Files -->
</head>`;

const GetStarted = () => {
	return (
		<Layout title={'Get Started'}>
		<main className="get-started flex-center page">
			<section className="primary-content m-container">
				<div className="primary-content__block">
					<h1>CDN Links</h1>
					<p>
						Using hosted files is probably the easiest way to get started using CMDatepicker.js, you simply need to include the following links in your page.
					</p>
					
					{/* <Codeblock lang="html" code={installation} /> */}
					<SyntaxHighlighter language="xml" useInlineStyles={false}>
						{installation}
					</SyntaxHighlighter>
				</div>
				<div className="primary-content__block">
					<h1>Download and Use</h1>
					<p>Manage dependencies by "directly downloading" them and placing them into your source code.</p>
				</div>
			</section>
		</main>
		</Layout>
	);
};

export default GetStarted;