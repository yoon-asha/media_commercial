import Head from "next/head"
import styles from "../styles/Home.module.css"
import Carousel from "./Carousel"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FOCUS MEDIA KOREA</title>
        <meta name="description" content="포커스 미디어 코리아 제출용 과제" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>포커스 미디어 코리아</h1>
        <Carousel
          slides={<></>}
          options={{
            align: "start",
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0.7,
          }}
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create by 윤다미
        </a>
      </footer>
    </div>
  )
}
