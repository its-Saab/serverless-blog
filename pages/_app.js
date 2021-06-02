//npm packages
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons";
//styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/arta.css";
import "styles/index.scss";

config.autoAddCss = false;
library.add(faList, faBorderAll);

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
