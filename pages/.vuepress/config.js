module.exports = {
	title: 'Vuepress Theme Yuu',
	description: 'A VuePress theme that supports multiple color themes and some other useful features.',
	theme: 'yuu',
	themeConfig: {
		repo: 'danktuary/yuu-docs-testing',
		docsDir: 'pages',
		editLinks: true,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Dropdown menu',
				items: [
					{
						text: 'Home',
						link: '/',
					},
					{
						text: 'Stuff',
						items: [
							{
								text: 'More text',
								link: '/more-text.md',
							},
						],
					},
					{
						text: 'Markdown',
						link: '/markdown.md',
					},
				],
			},
			{
				text: 'Main guide',
				link: '/',
			},
			{
				text: 'External link',
				link: 'https://i.imgur.com/uphwMrZ.jpg',
			},
		],
		sidebar: [
			{
				title: 'Home',
				collapsable: false,
				children: ['/'],
			},
			{
				title: 'Markdown stuff',
				collapsable: false,
				children: [
					'more-text',
					'markdown',
					'markdown-vuepress',
					'markdown-it',
				],
			},
			{
				title: 'Misc pages',
				children: [
					'custom-themes',
					'default-theme-config',
				],
			},
		],
	},
};
