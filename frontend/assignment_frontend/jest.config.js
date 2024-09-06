module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Use babel-jest for transpiling
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@react-financial-charts|react-financial-charts)/)',  // Ensure react-financial-charts modules are transformed
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock styles
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };
  