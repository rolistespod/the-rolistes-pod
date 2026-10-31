import Script from "next/script";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// Loaded once for the whole site. Client-side navigations are counted by GA4's
// enhanced measurement ("page changes based on browser history events"), so no
// manual page_view is sent on route change, which would double count them.
const GoogleAnalytics = () =>
  GA_ID ? (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  ) : null;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
