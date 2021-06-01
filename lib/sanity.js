import sanityClient from "@sanity/client";

const options = {
	dataset: process.env.SANITY_DATASET_NAME,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	//if useCdn true it will get faster response because its getting the cashed data
	//if useCdn false it will be a bit slower but actual data
};

export default sanityClient(options);
