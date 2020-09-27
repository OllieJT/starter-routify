import { createRollupConfigs } from "./scripts/base.config.js";

const sveltePreprocess = require("svelte-preprocess");

const production = !process.env.ROLLUP_WATCH;

export const config = {
	staticDir: "static",
	distDir: "dist",
	buildDir: `dist/build`,
	serve: !production,
	production,
	rollupWrapper: (rollup) => rollup,
	svelteWrapper: (svelte) => {
		svelte.preprocess = sveltePreprocess({
			sourceMap: true
		});
		return svelte;
	},
	swWrapper: (worker) => worker
};

const configs = createRollupConfigs(config);

export default configs;

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
