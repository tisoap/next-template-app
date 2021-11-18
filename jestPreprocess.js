/* eslint-disable @typescript-eslint/no-var-requires */

const babelOptions = {
	presets: ['@babel/preset-typescript', 'next/babel']
}

// https://github.com/facebook/jest/issues/11444#issuecomment-847909076
module.exports = require('babel-jest').default.createTransformer(babelOptions)
