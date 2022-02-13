module.exports = {
	parserOptions: {
		project: ['./tsconfig.json']
	},
	plugins: ['prettier', '@next/next', 'testcafe', 'storybook'],
	extends: [
		'@tisoap/eslint-config-ts-react',
		'plugin:prettier/recommended',
		'plugin:@next/next/recommended',
		'plugin:testcafe/recommended',
		'plugin:storybook/recommended'
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }]
	}
}
