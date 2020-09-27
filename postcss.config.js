require("postcss-nested");
require("postcss-preset-env");
require("postcss-import");

module.exports = {
	plugins: {
		"postcss-nested": {},
		"postcss-import": {},
		"postcss-preset-env": {
			autoprefixer: true
		}
	}
};
