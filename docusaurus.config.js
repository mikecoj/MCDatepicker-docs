/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MCDatepicker',
  tagline: 'Highly customizable Vanilla JS Datepicker with zero dependencies',
  url: 'https://mcdatepicker.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Mike Cojocari', // Usually your GitHub org/user name.
  projectName: 'MCDatepicker', // Usually your repo name.

	themeConfig: {
		navbar: {
			title: 'MCDatepicker',
			// logo: {
			//   alt: 'MCDatepicker Logo',
			//   src: 'img/logo192.png',
			// },
			items: [
				{ to: '/get-started', label: 'Get Started', position: 'right' },
				// {to: '/usage', label: 'Usage', position: 'right'},
				{ to: '/usage', label: 'Usage', position: 'right' },
				{
					to: '/docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right'
				},
				// {to: '/try-online', label: 'Try Online', position: 'right'},
				{
					href: 'https://github.com/mikecoj/MCDatepicker',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		// footer: {
		//   style: 'dark',
		//   links: [
		//     {
		//       title: 'Pages',
		//       items: [
		//         {
		//           label: 'Home',
		//           to: '/',
		//         },
		//         {
		//           label: 'Get Started',
		//           to: 'get-started',
		//         },
		//         {
		//           label: 'Usage',
		//           to: 'Usage',
		//         },
		//         {
		//           label: 'Docs',
		//           to: 'docs',
		//         },
		//         {
		//           label: 'Try Online',
		//           to: 'try-online',
		//         },
		//       ],
		//     },
		//     {
		//       title: 'Learn',
		//       items: [
		//         {
		//           label: 'Introduction',
		//           to: 'docs/',
		//         },
		//         {
		//           label: 'Instalation',
		//           to: 'docs/instalation',
		//         },
		//         {
		//           label: 'Configuration',
		//           to: 'docs/configuration',
		//         }
		//       ],
		//     },
		//     {
		//       title: 'More',
		//       items: [
		//         {
		//           label: 'GitHub',
		//           href: 'https://github.com/mikecoj/MCDatepicker',
		//         },
		//       ],
		//     },
		//   ],
		//   copyright: `Copyright © ${new Date().getFullYear()} Mike Cojocari.`,
		// },
		colorMode: {
			disableSwitch: true
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/mikecoj/MCDatepicker-docs/tree/main/'
				},
				theme: {
					customCss: require.resolve('./src/assets/scss/index.scss')
				}
			}
		]
	],
	plugins: ['docusaurus-plugin-sass']
};
