import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greg Points</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gregpoints.com">gregpoints.com</a>!
        </h1>

        <p className={styles.description}>
          Where dream meets reality.
        </p>

        <div className={styles.grid}>
          <a
            href="https://app.gregpoints.com"
            className={styles.card}
          >
            <h3>Dashboard &rarr;</h3>
            <p>Track, manage and use your very own GP - all online.</p>
          </a>
    
          <a href="https://docs.gregpoints.com" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about GP features and API.</p>
          </a>

          <a href="https://crypto.gregpoints.com" className={styles.card}>
            <h3>Crypto &rarr;</h3>
            <p>Get the app to start mining.</p>
          </a>

          <a
            href="https://events.gregpoints.com"
            className={styles.card}
          >
            <h3>Events &rarr;</h3>
            <p>
              Explore the keynotes and information about GP.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://gregpoints.com/"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/gregpoints.svg" alt="Greg Points Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
