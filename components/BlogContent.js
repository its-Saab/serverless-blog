//npm packages
import BlockContent from "@sanity/block-content-to-react";
//project files
import { HighlightCode } from "components/HighlightCode";
import { urlFor } from "lib/api";
//to enable BlockContent to consume code blocks:
const serializers = {
	types: {
		code: ({ node: { language, code, filename } }) => {
			return (
				<HighlightCode language={language}>
					{code}
					<div className="code-filename">{filename}</div>
				</HighlightCode>
			);
		},
		image: ({ node: { asset, alt, imagePosition = "center" } }) => {

			return (
				<div className={`blog-image blog-image-${imagePosition}`}>
					<img src={urlFor(asset.url).height(300).fit("max").url()} />
					<div className="image-alt">{alt}</div>
				</div>
			);
		},
	},
};

export const BlogContent = ({ content }) => {
	return <BlockContent serializers={serializers} blocks={content} />;
};
