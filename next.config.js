//to expose keys to client for the imageBuilder
module.exports = {
	env: {
		SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
		SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
	},
};
