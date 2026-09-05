import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      // { title: "브랜드 소개", url: "/brand/intro" }, 
      { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>전주 아르티엠 라 테라스 | 브랜드 소개</title>

  <meta
    name="description"
    content="전주 아르티엠 라 테라스 브랜드 소개. 전북특별자치도 전주시 덕진구 우아동3가에 들어서는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 차별화된 주거공간과 브랜드 가치를 소개합니다."
  />

  <meta
    name="keywords"
    content="전주 아르티엠 라 테라스, 아르티엠 라 테라스, 전주 아르티엠, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합, 전주 신축 아파트"
  />

  <link
    rel="canonical"
    href="실제도메인/Brand/intro"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="전주 아르티엠 라 테라스" />

  <meta
    property="og:title"
    content="전주 아르티엠 라 테라스 | 브랜드 소개"
  />

  <meta
    property="og:description"
    content="전주 아르티엠 라 테라스의 브랜드 가치와 아파트 300세대·오피스텔 22실 규모의 차별화된 주거공간을 소개합니다."
  />

  <meta
    property="og:url"
    content="실제도메인/Brand/intro"
  />

  <meta
    property="og:image"
    content="실제도메인/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 브랜드 소개 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가 752-41번지 일원에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  차별화된 공간 설계와 편리한 생활환경, 브랜드 가치를 소개합니다.
  전주 아르티엠 라 테라스는 새로운 주거공간과 쾌적한 일상을 제안합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>전주 도심에서 누리는 새로운 주거가치</div>
  <div>전주 아르티엠 라 테라스, 차별화된 라이프스타일</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="전주 아르티엠 라 테라스 브랜드 소개 이미지"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
