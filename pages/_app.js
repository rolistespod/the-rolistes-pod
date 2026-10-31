import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import RouteChangeTracker from "../tracking/RouteChangeTracker";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <RouteChangeTracker />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
