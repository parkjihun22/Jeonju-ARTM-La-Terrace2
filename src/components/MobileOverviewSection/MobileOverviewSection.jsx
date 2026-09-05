// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>전주시 우아동3가 752-41번지 일원 주상복합 신축공사</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            전북특별자치도 전주시 덕진구 우아동3가 752-41번지 외 27필지
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            4개동, 지상 29층
          </span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>
            총 322세대(아파트 300세대, 오피스텔 22실)
          </span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>11,308.60㎡</span>
        </li>
        <li>
          <strong>연면적</strong>
          <span>57,457.5855㎡</span>
        </li>
        <li>
          <strong>건축면적</strong>
          <span>5,250.4543㎡</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="전주 아르티엠 라 테라스 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="전주 아르티엠 라 테라스 생활권 안내 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            전주의 생활 인프라와 차별화된 주거가치를 누리는<br />
            전주 아르티엠 라 테라스 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "전주 도심에서 누리는 편리한 생활",
      desc:
        "전주의 다양한 생활 인프라를 가까이 누리는 입지<br/>일상에 필요한 편의시설을 편리하게 이용하는 생활환경<br/>도심의 편리함을 담은 전주 아르티엠 라 테라스",
    },
    {
      img: slide2,
      title: "차별화된 공간 설계",
      desc:
        "다양한 라이프스타일을 고려한 주거공간<br/>공간의 활용도와 실용성을 높인 설계<br/>전주 아르티엠 라 테라스가 제안하는 새로운 주거생활",
    },
    {
      img: slide3,
      title: "편리한 교통환경",
      desc:
        "전주 도심 곳곳으로 편리하게 이동할 수 있는 교통환경<br/>주요 생활권과의 접근성을 고려한 입지<br/>더욱 편리한 일상을 위한 교통 프리미엄",
    },
    {
      img: slide4,
      title: "생활 인프라를 가까이 누리는 주거환경",
      desc:
        "쇼핑·문화·생활시설을 편리하게 이용하는 생활권<br/>일상에 필요한 다양한 인프라를 가까이 누리는 입지<br/>편리한 생활을 완성하는 전주 아르티엠 라 테라스",
    },
    {
      img: slide5,
      title: "아파트 300세대·오피스텔 22실",
      desc:
        "아파트 300세대와 오피스텔 22실로 구성<br/>주거와 생활의 편리함을 함께 고려한 공간 구성<br/>차별화된 주거 가치를 제안하는 전주 아르티엠 라 테라스",
    },
    {
      img: slide6,
      title: "전주 아르티엠 라 테라스",
      desc:
        "전주에서 만나는 새로운 주거공간<br/>생활의 편리함과 공간의 가치를 함께 고려한 주거환경<br/>일상의 새로운 기준을 제안하는 전주 아르티엠 라 테라스",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
