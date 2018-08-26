module.exports = {
	title: 'Vuepress Theme Yuu',
	description: 'A VuePress theme that supports multiple color themes and some other useful features.',
	theme: 'yuu',
	themeConfig: {
		yuu: {
			colorThemes: ['blue', 'red'],
		},
		repo: 'danktuary/yuu-docs-testing',
		docsDir: 'pages',
		editLinks: true,
		sidebarDepth: 3,
		lastUpdated: true,
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Main Guide',
				link: '/more-text',
			},
			{
				text: 'Commando',
				link: '/commando/',
			},
			{
				text: 'Red',
				link: '/red/',
			},
			{
				text: 'External link',
				link: 'https://i.imgur.com/uphwMrZ.jpg',
			},
		],
		sidebar: {
			'/commando/': [
				'',
				'more-content',
				'final-content',
			],
			'/red/': [
				'',
				'more-content',
				'final-content',
			],
			'/': [
				{
					title: 'Home',
					collapsable: false,
					children: ['/', 'custom/'],
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
	},
};
