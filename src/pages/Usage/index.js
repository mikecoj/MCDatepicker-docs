import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '@theme/Layout';

const htmlCode = `<!-- HTML -->
<div class="form-field">
  <label class="form-field__label">Datepicker Demo</label>
  <input id="datepicker" type="text">
</div>`;

const jsCode = `/* javascript */
const datePicker = MCDatepicker.create({
  el: '#datepicker',
  bodyType: 'modal'
});`;

const Usage = () => {
	return (
		<Layout title={'Usage'}>
			<main className="usage flex-center page">
				<section className="usage__content m-container">
					<div className="usage__text">
						<h1>Usage</h1>
						<p>Create a new calendar instance using the following method:</p>
					</div>
					<div className="usage__block m-row">
						<div className="m-col">
							<SyntaxHighlighter language="xml" useInlineStyles={false}>
								{htmlCode}
							</SyntaxHighlighter>
						</div>
						<div className="m-col">
							{
								<SyntaxHighlighter language="javascript" useInlineStyles={false}>
									{jsCode}
								</SyntaxHighlighter>
							}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default Usage;
