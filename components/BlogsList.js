//npm packages
import { Col } from "react-bootstrap";

//project files
import { CardListItem } from "components/CardListItem";
import { CardItem } from "components/CardItem";

export const BlogsList = ({ data = [], filter }) => {
	return data.map((page) =>
		page.map((blog) =>
			filter.view.list ? (
				<Col key={`${blog.slug}-list`} md="9">
					<CardListItem blog={blog} />
				</Col>
			) : (
				<Col key={blog.slug} lg="4" md="6">
					<CardItem blog={blog} />
				</Col>
			)
		)
	);
};
