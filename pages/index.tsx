import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cesar Cañón</title>
        <meta name="description" content="website for pianist cesar canon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cesar Cañón
        </h1>
        <p>Pianist, Conductor, and Opera Coach</p>
      </main>
    </div>
  );
};

export default Home;
