// tutorial source:  https://www.youtube.com/watch?v=vIxGDq1SPZQ
// github source: https://github.com/safak/youtube/tree/next-pizza-ui

import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}

// https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose
