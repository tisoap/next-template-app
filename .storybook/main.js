const path = require('path')

module.exports = {
	stories: ['../components/**/*.stories.js'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	refs: {
		// Oficial Chakra UI page does not support Storybook Composition
		// https://chakra-ui.netlify.app/
		'@chakra-ui/react': { disable: true },
  },
	webpackFinal: async (config) => {
		// Add support for SASS modules
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../')
		})

		// Workaround for chakra-ui 1.x components not loading on StoryBook 6.x
		// Issue: https://github.com/storybookjs/storybook/issues/13114
		config.resolve.alias = {
			...config.resolve.alias,
			'@emotion/core':  path.join(process.cwd(), 'node_modules/@emotion/react'),
			'emotion-theming': path.join(process.cwd(), 'node_modules/@emotion/react'),
		}

		// Enable absolute path imports
		config.resolve.modules.push(path.resolve(__dirname, '../'))

		return config
	}
}
