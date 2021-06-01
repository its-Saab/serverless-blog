import { Row, Col, Media, Image } from "react-bootstrap";

export const AuthorIntro = () => {
	return (
		<Row>
			<Col md="8">
				{/* AUTHOR INTRO STARTS */}
				<Media className="mb-4 admin-intro">
					<Image
						roundedCircle
						width={64}
						height={64}
						className="mr-3"
						src="https://avatars.githubusercontent.com/u/74562145?v=4"
						alt="Generic placeholder"
					/>
					<Media.Body>
						<h5 className="font-weight-bold mb-0">Hello Friends,</h5>
						<p className="welcome-text">
							My name is Mosaab Abbas and I am a software developer. and this is
							my blog page.
						</p>
					</Media.Body>
				</Media>
				{/* AUTHOR INTRO ENDS */}
			</Col>
		</Row>
	);
};
