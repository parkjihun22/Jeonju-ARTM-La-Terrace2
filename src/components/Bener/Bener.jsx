import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="전주 아르티엠 라 테라스 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '전주 아르티엠 라 테라스'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주에서 만나는 차별화된 테라스 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          여유로운 공간과 쾌적한 주거환경을 담은 전주 아르티엠 라 테라스.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상의 품격을 높이는 새로운 주거 가치를 만나보세요.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주에서 누리는 여유롭고 차별화된 주거공간.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공간의 가치를 높인 설계와 쾌적한 주거환경을 제공합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상의 편안함과 품격을 함께 고려한 새로운 주거 선택.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 아르티엠 라 테라스
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주의 생활 인프라를 가까이 누리는 편리한 주거환경.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          테라스 주거의 여유와 차별화된 공간 가치를 함께 누려보세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          여유로운 공간 구성과 쾌적한 주거환경을 담은 전주 아르티엠 라 테라스.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          차별화된 설계로 일상의 편안함과 품격을 높였습니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전주 아르티엠 라 테라스, 새로운 라이프스타일의 시작.
        </div>
      </>
    );
  }
};
