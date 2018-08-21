module.exports = {
	title: 'Vuepress Theme Yuu',
	description: 'A VuePress theme that supports multiple color themes and some other useful features.',
	themeConfig: {
		// algolia: {
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>',
		// },
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
