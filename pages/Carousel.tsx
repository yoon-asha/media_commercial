import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
// import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { QRCodeSVG } from "qrcode.react"
import dummy from "./api/MOCK_DATA.json"
import styles from "../styles/embla.module.css"

type PropType = {
  slides: ReactNode
  options: EmblaOptionsType
}

export const EmblaCarousel = (props: PropType) => {
  const QRlink = "https://media1208.netlify.app/input"
  // const EmblaCarousel = ({ slides, options = { loop: true } }) => {
  // const autoplayRoot = (emblaRoot) => emblaRoot.parentElement
  const { options, slides } = props // props로 가져온 옵션과 슬라이드 리스트
  const autoplay = useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
    // Autoplay({ delay: 3000, stopOnInteraction: false }, autoplayRoot)
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])

  // 현재 선택된 슬라이더의 순서(인덱스)를 저장을 위한 함수
  const onSelect = useCallback(() => {
    if (!emblaApi) return
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {dummy.map((el, idx) => {
            return (
              <>
                <div className={styles.embla__slide} key={idx}>
                  <div className={styles.embla__slide__inner}>
                    <div
                      style={{
                        background: `url("https://source.unsplash.com/collection/${el.id}") center center`,
                        padding: 20,
                      }}
                    >
                      <QRCodeSVG value={QRlink} />
                      <h3
                        style={{
                          color: "#fff",
                          backgroundColor: "rgba(0,0,0,0.7)",
                        }}
                      >
                        광고 {idx + 1}
                        <br />
                        <br />
                        QR코드를 스캔하세요.
                      </h3>
                    </div>
                  </div>
                </div>
                {/* qr을 스캔하면 입력 페이지로 넘어가야한다. */}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
