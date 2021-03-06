const config = {
	transform: {
		'^.+\\.(j|t)sx?$': 'babel-jest'
	},
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'api-client/**/*.ts',
		'components/**/*.{ts, tsx}',
		'!components/**/*.stories.{ts, tsx}',
		'ducks/**/*.ts',
		'providers/**/*.{ts, tsx}'
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
	restoreMocks: true
}

export default config
