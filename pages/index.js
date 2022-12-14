// tutorial source:  https://www.youtube.com/watch?v=vIxGDq1SPZQ
// github source: https://github.com/safak/youtube/tree/next-pizza-ui

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
      <Footer />
    </div>
  );
}
