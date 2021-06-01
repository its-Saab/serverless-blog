//npm packages
import { Row, Col } from "react-bootstrap";
//project files
import { PageWrapper } from "components/PageWrapper";
import { AuthorIntro } from "components/AuthorIntro";
import { CardListItem } from "components/CardListItem";
import { CardItem } from "components/CardItem";
import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
	let blogItem = blogs.map((blog) => {
		return (
			<Col md="4" key={blog.slug}>
				<CardItem blog={blog} />;
			</Col>
		);
	});

	return (
		<PageWrapper>
			<AuthorIntro />
			<hr />
			{JSON.stringify(blogs)}
			<Row className="mb-5">
				{/* <Col md="10">
					<CardListItem />
				</Col> */}

				{blogItem}
			</Row>
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
	const blogs = await getAllBlogs();
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
