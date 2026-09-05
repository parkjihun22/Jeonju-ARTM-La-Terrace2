// src/pages/Promotion/Customer.jsx

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import styles from "./Promotion.module.scss";

import Header from "../../components/Header/Header";
import FixIcon from "../../components/FixIcon/FixIcon";
import Bener from "../../components/Bener/Bener";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";

export default function Customer() {
  const { pathname } = useLocation();

  // 페이지 이동 시 스크롤 최상단
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 폼 상태
  const [form, setForm] = useState({
    name: "",
    phone: "",
    birth: "",
    message: "",
  });

  // 전송 상태
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  // 입력값 변경
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 전송
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setResultMessage("");

    try {
      const res = await fetch("https://www.delidilly.co.kr/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          birth: form.birth,
          message: form.message,
        }),
      });

      if (res.ok) {
        setResultMessage(
          "✅ 등록이 완료되었습니다. 곧 전문상담원이 연락드리도록 하겠습니다."
        );

        // 폼 초기화
        setForm({
          name: "",
          phone: "",
          birth: "",
          message: "",
        });
      } else {
        setResultMessage(
          "❌ 등록에 실패했습니다. 다시 시도해주세요."
        );
      }
    } catch (err) {
      console.error("방문예약등록 오류:", err);

      setResultMessage(
        "⚠️ 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const promoMenu = [
    {
      key: "newsletter",
      title: "언론보도",
      url: "/Promotion/Press",
    },
    {
      key: "interest",
      title: "방문예약등록",
      url: "/Promotion/Customer",
    },
  ];

  return (
    <>
      <Helmet>
        {/* 페이지별 메타 */}
        <title>
          전주 아르티엠 라 테라스 | 관심고객등록
        </title>

        <meta
          name="description"
          content="전주 아르티엠 라 테라스 관심고객등록 안내. 전북특별자치도 전주시 덕진구 우아동3가에 조성되는 아파트 300세대와 오피스텔 22실 규모의 주상복합 단지로, 공급일정과 모집공고, 계약일정 및 주요 분양 정보를 확인하세요."
        />

        <meta
          name="keywords"
          content="전주 아르티엠 라 테라스 관심고객등록, 전주 아르티엠 라 테라스, 전주 아르티엠 라 테라스 모집공고, 전주 아르티엠 라 테라스 공급일정, 전주 아르티엠 라 테라스 계약일정, 전주 아파트, 전주 덕진구 아파트, 전주 우아동 아파트, 우아동3가 아파트, 전주 주상복합"
        />

        <meta
          name="robots"
          content="index,follow"
        />

        <link
          rel="canonical"
          href="https://www.delidilly.co.kr/Promotion/Customer"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="전주 아르티엠 라 테라스"
        />

        <meta
          property="og:title"
          content="전주 아르티엠 라 테라스 | 관심고객등록"
        />

        <meta
          property="og:description"
          content="전주 아르티엠 라 테라스 관심고객등록을 통해 공급일정, 모집공고, 계약일정 등 주요 분양 정보를 확인하세요."
        />

        <meta
          property="og:url"
          content="https://www.delidilly.co.kr/Promotion/Customer"
        />

        <meta
          property="og:image"
          content="https://www.delidilly.co.kr/img/og/customer.jpg"
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="전주 아르티엠 라 테라스 | 관심고객등록"
        />

        <meta
          name="twitter:description"
          content="전주 아르티엠 라 테라스 관심고객등록을 통해 공급일정과 주요 분양 정보를 확인하세요."
        />

        <meta
          name="twitter:image"
          content="https://www.delidilly.co.kr/img/og/customer.jpg"
        />

        <meta
          name="twitter:url"
          content="https://www.delidilly.co.kr/Promotion/Customer"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",

            name:
              "전주 아르티엠 라 테라스 - 관심고객등록",

            url:
              "https://www.delidilly.co.kr/Promotion/Customer",

            description:
              "전주 아르티엠 라 테라스 관심고객등록 페이지입니다. 공급일정, 모집공고, 계약일정 및 주요 분양 정보를 안내합니다.",

            primaryImageOfPage: {
              "@type": "ImageObject",

              contentUrl:
                "https://www.delidilly.co.kr/img/og/customer.jpg",

              width: 1200,
              height: 630,
            },

            breadcrumb: {
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "홈",
                  item:
                    "https://www.delidilly.co.kr/",
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  name: "관심고객등록",
                  item:
                    "https://www.delidilly.co.kr/Promotion/Customer",
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      <FixIcon />

      {/* 배너 */}
      <Bener title="전주 아르티엠 라 테라스" />

      {/* 네비게이션 탭 */}
      <MenuBar contents={promoMenu} />

      {/* 좌·우 카드 레이아웃 */}
      <div className={styles.customerWrap}>

        {/* 좌측 카드 */}
        <div className={styles.customerLeft}>

          <div className={styles.textBlock}>

            <h2 className={styles.projectName}>
              전주 아르티엠 라 테라스
            </h2>

            <h3 className={styles.pageTitle}>
              방문예약등록
            </h3>

          </div>

          <img
            src="/img/sample1.jpg"
            alt="전주 아르티엠 라 테라스 방문예약등록"
            className={styles.mainImage}
          />

          <div className={styles.serviceSection}>

            <span className={styles.serviceBadge}>
              CUSTOMER SERVICE
            </span>

            <h4 className={styles.serviceTitle}>
              방문예약등록
            </h4>

            <p className={styles.serviceDesc}>
              문의사항을 남겨주시면 빠르게
              답변드리겠습니다.
              <br />
              방문예약등록 시 주요 분양 소식을
              안내받으실 수 있습니다.
            </p>

            <div
              className={styles.serviceLine}
            ></div>

          </div>

          <div className={styles.custInfo}>

            <div className={styles.custItem}>

              <i className="icon-phone" />

              <div className={styles.infoText}>
                <strong>대표번호</strong>
                <span>1533-8848</span>
              </div>

            </div>

            <div className={styles.custItem}>

              <i className="icon-clock" />

              <div className={styles.infoText}>
                <strong>상담시간</strong>
                <span>24시간 상담</span>
              </div>

            </div>

          </div>

        </div>

        {/* 우측 카드 */}
        <div className={styles.customerRight}>

          {/* 전송 결과 메시지 */}
          {resultMessage && (
            <div className={styles.submitResult}>
              {resultMessage}
            </div>
          )}

          <form
            className={styles.custForm}
            onSubmit={handleSubmit}
          >

            {/* 고객명 */}
            <label className={styles.fieldLabel}>
              고객명
              <span
                className={styles.required}
              ></span>
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="고객명"
              autoComplete="name"
              required
            />

            {/* 연락처 */}
            <label className={styles.fieldLabel}>
              연락처
              <span
                className={styles.required}
              ></span>
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
              autoComplete="tel"
              required
            />

            {/* 생년월일 */}
            <label className={styles.fieldLabel}>
              생년월일
              <span
                className={styles.required}
              ></span>
            </label>

            <input
              type="text"
              name="birth"
              value={form.birth}
              onChange={handleChange}
              placeholder="950527"
              inputMode="numeric"
              maxLength={6}
              required
            />

            {/* 문의 내용 */}
            <label className={styles.fieldLabel}>
              문의 내용
              <span
                className={styles.required}
              ></span>
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="문의 내용"
            />

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "등록 중..."
                : "등록하기"}
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
}