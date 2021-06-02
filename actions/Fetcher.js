//npm packages
import useSWR from "swr";

//project files

const Fetcher = (url) => {
	return fetch(url).then((res) => res.json());
};

export const useGetBlogs = ({ offset, filter }, initialData) => {
	return useSWR(
		`
		/api/blogs?offset=${offset || 0}&date=${filter.date.asc ? "asc" : "desc"}`,
		Fetcher,
		{ initialData }
	);
};

export const getBlogs = (url) => {
	return Fetcher(url);
};

// export const useGetBlogs = (initialBlogs) =>
// 	useSWR(`api/blogs`, Fetcher, { initialBlogs });
