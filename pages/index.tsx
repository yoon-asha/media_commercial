import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import Carousel from "./Carousel"

export default function Home() {
  const [qrvalue, setQrvalue] = useState("Default")
  // https://velog.io/@pjj186/Next.js%EC%97%90%EC%84%9C-Embla-Carousel-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-Carousel-Slider-%EB%A7%8C%EB%93%A4%EA%B8%B0
  // 요기 있는 걸루 캐로셀로 광고 구현!!!!

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
