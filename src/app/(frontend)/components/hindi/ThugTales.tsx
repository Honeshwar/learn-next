"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "../../styles/thug-tales.css";
import Image from "next/image";

function ThugTales({
  title = "हमारी ठग की कहानियाँ",
  lang = "hindi",
}: {
  title: string;
  lang: string;
}) {
  const videos = [
    {
      src: "/assets/thug tales/videos/r1.mp4",
      poster: "/assets/thug tales/images/Ravana1.webp",
    },
    {
      src: "/assets/thug tales/videos/r2.mp4",
      poster: "/assets/thug tales/images/Ravana2.webp",
    },
    {
      src: "/assets/thug tales/videos/r3.mp4",
      poster: "/assets/thug tales/images/Ravana3.webp",
    },
    {
      src: `/assets/thug tales/videos/${lang}/1.mp4`,
      poster: `/assets/thug tales/images/${lang}/1.webp`,
    },
    {
      src: `/assets/thug tales/videos/${lang}/2.mp4`,
      poster: `/assets/thug tales/images/${lang}/2.webp`,
    },
    {
      src: `/assets/thug tales/videos/${lang}/3.mp4`,
      poster: `/assets/thug tales/images/${lang}/3.webp`,
    },
    {
      src: `/assets/thug tales/videos/${lang}/4.mp4`,
      poster: `/assets/thug tales/images/${lang}/4.webp`,
    },
    {
      src: `/assets/thug tales/videos/${lang}/5.mp4`,
      poster: `/assets/thug tales/images/${lang}/5.webp`,
    },
  ];
  const playThugVideo = (e: any, index: string) => {};
  return (
    <section
      id="thugs-tales"
      className="bg-cover bg-no-repeat bg-top  pb-[6vw]"
      style={{ backgroundImage: "url('/assets/thug tales/bg.webp')" }}
    >
      <div className="flex flex-col gap-5 text-white pt-5 sm:pb-2 sm:pt-10 px-5  ">
        <div className="flex flex-col items-center ">
          <span className="tracking-wider text-white text-center text-[7vw] sm:text-[3vw] font-yatra">
            {title}
          </span>
          <div className="w-16 sm:w-24 h-[2px] sm:h-[3px] bg-yellow-600"></div>
        </div>
      </div>

      {/* <!-- slider --> */}
      <div className="w-full h-full mt-6 sm:mt-[50px]">
        {/* <!-- Swiper --> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="thug-swiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full flex justify-center"
            >
              <div className="h-full relative flex justify-center items-center">
                <video
                  id="thug-1"
                  className="w-[90vw] sm:w-[60vw] max-h-fit  rounded-[15px] sm:rounded-[30px] mx-auto"
                  data-url="thug_tales_videos/raven_videos/r1.mp4"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser doesn&apos;t support video
                </video>
                <Image
                  width={100}
                  height={100}
                  onClick={() => playThugVideo(event, "thug-1")}
                  className="w-[5vw] h-[5vw] min-h-[30px]  min-w-[30px]  max-h-[70px]  max-w-[70px] absolute cursor-pointer"
                  src="/assets/thug tales/Video icon.webp"
                  alt="video icon"
                />
                <div
                  id="thugs-share-1"
                  className=" absolute right-[8vw] top-[5vw] sm:right-[19vw] sm:top-[5vw] text-white flex flex-col justify-center items-center gap-[2vw] sm:gap-5"
                ></div>
              </div>
            </SwiperSlide>
          ))}
          {/* <!-- arrow --> */}
          <div className="swiper-button-next thug-tales-button-next">
            <Image
              width={50}
              height={50}
              className="z-[2] w-full h-full object-contain"
              src="/assets/thug tales/Navigator Left.webp"
              alt="navigation left"
            />
          </div>
          <div className="swiper-button-prev thug-tales-button-prev">
            <Image
              width={50}
              height={50}
              className="z-[2] w-full h-full object-contain"
              src="/assets/thug tales/Navigator Right.webp"
              alt="navigation right"
            />
          </div>
          <div className="swiper-pagination" style={{ bottom: "4.5vw" }}></div>
        </Swiper>
      </div>
    </section>
  );
}

export default ThugTales;
