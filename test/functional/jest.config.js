module.exports = {
	rootDir: '../..',
	resetModules: true,
	resetMocks: true,
	collectCoverage: false,
	testMatch: ['<rootDir>/test/functional/**/*.test.js'],
	modulePaths: ['<rootDir>'],
	maxWorkers: 1,
	globalSetup: '<rootDir>/test/functional/globalSetup.js',
};