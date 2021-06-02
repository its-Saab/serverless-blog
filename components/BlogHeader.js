//npm packages
import moment from "moment";
//project files
import { urlFor } from "lib/api";

export default function BlogHeader({
	blog: { title, subtitle, coverImage, date, author },
}) {
	return (
		<div className="blog-detail-header">
			<p className="lead mb-0">
				<img
					src={author?.avatar}
					className="rounded-circle mr-3"
					height="50px"
					width="50px"
					alt="avatar"
				/>
				{author?.name}
				{", "} {moment(date).format('LL')}
			</p>
			<h1 className="font-weight-bold blog-detail-header-title mb-0">
				{title}
			</h1>
			<h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
			{/* Check if contains cover image */}
			<img
				className="img-fluid rounded"
				src={urlFor(coverImage).height(600).url()}
				alt="TODO: provide alt"
			/>
		</div>
	);
}
