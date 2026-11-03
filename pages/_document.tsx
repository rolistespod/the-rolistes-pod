import { Head, Html, Main, NextScript } from "next/document";

// HTML shell of every page, rendered once at build time. The language lets
// screen readers pronounce the content correctly and helps search engines.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
