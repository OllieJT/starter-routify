const autoPreprocess = require('svelte-preprocess')
const postcssImport = require('postcss-import')

module.exports = {
	preprocess: autoPreprocess({
        postcss: {
			plugins: [postcssImport(),require('autoprefixer')]
		},
		defaults: { style: 'postcss' },

		scss: {
			includePaths: ['src'],
		},
	}),
}
