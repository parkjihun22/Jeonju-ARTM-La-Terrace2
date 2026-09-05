import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    // { title: "84A㎡", key: "84A㎡" },
    // { title: "84C㎡", key: "84C㎡" },
    // { title: "101㎡", key: "101㎡" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    // "84A㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84a.html",
    // "84C㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84c.html",
    // "101㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/101.html",  
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };


  const [selectedType, setSelectedType] = useState("84A㎡");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 핵심 SEO 페이지: E모델하우스 */}
  <title>전주 아르티엠 라 테라스 | E모델하우스</title>

<meta
 name="description"
 content="전주 아르티엠 라 테라스 E모델하우스 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 세대 평면과 실내 구조, 공간 구성을 온라인으로 확인하세요."
/>

<meta
 name="keywords"
 content="전주 아르티엠 라 테라스 E모델하우스, 전주 아르티엠 라 테라스 모델하우스, 전주 아르티엠 라 테라스 평면도, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합"
/>

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.delidilly.co.kr/FloorPlan/Emodel"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="전주 아르티엠 라 테라스" />
  <meta property="og:title" content="전주 아르티엠 라 테라스 | E모델하우스" />
  <meta
    property="og:description"
    content="전주 아르티엠 라 테라스 E모델하우스에서 세대 평면과 실내 공간 구성을 온라인으로 확인하세요."
  />
  <meta property="og:url" content="https://www.delidilly.co.kr/FloorPlan/Emodel" />
  <meta property="og:image" content="https://www.delidilly.co.kr/img/og/emodel.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="전주 아르티엠 라 테라스 | E모델하우스" />
  <meta
    name="twitter:description"
    content="전주 아르티엠 라 테라스 E모델하우스로 세대 평면과 실내 공간 구성을 확인하세요."
  />
  <meta name="twitter:image" content="https://www.delidilly.co.kr/img/og/emodel.jpg" />
  <meta name="twitter:url" content="https://www.delidilly.co.kr/FloorPlan/Emodel" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "전주 아르티엠 라 테라스 - E모델하우스",
      "url": "https://www.delidilly.co.kr/FloorPlan/Emodel",
      "description":
        "전주 아르티엠 라 테라스 E모델하우스 페이지입니다. 세대 평면, 실내 구조와 공간 구성을 온라인으로 확인할 수 있습니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.delidilly.co.kr/img/og/emodel.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.delidilly.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "E모델하우스", "item": "https://www.delidilly.co.kr/FloorPlan/Emodel" }
        ]
      }
    })}
  </script>

</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="E모델하우스" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - E모델하우스
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 E모델하우스 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  세대 평면과 실내 구조, 공간 구성을 온라인으로 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>전주 아르티엠 라 테라스 주거 공간을 온라인으로 확인</div>
  <div>차별화된 공간 구성을 E모델하우스에서 살펴보세요.</div>
</div>


      <Header isChanged={isScroll} />
      <FixIcon />

      <h1 className={styles.screenReaderOnly}>전주 아르티엠 라 테라스- E모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
