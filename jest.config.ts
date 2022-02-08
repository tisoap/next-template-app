const config = {
	testEnvironment: 'jsdom',
	transform: {
		// https://github.com/facebook/jest/issues/1468#issuecomment-361260279
		'^.+\\.(j|t)sx?$': '<rootDir>/jestPreprocess.js'
	},
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'components/**/*.presentation.tsx',
		'components/**/*.container.tsx'
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	moduleDirectories: ['node_modules', __dirname],
	resetMocks: true,
	restoreMocks: true,
	globals: {
		'babel-jest': {
			babelrcFile: '.storybook/.babelrc'
		}
	}
}

export default config
