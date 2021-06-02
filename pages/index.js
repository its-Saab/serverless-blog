//npm packages
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
//project files
import { PageWrapper } from "components/PageWrapper";
import { AuthorIntro } from "components/AuthorIntro";
import { getPaginatedBlogs } from "lib/api";
import { MenuFilter } from "components/MenuFilter";
import { useGetBlogsPages } from "actions/Pagination";
import { BlogsList } from "components/BlogsList";

export default function Home({ blogs }) {
	const [filteredView, setFilteredView] = useState({
		view: { list: 0 },
		date: { asc: 0 },
	});

	const { data, size, setSize, hitEnd } = useGetBlogsPages({ filteredView });
console.log(data)
	return (
		<PageWrapper>
			<AuthorIntro />
			<MenuFilter
				filter={filteredView}
				onChange={(option, value) => {
					return setFilteredView({ ...filteredView, [option]: value });
				}}
			/>
			<hr />
			<Row className="mb-5">
				<BlogsList data={data || [blogs]} filter={filteredView} />
			</Row>
			<div style={{ textAlign: "center" }}>
				<Button
					onClick={() => setSize(size + 1)}
					disabled={hitEnd}
					size="lg"
					variant="outline-secondary"
				>
					{/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'} */}
					Load More
				</Button>
			</div>
		</PageWrapper>
	);
}

//Static Page
//Faster, can be cached using CDN
//Created at build Time
//When we making the request we are always getting the same html page
//This function is called during build time
//Provides props to your page
//it will create a static page
export async function getStaticProps() {
	const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
	return {
		props: {
			blogs,
		},
	};
}

//Dynamic Page
//little bit slower, the time depends on the data being fetched.
//Created at request time(basically a new request from server)
// export async function getServerSideProps() {
// 	const blogs = await getAllBlogs();
// 	return {
// 		props: {
// 			blogs,
// 		},
// 	};
// }
