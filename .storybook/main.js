const path = require('path')

module.exports = {
	core: {
		builder: 'webpack5'
	},
	stories: ['../components/**/*.stories.tsx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	typescript: {
		check: true,
	},
	features: {
		emotionAlias: false,
	},
	refs: {
		// Official Chakra UI page does not support Storybook Composition
		// https://chakra-ui.netlify.app/
		// https://github.com/chakra-ui/chakra-ui/issues/2263
		'@chakra-ui/react': { disable: true },
	},
	webpackFinal: async (config) => {
		// Enable absolute path imports
		config.resolve.modules.push(path.resolve(__dirname, '../'))

		return config
	}
}
