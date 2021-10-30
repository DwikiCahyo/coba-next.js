import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coba Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Coba Next</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/posts/first-post">
              <h3>Postingan Pertama</h3>
            </Link>
            <p>
              Merupakan Halaman pertama yang dibuat
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}