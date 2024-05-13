export default {
	server: {
		port: 8080,
	},

	// Default language
	language: "ko",

	// Debug
	debug: "disabled",

	// LOGS
	logger: {
		path: {
			debug_log: "./logs/debug.log",
			error_log: "./logs/errors.log",
		},
		language: "ko",
		colors: true,
		debug: "enabled",
		info: "enabled",
		warning: "enabled",
		error: "enabled",
		sponsor: "enabled",
		write: false,
		type: "log",
	},

	info: {
		github_url: 'https://github.com/uknowpro/simple-poe-trade',
	},
};
