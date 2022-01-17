const path = require('path')

module.exports = {
	core: {
		builder: 'webpack5'
	},
	stories: ['../components/**/*.stories.tsx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
	typescript: {
		check: true,
	},
	webpackFinal: async (config) => {
		// Enable absolute path imports
		config.resolve.modules.push(path.resolve(__dirname, '../'))
		return config
	}
}
