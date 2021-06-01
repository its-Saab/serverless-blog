//npm packages
import highlight from "highlight.js";
import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
//project files

export const HighlightCode = ({ children, language }) => {
	const code = createRef();

	useEffect(() => {
		highlight.highlightBlock(findDOMNode(code.current));
	}, []);

	return (
		<pre>
			<code className={language} ref={code}>
				{children}
			</code>
		</pre>
	);
};
