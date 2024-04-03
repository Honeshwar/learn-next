"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/meme-bazar.css";
import { useEffect, useState } from "react";
import {
  image_download_count,
  image_share_count,
  upload_count,
} from "../utils/common-functions";
import clsx from "clsx";
import MemeImage from "./swiper Slider/MemeImage";
import dynamic from "next/dynamic";
const LazyMemeImage = dynamic(() => import("./swiper Slider/MemeImage"), {
  ssr: false,
});
const LazyShareModal = dynamic(() => import("./meme bank/ShareModal"), {
  ssr: false,
});
const LazyUploadModal = dynamic(() => import("./meme bank/UploadModal"), {
  ssr: false,
});
const LazyThankYouModal = dynamic(() => import("./meme bank/ThankYouModal"), {
  ssr: false,
});

function MemeBank({ lang = "hi" }: { lang: string }) {
  const [slides, setSlides] = useState(4.7);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openUploadMemeModal, setopenUploadMemeModal] = useState(false);
  const [openThankYouModal, setOpenThankYouModal] = useState(false);

  // const [UPLOAD, setUPLOAD] = useState(false);

  // const [slideChanged, setSlideChanged] = useState(false);
  const [generateLink, setGenerateLink] = useState(false);
  useEffect(() => {
    if (window.screen.width <= 640) {
      setSlides(1.7);
    }
  }, []);
  const images = [
    {
      src: "/assets/meme-bazar/1.webp",
      "data-url": "memes/1.jpg",
    },
    {
      src: "/assets/meme-bazar/2.webp",
      "data-url": "memes/2.jpg",
    },
    {
      src: "/assets/meme-bazar/3.webp",
      "data-url": "memes/3.jpg",
    },
    {
      src: "/assets/meme-bazar/4.webp",
      "data-url": "memes/4.jpg",
    },
    {
      src: "/assets/meme-bazar/5.webp",
      "data-url": "memes/5.jpg",
    },
    {
      src: "/assets/meme-bazar/6.webp",
      "data-url": "memes/6.jpg",
    },
    {
      src: "/assets/meme-bazar/7.webp",
      "data-url": "memes/7.jpg",
    },
    {
      src: "/assets/meme-bazar/8.webp",
      "data-url": "memes/8.jpg",
    },
    {
      src: "/assets/meme-bazar/9.webp",
      "data-url": "memes/9.jpg",
    },
    {
      src: "/assets/meme-bazar/10.webp",
      "data-url": "memes/10.jpg",
    },
    {
      src: "/assets/meme-bazar/11.webp",
      "data-url": "memes/11.jpg",
    },
    {
      src: "/assets/meme-bazar/12.webp",
      "data-url": "memes/12.png",
    },
    {
      src: "/assets/meme-bazar/13.webp",
      "data-url": "memes/13.png",
    },
    {
      src: "/assets/meme-bazar/14.webp",
      "data-url": "memes/14.png",
    },
    {
      src: "/assets/meme-bazar/15.webp",
      "data-url": "memes/15.png",
    },
    // "/assets/meme-bazar/16.webp",
  ];
  const downloadMeme = () => {
    const imgElement = document.querySelector(
      ".meme-bazar-swiper .swiper-slide-active > img"
    ) as HTMLImageElement;

    console.log("download meme image url", imgElement, imgElement.src);

    // Creating a anchor element
    const anchor = document.createElement("a");

    // Setting the download attribute with a desired filename
    anchor.download = "meme-image.jpg";

    // Creating a data URL from the image source
    const imageUrl = imgElement.src;
    anchor.href = imageUrl;
    anchor.click();

    image_download_count();
  };

  return (
    <>
      <section
        id="meme-bazar"
        className="w-full h-fit py-5 bg-[#fec81d] "
        style={{
          backgroundImage: "url('/assets/meme-bazar/Bg.webp')",
        }}
      >
        <div className="flex flex-col gap-5 text-white  sm:py-4 px-5">
          <h2 className="flex flex-col items-center">
            <span
              className={clsx(
                "tracking-wider text-center text-[7vw] sm:text-[3vw] text-[red] ",
                {
                  "font-yatra": lang === "hi",
                  "font-dangerous": lang === "en",
                }
              )}
            >
              {lang === "hi" ? "मीम बैंक" : "Meme Bank"}
            </span>
            <div className="w-16 sm:w-32 h-[3px] bg-[blue]"></div>
          </h2>
        </div>

        {/* <!-- our meme slider --> */}
        <div
          id="meme-bazar"
          className="w-full h-full relative flex justify-center items-center overflow-hidden mt-2 pt-5 pb-10 md:pb-[50px]"
        >
          {/* <!-- Swiper --> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slides}
            loop={true}
            // autoplay={{
            //   delay: 1000,
            // }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".meme-bazar-swiper .swiper-button-next",
              prevEl: ".meme-bazar-swiper .swiper-button-prev",
              disabledClass: "hidden",
            }}
            className="meme-bazar-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <LazyMemeImage
                  image={image}
                  // setSlideChanged={setSlideChanged}
                  // slideChanged={slideChanged}
                  // generateShareLinks={generateShareLinks}
                />
                {/* <!-- arrow -->  due to dynamic import(asynx import) swiper navigation not work, can not find buttons in dom when i put this button inside lazyMemeImage component */}
                <div
                  // onClick={() => setSlideChanged(true)}
                  className="swiper-button-next meme-bazar-button-next"
                >
                  <Image
                    width={50}
                    height={50}
                    className="z-[2] w-full h-full object-contain"
                    src="/assets/meme-bazar/Navigator Left.webp"
                    alt="navigation left"
                  />
                </div>
                <div
                  // onClick={() => setSlideChanged(true)}
                  className="swiper-button-prev meme-bazar-button-prev"
                >
                  <Image
                    width={50}
                    height={50}
                    className="z-[2] w-full h-full object-contain"
                    src="/assets/meme-bazar/Navigator Right.webp"
                    alt="avigation right"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-5 items-center mb-5">
          <div className="flex gap-5 flex-wrap justify-center">
            <a
              onClick={downloadMeme}
              download="meme"
              className={clsx(
                "w-[150px] bg-[rgb(255,0,0)] py-1  flex justify-center items-center rounded-md text-white font-bold cursor-pointer ",
                {
                  "font-yatra text-[1.2rem] px-0 gap-3": lang === "hi",
                  "px-4 gap-2": lang === "en",
                }
              )}
            >
              {/* <span className="material-symbols-outlined"> download </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff"
                width={15}
                height={15}
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <span>{lang === "hi" ? "डाउनलोड करें" : "Download"}</span>
            </a>
            <a
              onClick={() => {
                // generateShareLinks();
                setGenerateLink(true);
                setOpenShareModal(true);
              }}
              className={clsx(
                "w-[120px] bg-[rgb(255,0,0)] p-1  flex justify-center items-center  rounded-md text-white font-bold cursor-pointer ",
                {
                  "font-yatra text-[1.2rem] px-0 gap-3": lang === "hi",
                  "px-4 gap-2": lang === "en",
                }
              )}
            >
              {/* <span className="material-symbols-outlined"> share </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
                width={20}
                height={20}
              >
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
              </svg>
              <span>{lang === "hi" ? "शेयर करें" : "Share"}</span>
            </a>
          </div>
          <button
            onClick={() => setopenUploadMemeModal(true)}
            type="button"
            className="w-[230px] sm:w-fit  px-5 py-[6px] sm:px-5  sm:py-2 bg-blue-950 text-yellow-500 flex items-center gap-2 font-bold rounded-md cursor-pointer"
          >
            <span
              className={clsx("text-center leading-5 ", {
                "font-yatra text-[1.2rem] pt-1": lang === "hi",
                "py-1": lang === "en",
              })}
            >
              {lang === "hi"
                ? "अपने मीम्स अपलोड करें और उसे प्रदर्शित करवाए"
                : "Upload Your Memes and Get it Featured"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              width={30}
              height={30}
            >
              <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
            {/* <span className="material-symbols-outlined text-white"> upload </span> */}
          </button>
        </div>
      </section>

      {openShareModal && (
        <>
          {/* <!-- Share modal --> */}
          <LazyShareModal
            {...{
              lang,
              generateLink,
              setGenerateLink,
              setOpenShareModal,
            }}
          />
        </>
      )}

      {openUploadMemeModal && (
        <>
          {/* <!-- Upload Meme modal --> */}
          <LazyUploadModal
            {...{ lang, setopenUploadMemeModal, setOpenThankYouModal }}
          />
        </>
      )}
      {openThankYouModal && (
        <>
          {/* <!-- Upload Meme Thank-you pop --> */}
          <LazyThankYouModal {...{ lang, setOpenThankYouModal }} />
        </>
      )}
    </>
  );
}

export default MemeBank;
