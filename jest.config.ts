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
	collectCoverageFrom: ['components/**/*.js', '!components/**/*.stories.js'],
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
