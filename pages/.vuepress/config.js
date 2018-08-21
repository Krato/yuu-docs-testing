module.exports = {
	title: 'Vuepress Theme Yuu',
	description: 'A VuePress theme that supports multiple color themes and some other useful features.',
	themeConfig: {
		algolia: {
			// apiKey: '4079057a463910010648434b4a9e0c5c',
			// indexName: 'Yuu Testing',
		},
		repo: 'danktuary/vuepress-theme-yuu',
		editLinks: true,
		sidebarDepth: 3,
		nav: [
			{
				text: 'Dropdown menu',
				items: [
					{ text: 'Home', link: '/' },
					{
						text: 'Stuff',
						items: [
							{ text: 'More text', link: '/more-text.md' },
							{ text: 'More text', link: '/more-text.md' },
							{ text: 'More text', link: '/more-text.md' },
						],
					},
					{ text: 'Markdown', link: '/markdown.md' },
				],
			},
			{ text: 'Main guide', link: '/' },
			{ text: 'Commando', link: '/more-text.md' },
			{ text: 'Red', link: '/markdown.md' },
			{ text: 'External', link: 'https://google.com' },
		],
		sidebar: [
			{
				title: 'Home',
				collapsable: false,
				children: [
					'/',
				],
			},
			{
				title: 'Home 2',
				collapsable: false,
				children: [
					'more-text',
				],
			},
			{
				title: 'Home 3',
				children: [
					'custom-themes',
					'markdown',
				],
			},
		],
	},
};
