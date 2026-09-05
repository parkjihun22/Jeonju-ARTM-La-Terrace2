import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "KTX 전주역을 가까이 누리는<br />편리한 교통환경",
    contentText:
      "KTX 전주역을 가까이 이용할 수 있는 입지<br />전주 주요 생활권으로 편리하게 이어지는 교통환경",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 주거환경",
    contentText:
      "전주 도심의 다양한 생활 인프라를 누리는 입지<br />일상의 편리함을 더하는 우아동 생활권",
  },
  {
    img: section2Image3,
    titleText: "인후공원·도당산을 가까이<br />쾌적한 자연환경",
    contentText:
      "인후공원과 도당산을 가까이 누리는 주거환경<br />도심의 편리함과 자연의 여유를 함께 누리는 생활",
  },
  {
    img: section2Image4,
    titleText: "전용 84㎡ 중심의<br />차별화된 주거공간",
    contentText:
      "아파트 전용 84㎡ A·B·C·D 타입으로 구성<br />다양한 라이프스타일을 고려한 주거공간",
  },
  {
    img: section2Image5,
    titleText: "아파트 300세대·오피스텔 22실<br />전주 아르티엠 라 테라스",
    contentText:
      "아파트 300세대와 오피스텔 22실로 구성된 주상복합<br />전주에서 만나는 새로운 주거가치를 제안합니다.",
  },
  {
    img: section2Image6,
    titleText: "일상의 가치를 높이는<br />커뮤니티 라이프",
    contentText:
      "입주민의 여유로운 일상을 고려한 커뮤니티 공간<br />생활의 편리함과 주거 가치를 더하는 단지",
  },
];


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
  {/* 페이지별 메타 */}
  <title>전주 아르티엠 라 테라스 | 입지환경</title>

<meta
 name="description"
 content="전주 아르티엠 라 테라스 입지환경 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 교통환경과 생활 인프라, 자연환경 등 주요 입지정보를 확인하세요."
/>

<meta
 name="keywords"
 content="전주 아르티엠 라 테라스 입지환경, 전주 아르티엠 라 테라스, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주역 아파트, 전주 주상복합, 전주 교통환경, 전주 생활인프라"
/>

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.delidilly.co.kr/LocationEnvironment/intro"
  />

{/* Open Graph */} <meta property="og:type" content="website" /> <meta property="og:site_name" content="전주 아르티엠 라 테라스" />

<meta
 property="og:title"
 content="전주 아르티엠 라 테라스 | 입지환경"
/>

<meta
 property="og:description"
 content="전주 아르티엠 라 테라스의 교통환경과 생활 인프라, 자연환경 등 주요 입지정보를 확인하세요."
/>

<meta
 property="og:url"
 content="https://www.delidilly.co.kr/LocationEnvironment/intro"
/>

<meta
 property="og:image"
 content="https://www.delidilly.co.kr/img/og/location.jpg"
/>

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

{/* Twitter */} <meta name="twitter:card" content="summary_large_image" />

<meta
 name="twitter:title"
 content="전주 아르티엠 라 테라스 | 입지환경"
/>

<meta
 name="twitter:description"
 content="전주 아르티엠 라 테라스의 교통환경과 생활 인프라, 자연환경을 확인하세요."
/>

<meta
 name="twitter:image"
 content="https://www.delidilly.co.kr/img/og/location.jpg"
/>

<meta
 name="twitter:url"
 content="https://www.delidilly.co.kr/LocationEnvironment/intro"
/>

{/* JSON-LD */}

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",

      "name": "전주 아르티엠 라 테라스 - 입지환경",

      "url": "https://www.delidilly.co.kr/LocationEnvironment/intro",

      "description":
        "전주 아르티엠 라 테라스 입지환경 페이지입니다. KTX 전주역을 비롯한 교통환경과 생활 인프라, 자연환경 등 주요 입지정보를 안내합니다.",

      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.delidilly.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },

      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "홈",
            "item": "https://www.delidilly.co.kr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "입지환경",
            "item": "https://www.delidilly.co.kr/LocationEnvironment/intro"
          }
        ]
      }
    })}
  </script>

</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 입지환경
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 입지환경 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  KTX 전주역을 비롯한 교통환경과 생활 인프라,
  자연환경 등 주요 입지정보를 확인하실 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>KTX 전주역 생활권을 가까이 누리는 편리한 입지</div>
  <div>생활과 자연, 교통이 어우러진 쾌적한 주거환경</div>
  <div>전주 아르티엠 라 테라스가 새로운 주거가치를 제안합니다.</div>
</div>

<img
src={page1}
className={styles.image2}
alt="전주 아르티엠 라 테라스 입지환경 및 생활 인프라 안내 이미지"
/>



      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 전주 아르티엠 라 테라스사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
