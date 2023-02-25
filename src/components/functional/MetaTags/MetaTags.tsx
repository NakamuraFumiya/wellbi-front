import Head from "next/head";

export const MetaTags = () => (
  <Head>
    <title>Wellbi</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="wellbi(ウェルビ)はキャリアチェンジ情報共有プラットフォームです。誰かのために、自分のために、キャリアチェンジのためのロードマップを作りましょう。" />

    {/*ogpの設定*/}
    <meta property="og:title" content="Wellbi" />
    <meta property="og:description" content="wellbi(ウェルビ)はキャリアチェンジ情報共有プラットフォームです。誰かのために、自分のために、キャリアチェンジのためのロードマップを作りましょう。" />
    <meta property="og:site_name" content="Wellbi" />
    <meta property="og:url" content="https://wellbi.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="og:image" content="/images/wellbi-logo-icon.png" />

    {/*Twitterカードの設定*/}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content="/images/wellbi-logo-icon.png" />

    <link rel="canonical" href="https://wellbi.vercel.app/" />
  </Head>
);