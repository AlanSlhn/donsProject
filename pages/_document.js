import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,400&display=swap" rel="stylesheet"></link>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
