//npm packages
import { useSWRInfinite } from "swr";

//project files
import { getBlogs } from "actions/Fetcher";

export const useGetBlogsPages = ({ filteredView: filter }) => {
	const result = useSWRInfinite((index, previousPageData) => {
		if (index === 0) {
			return `/api/blogs?date=${filter.date.asc ? "asc" : "desc"}`;
		}

		if (!previousPageData.length) {
			return null;
		}

		return `/api/blogs?offset=${index * 3}&date=${
			filter.date.asc ? "asc" : "desc"
		}`;
	}, getBlogs,
	);

	let hitEnd = false;
	const { data } = result;

	if (data) {
		hitEnd = data?.[data.length - 1].length === 0;
	}

	return { ...result, hitEnd };
};
