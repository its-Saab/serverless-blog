//npm packages
import { Container } from "react-bootstrap";
import Head from "next/head";
//project files
import { BlogNavbar } from "./BlogNavbar";
import { Footer } from "./Footer";

export const PageWrapper = ({ children, className }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Container>
				<BlogNavbar />
				<div className={`page-wrapper ${className}`}>{children}</div>
				<Footer />
			</Container>
		</>
	);
};
