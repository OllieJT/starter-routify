const sveltePreprocess = require("svelte-preprocess");

module.exports = {
	dev: true,
	preprocess: sveltePreprocess({
		sourceMap: true
	})
};
