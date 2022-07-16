module.exports = {
	rootDir: '../..',
	resetModules: true,
	restoreMocks: true,
	clearMocks: true,
	resetMocks: true,
	maxWorkers: 1,
	globalSetup: '<rootDir>/test/integration/globalSetup.ts',
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: [
		'<rootDir>/test/integration/**/*.test.ts',
		'<rootDir>/src/**/*.itest.ts',
	],
	moduleFileExtensions: ['ts', 'js', 'json'],
	modulePathIgnorePatterns: ['<rootDir>/app/'],
	verbose: true,
	modulePaths: ['<rootDir>'],

	coverageDirectory: 'coverage/integration',
	coverageReporters: ['text', 'json', 'lcov', 'clover'],
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/**/*.test.ts',
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/migrations/',
		'/examples/',
		'/dist/',
		'/coverage/',
		'/client/',
	],
};