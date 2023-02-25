import { Html, Head, Main, NextScript } from 'next/document'
import {MetaTags} from "@/components/functional/MetaTags/MetaTags";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
