// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/Layout";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
