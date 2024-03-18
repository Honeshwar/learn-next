"use client";
// import Image from "next/legacy/image";//layout property can use
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../styles/media-coverage.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import clsx from "clsx";

function MediaCoverage({
  title = "मीडिया कवरेज",
  lang = "hi",
}: {
  title: string;
  lang: string;
}) {
  const articles = [
    {
      href: "https://indianexpress.com/article/political-pulse/india-alliance-sp-vs-congress-8991266/",
      imgSrcHindi: "/assets/media coverage/hindi/1.webp",
      imgSrcEnglish: "/assets/media coverage/en/1.webp",
    },
    {
      href: "https://timesofindia.indiatimes.com/city/delhi/congress-disowns-netas-statement-after-aap-threatens-to-exit-india/articleshow/102783368.cms",
      imgSrcHindi: "/assets/media coverage/hindi/2.webp",
      imgSrcEnglish: "/assets/media coverage/en/2.webp",
    },
    {
      href: "https://www.youtube.com/watch?v=8KwbsXzc2ww",
      imgSrcHindi: "/assets/media coverage/hindi/3.webp",
      imgSrcEnglish: "/assets/media coverage/en/3.webp",
    },
    {
      href: "https://www.youtube.com/watch?v=-n16_RrxB18",
      imgSrcHindi: "/assets/media coverage/hindi/4.webp",
      imgSrcEnglish: "/assets/media coverage/en/4.webp",
    },
    {
      href: "https://www.indiatoday.in/india/story/sanjay-singh-3rd-aap-leader-arrested-5-points-on-charges-against-them-2444581-2023-10-04",
      imgSrcHindi: "/assets/media coverage/hindi/5.webp",
      imgSrcEnglish: "/assets/media coverage/en/5.webp",
    },
    {
      href: "https://economictimes.indiatimes.com/news/politics-and-nation/cash-seizure-in-tax-raids-shows-how-congress-has-kept-tradition-of-corruption-alive-bjp/articleshow/105865699.cms?from=mdr",
      imgSrcHindi: "/assets/media coverage/hindi/6.webp",
      imgSrcEnglish: "/assets/media coverage/en/6.webp",
    },
    {
      href: "https://www.thehindu.com/news/cities/Madurai/one-third-of-dmk-ministers-face-corruption-charges-annamalai/article67304128.ece",
      imgSrcHindi: "/assets/media coverage/en/7.webp",
      imgSrcEnglish: "/assets/media coverage/en/1.webp",
    },
    {
      href: "https://www.ndtv.com/india-news/uttar-pradesh-ed-arrests-sp-politician-in-ponzi-linked-money-laundering-case-4235825",
      imgSrcHindi: "/assets/media coverage/hindi/8.webp",
      imgSrcEnglish: "/assets/media coverage/en/8.webp",
    },
    {
      href: "https://zeenews.india.com/tamil-nadu/will-support-it-if-southern-states-want-to-break-away-from-india-dmk-leader-mk-stalin-2090888.html",
      imgSrcHindi: "/assets/media coverage/hindi/9.webp",
      imgSrcEnglish: "/assets/media coverage/en/9.webp",
    },
    {
      href: "https://www.livemint.com/politics/news/bjp-winning-elections-in-gaumutra-states-dmk-mps-comments-dnv-senthilkumar-s-bjp-says-take-mental-treatment-11701779541455.html",
      imgSrcHindi: "/assets/media coverage/hindi/10.webp",
      imgSrcEnglish: "/assets/media coverage/en/10.webp",
    },
    {
      href: "https://sanatanprabhat.org/english/73633.html",
      imgSrcHindi: "/assets/media coverage/hindi/11.webp",
      imgSrcEnglish: "/assets/media coverage/en/11.webp",
    },
  ];

  const [slides, setSlides] = useState(3.7);
  const [space, setSpace] = useState(100);

  useEffect(() => {
    if (window.screen.width <= 640) {
      setSlides(1.5);
      setSpace(70); //due to batching mutiple setstate call single render convert
    }
  }, []);

  return (
    <>
      <section
        id="media-coverage"
        className="w-full h-fit pt-5 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/media coverage/Bg.webp')" }}
      >
        <div className="flex flex-col gap-5 text-white py-3 sm:py-4 px-5">
          <div className="flex flex-col items-center">
            <span
              className={clsx(
                "tracking-wider text-white text-center text-[7vw] sm:text-[3vw]",
                {
                  "font-yatra": lang === "hi",
                  "font-dangerous": lang === "en",
                }
              )}
            >
              {title}
            </span>
            <div className="w-16 sm:w-24 h-[2px] sm:h-[3px] bg-yellow-600"></div>
          </div>
        </div>
        <div
          id="media-coverage-slider"
          className="w-full relative flex justify-center items-center overflow-hidden"
        >
          {/* <!-- Swiper --> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slides}
            spaceBetween={space}
            loop={true}
            autoplay={{
              delay: 10000,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation={{
              nextEl: ".media-coverage-swiper .swiper-button-next",
              prevEl: ".media-coverage-swiper .swiper-button-prev",
              disabledClass: "hidden",
            }}
            className="media-coverage-swiper"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index} className="w-full h-full ">
                {/* <div className="w-full h-full swiper-slide flex justify-center border"> */}
                <a
                  href={article.href}
                  target="_blank"
                  className="w-full h-full"
                >
                  <Image
                    width={400}
                    height={300}
                    className="w-full h-full"
                    src={
                      lang === "hi"
                        ? article.imgSrcHindi
                        : article.imgSrcEnglish
                    }
                    alt="media coverage article"
                  />
                </a>
                {/* <!-- arrow --> */}
                <div className="swiper-button-next media-coverage-button-next">
                  <Image
                    width={50}
                    height={50}
                    className="opacity-50 z-[2] w-full h-full object-contain"
                    src="/assets/media coverage/Navigator Left.webp"
                    alt="navigation left"
                  />
                </div>
                <div className="swiper-button-prev media-coverage-button-prev">
                  <Image
                    width={100}
                    height={50}
                    className="opacity-50 z-[2] w-full h-full  object-contain"
                    src="/assets/media coverage/Navigator Right.webp"
                    alt="avigation right"
                  />
                </div>
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Footer lang={lang} />
      </section>
    </>
  );
}

export default MediaCoverage;
