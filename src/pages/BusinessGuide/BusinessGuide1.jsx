import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [

  { label: '사업명', value: '전주 아르티엠 라 테라스' },
  { label: '대지위치', value: '전북특별자치도 전주시 덕진구 우아동3가 752-41번지 일원' },
  { label: '사업규모', value: '지하 1층 ~ 지상 29층, 총 4개동' },
  { label: '세대수', value: '아파트 300세대 · 오피스텔 22실' },
  { label: '주택형', value: '전용 84㎡ A · B · C · D' },
  { label: '대지면적', value: '11,308.60㎡' },
  { label: '연면적', value: '57,457.5855㎡' },
  { label: '건축면적', value: '5,267.4309㎡' },

];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>

<Helmet>

<title>전주 아르티엠 라 테라스 | 사업안내</title>

<meta
name="description"
content="전주 아르티엠 라 테라스 사업안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 사업개요와 입지환경, 주거가치를 확인하세요."
/>

<meta
name="keywords"
content="전주 아르티엠 라 테라스, 아르티엠 라 테라스, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합, 전주 신축 아파트, 전주 아르티엠 라 테라스 사업안내"
/>

<meta name="robots" content="index,follow" />

<link
  rel="canonical"
  href="https://www.delidilly.co.kr/BusinessGuide/intro"
/>

<meta property="og:type" content="website" />
<meta property="og:site_name" content="전주 아르티엠 라 테라스" />

<meta
property="og:title"
content="전주 아르티엠 라 테라스 | 사업안내"
/>

<meta
property="og:description"
content="전주 아르티엠 라 테라스의 사업개요와 입지환경, 아파트 300세대와 오피스텔 22실 규모의 주거가치를 확인하세요."
/>

<meta
property="og:url"
content="https://www.delidilly.co.kr/BusinessGuide/intro"
/>

<meta
property="og:image"
content="https://www.delidilly.co.kr/img/og/business.jpg"
/>

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />

<meta
name="twitter:title"
content="전주 아르티엠 라 테라스 | 사업안내"
/>

<meta
name="twitter:description"
content="전주 아르티엠 라 테라스의 사업개요와 입지환경, 차별화된 주거가치를 확인하세요."
/>

<meta
name="twitter:image"
content="https://www.delidilly.co.kr/img/og/business.jpg"
/>

<script type="application/ld+json">
{JSON.stringify({
"@context":"https://schema.org",
"@type":"WebPage",

"name":"전주 아르티엠 라 테라스 사업안내",

"url":"https://www.delidilly.co.kr/BusinessGuide/intro",

"description":"전주 아르티엠 라 테라스의 사업개요와 입지환경, 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지 정보를 제공합니다.",

"primaryImageOfPage":{
"@type":"ImageObject",
"contentUrl":"https://www.delidilly.co.kr/img/og/business.jpg",
"width":1200,
"height":630
},

"breadcrumb":{
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"홈",
"item":"https://www.delidilly.co.kr/"
},
{
"@type":"ListItem",
"position":2,
"name":"사업안내",
"item":"https://www.delidilly.co.kr/BusinessGuide/intro"
}
]
}

})}
</script>

</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스는 전북특별자치도 전주시 덕진구 우아동3가
  752-41번지 일원에 조성되는 주상복합 단지입니다.
  아파트 300세대와 오피스텔 22실로 구성되며,
  전주 생활권의 편리한 주거환경과 차별화된 공간 가치를 제공합니다.
  본 페이지에서는 전주 아르티엠 라 테라스의 사업개요와
  주요 단지 정보를 확인하실 수 있습니다.
</p>


<div className={styles.textBox}>
  <div>전주 도심에서 누리는 차별화된 주거가치</div>
  <div>전주 아르티엠 라 테라스, 새로운 주거 가치를 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="전주 아르티엠 라 테라스 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
