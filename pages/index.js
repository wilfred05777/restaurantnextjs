// tutorial source:  https://www.youtube.com/watch?v=vIxGDq1SPZQ
// github source: https://github.com/safak/youtube/tree/next-pizza-ui

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
      {/* <Image src="/img/logo.png" width={500} height={500} alt="logo" /> */}
    </div>
  );
}
