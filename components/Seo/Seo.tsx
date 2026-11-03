import Head from "next/head";

const SITE_URL = "https://rolistespod.com";
const SITE_NAME = "The Rolistes Podcast";
const DEFAULT_IMAGE = "/images/rollinKunzArt/Banner.jpg";

type SeoProps = {
  title: string;
  description: string;
  // Address of the page on this site, e.g. "/podcast"
  path?: string | null;
  image?: string | null;
  type?: "website" | "article";
};

const toAbsoluteURL = (url: string) =>
  new URL(url, SITE_URL).href.replace(/^http:\/\//, "https://");

const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
}: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
    <meta property="og:type" content={type} key="og:type" />
    <meta property="og:title" content={title} key="og:title" />
    <meta
      property="og:description"
      content={description}
      key="og:description"
    />
    <meta
      property="og:image"
      content={toAbsoluteURL(image || DEFAULT_IMAGE)}
      key="og:image"
    />
    {path && (
      <meta property="og:url" content={toAbsoluteURL(path)} key="og:url" />
    )}
    {path && (
      <link rel="canonical" href={toAbsoluteURL(path)} key="canonical" />
    )}
    <meta
      name="twitter:card"
      content="summary_large_image"
      key="twitter:card"
    />
  </Head>
);

export default Seo;
