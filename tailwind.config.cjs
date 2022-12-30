const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			dark: '#12100B',
			current: '#f39041',
                        freshGreen: '#44ac34',
                        darkFuchsia: '#993399'

		},
		extend: {}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
