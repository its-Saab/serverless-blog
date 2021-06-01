//npm packages
import { Row, Col } from "react-bootstrap";
//project files
import { PageWrapper } from "components/PageWrapper";
import { getAllBlogs, getBlogBySlug } from "lib/api";
import { BlogContent } from "components/BlogContent";
import BlogHeader from "components/BlogHeader";

//with slugs export default function is required
export default function BlogDetails({ blog }) {
	return (
		<PageWrapper className="blog-detail-page">
			<Row>
				<Col md={{ span: 10, offset: 1 }}>
					<BlogHeader blog={blog} />
					<hr />
					<BlogContent content={blog.content} />
				</Col>
			</Row>
		</PageWrapper>
	);
}

//dynamic
// export async function getServerSideProps({ params }) {
// 	const blog = await getBlogBySlug(params.slug);
// 	return {
// 		props: { blog },
// 	};
// }

//static
//for static props to work with dynamic routes it needs getStaticPaths
export async function getStaticProps({ params }) {
	const blog = await getBlogBySlug(params.slug);
	return {
		props: { blog },
	};
}

export async function getStaticPaths() {
	const blogs = await getAllBlogs();

	return {
		paths: blogs?.map((blog) => ({ params: { slug: blog.slug } })),
		fallback: false,
	};
}
