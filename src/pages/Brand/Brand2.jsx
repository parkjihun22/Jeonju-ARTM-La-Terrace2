import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		// { title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  <title>전주 아르티엠 라 테라스 | 홍보영상</title>

  <meta
    name="description"
    content="전주 아르티엠 라 테라스 홍보영상 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 브랜드 가치와 주거 프리미엄을 영상으로 만나보세요."
  />

  <meta
    name="keywords"
    content="전주 아르티엠 라 테라스, 아르티엠 라 테라스 홍보영상, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합, 전주 신축 아파트, 전주 아르티엠 라 테라스 모델하우스"
  />

  <link
    rel="canonical"
    href="실제도메인/Brand/video"
  />

  <meta name="robots" content="index,follow" />

  {/* OG */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="전주 아르티엠 라 테라스" />

  <meta
    property="og:title"
    content="전주 아르티엠 라 테라스 | 홍보영상"
  />

  <meta
    property="og:description"
    content="전주 아르티엠 라 테라스의 브랜드 가치와 차별화된 주거공간을 홍보영상으로 확인해보세요."
  />

  <meta
    property="og:url"
    content="실제도메인/Brand/video"
  />

  <meta
    property="og:image"
    content="실제도메인/images/og/main.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="전주 아르티엠 라 테라스 | 홍보영상"
  />

  <meta
    name="twitter:description"
    content="전주 아르티엠 라 테라스의 브랜드 가치와 차별화된 주거공간을 영상으로 만나보세요."
  />

  <meta
    name="twitter:image"
    content="실제도메인/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 - 홍보영상
</h1>

<p className={styles.screenReaderOnly}>
  전주 아르티엠 라 테라스 홍보영상 페이지입니다.
  전북특별자치도 전주시 덕진구 우아동3가 752-41번지 일원에 조성되는
  아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로,
  브랜드 가치와 주거공간, 생활환경 및 다양한 특장점을
  영상으로 확인하실 수 있습니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>전주에서 만나는 차별화된 주거 라이프</div>
  <div>전주 아르티엠 라 테라스의 특별한 가치를 영상으로 만나보세요.</div>
</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="9z8_2qPGqqs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
