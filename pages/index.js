import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luca Gandini Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.leftHeader}></div>
          <div className={styles.circle}></div>
          <div className={styles.intro}><h1>Welcome to the jungle</h1></div>
          <div className={styles.name}><h1>Alvaro Morata</h1></div>
          <div className={styles.rightHeader}></div>
        </header>
      </main>
    </div>
  )
}
