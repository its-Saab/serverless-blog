//npm packages
import { Card } from "react-bootstrap";
import Link from 'next/link'
//project files

export const CardListItem = ({
	blog: { title, subtitle, coverImage, date, author, slug },
}) => {
	return (
		<Card className={`fj-card fj-card-list`}>
			<div className="card-body-wrapper">
				<Card.Header className="d-flex flex-row">
					<img
						src={author?.avatar}
						className="rounded-circle mr-3"
						height="50px"
						width="50px"
						alt="avatar"
					/>
					<div>
						<Card.Title className="font-weight-bold mb-1">
						{author.name}
						</Card.Title>
						<Card.Text className="card-date">{date}</Card.Text>
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title className="card-main-title">{title}</Card.Title>
					<Card.Text>{subtitle}</Card.Text>
				</Card.Body>
			</div>
			<Link href="/blogs/[slug]" as={`/blogs/${slug}`} >
			<a  className="card-button">
				Read More
			</a>

			</Link>
		</Card>
	);
};
