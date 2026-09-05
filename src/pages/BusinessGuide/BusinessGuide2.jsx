import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      // { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>전주 아르티엠 라 테라스 | 분양일정 안내</title>

<meta
 name="description"
 content="전주 아르티엠 라 테라스 분양일정 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 분양일정과 모집공고, 계약일정 등 주요 정보를 확인하세요."
/>

<meta
 name="keywords"
 content="전주 아르티엠 라 테라스 분양일정, 전주 아르티엠 라 테라스 모집공고, 전주 아파트 분양, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합, 전주 아르티엠 라 테라스 계약일정"
/>

  <link
    rel="canonical"
    href="https://www.delidilly.co.kr/BusinessGuide/plan"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 분양일정
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 분양일정 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  모집공고와 분양일정, 계약일정 및 관련 정보를 확인하실 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>전주에서 만나는 차별화된 주거가치</div>
  <div>전주 아르티엠 라 테라스 분양일정을 확인하세요.</div>
</div>


<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="전주 아르티엠 라 테라스 분양일정 및 모집공고 안내"
/>

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;
