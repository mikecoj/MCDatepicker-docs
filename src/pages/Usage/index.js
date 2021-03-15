import React from 'react';
import Layout from '@theme/Layout';


const Usage = () => {
	return (
  		<Layout title={'Usage'}>
			<main className="usage flex-center page">
				<section className="usage__content container">
					<div className="usage__text">
						<h1>Usage</h1>
						<p>Create a new calendar instance using the following method:</p>
					</div>
					<div className="usage__block row">
						<div className="col">
							{/* {<SyntaxHighlighter language="xml" useInlineStyles={false}>
								{htmlCode}
							</SyntaxHighlighter>} */}
						</div>
						<div className="col">
							{/* {<SyntaxHighlighter language="javascript" useInlineStyles={false}>
								{jsCode}
							</SyntaxHighlighter>} */}
						</div>
					</div>
				</section>
			</main>
    </Layout>
	);
};

export default Usage;