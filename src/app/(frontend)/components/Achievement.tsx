"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles/achievement.css";
import clsx from "clsx";
import { useAppContext } from "../context/appContext";
function Achievement({
  title = "हमारी उपलब्धियाँ",
  lang = "hi",
}: {
  title: string;
  lang: string;
}) {
  const { isMobile } = useAppContext();
  const images = [
    `/assets/achievement section/${lang}/3 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/4 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/5 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/6 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/7 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/8 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/9 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/10 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    // `/assets/achievement section/${lang}/11 - ${isMobile? "Mobile" : "Desktop"}.webp`,
    `/assets/achievement section/${lang}/12 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/13 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
    `/assets/achievement section/${lang}/14 - ${
      isMobile ? "Mobile" : "Desktop"
    }.webp`,
  ];
  return (
    // <!-- Achievement section -->
    <section
      id="achievement"
      className="w-full h-fit pt-1 sm:pt-[3rem] bg-black mt-[0vw] sm:mt-[0vw] relative z-[0]"
    >
      <div
        className={clsx("flex flex-col gap-10 text-white py-4 px-[18vw]", {
          "pb-6": lang === "en",
        })}
      >
        <div className="flex flex-col items-center gap-0">
          <span
            className={clsx(
              "tracking-wider text-center text-[7vw] sm:text-[3vw]  max-w-[200px] sm:max-w-fit",
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
      <div className="w-full h-full sm:h-screen max-h-fit sm:mt-[50px] ">
        {/* <!-- Swiper --> */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          className="achievement-swiper  h-fit w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="h-fit w-full ">
              <Image
                className="w-full h-fit max-h-[100vh] object-cover"
                width={isMobile ? 500 : 1920}
                height={isMobile ? 1080 : 700}
                src={src}
                alt="Achievement image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Achievement;
