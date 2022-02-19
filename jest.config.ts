import nextJest from 'next/jest'

// https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
const createJestConfig = nextJest({ dir: './' })

const config = createJestConfig({
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
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
	moduleDirectories: ['node_modules', '<rootDir>/'],
	resetMocks: true,
	restoreMocks: true
})

export default config
