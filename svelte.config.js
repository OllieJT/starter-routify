const autoPreprocess = require('svelte-preprocess')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

module.exports = {
	preprocess: autoPreprocess({
        postcss: {
			plugins: [postcssImport(),autoprefixer()]
		},
		defaults: { style: 'postcss' },

		scss: {
			includePaths: ['src'],
		},
	}),
}
