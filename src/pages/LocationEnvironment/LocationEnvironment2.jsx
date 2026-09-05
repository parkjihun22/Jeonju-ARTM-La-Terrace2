import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>전주 아르티엠 라 테라스 | 프리미엄</title>

<meta
 name="description"
 content="전주 아르티엠 라 테라스 프리미엄 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 전주역 생활권과 생활 인프라, 자연환경, 차별화된 주거가치를 확인하세요."
/>

<meta
 name="keywords"
 content="전주 아르티엠 라 테라스 프리미엄, 전주 아르티엠 라 테라스, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주역 아파트, 전주 주상복합, 전주 아르티엠 라 테라스 입지"
/>

  <link
    rel="canonical"
    href="https://www.delidilly.co.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스만의 프리미엄을 확인하세요.
  전북특별자치도 전주시 덕진구 우아동3가에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  KTX 전주역을 비롯한 교통환경과 생활 인프라,
  자연환경과 차별화된 주거가치를 함께 누릴 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>전주역 생활권과 함께 누리는 차별화된 주거가치</div>
  <div>전주 아르티엠 라 테라스의 특별한 라이프를 만나보세요.</div>
</div>

<img
src={page1}
className={styles.image3}
alt="전주 아르티엠 라 테라스 프리미엄 및 입지환경 안내 이미지"
/>


      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
