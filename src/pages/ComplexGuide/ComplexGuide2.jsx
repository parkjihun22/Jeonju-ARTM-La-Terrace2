import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";




const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
  <title>전주 아르티엠 라 테라스 | 동·호수 배치</title>

<meta
 name="description"
 content="전주 아르티엠 라 테라스 동·호수 배치도 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 동별 배치와 호수별 세대 위치를 확인하세요."
/>

<meta
 name="keywords"
 content="전주 아르티엠 라 테라스 동호수배치, 전주 아르티엠 라 테라스 배치도, 전주 아르티엠 라 테라스 세대배치, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합"
/>

  <link
    rel="canonical"
    href="https://www.delidilly.co.kr/ComplexGuide/detailintro"
  />

  <meta name="robots" content="index,follow" />

{/* Open Graph */} <meta property="og:type" content="website" /> <meta property="og:site_name" content="전주 아르티엠 라 테라스" />

<meta
 property="og:title"
 content="전주 아르티엠 라 테라스 | 동·호수 배치"
/>

<meta
 property="og:description"
 content="전주 아르티엠 라 테라스 동·호수 배치도와 동별 구성, 호수별 세대 위치를 확인하세요."
/>

<meta
 property="og:url"
 content="https://www.delidilly.co.kr/ComplexGuide/detailintro"
/>

<meta
 property="og:image"
 content="https://www.delidilly.co.kr/img/og/complex.jpg"
/> </Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="단지안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 동·호수 배치
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 동·호수 배치 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  동별 구성과 호수별 세대 위치 등
  주요 배치 정보를 확인하고 원하는 세대 위치를 비교할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>차별화된 공간 구성을 담은 주거 설계</div>
  <div>전주 아르티엠 라 테라스 동·호수 배치를 확인하세요.</div>
</div>

<img
className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
src={page1}
alt="전주 아르티엠 라 테라스 동호수 배치도 및 세대 위치 안내"
onLoad={handleImageLoad}
/>


      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
