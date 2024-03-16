"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../../styles/achievement.css";
function Achievement({ lang = "hindi" }) {
  const images = [
    `/assets/achievement section/${lang}/3 - Desktop.webp`,
    `/assets/achievement section/${lang}/4 - Desktop.webp`,
    `/assets/achievement section/${lang}/5 - Desktop.webp`,
    `/assets/achievement section/${lang}/6 - Desktop.webp`,
    `/assets/achievement section/${lang}/7 - Desktop.webp`,
    `/assets/achievement section/${lang}/8 - Desktop.webp`,
    `/assets/achievement section/${lang}/9 - Desktop.webp`,
    `/assets/achievement section/${lang}/10 - Desktop.webp`,
    // `/assets/achievement section/${lang}/11 - Desktop.webp`,
    `/assets/achievement section/${lang}/12 - Desktop.webp`,
    `/assets/achievement section/${lang}/13 - Desktop.webp`,
    `/assets/achievement section/${lang}/14 - Desktop.webp`,
  ];
  return (
    // <!-- Achievement section -->
    <section
      id="achievement"
      className="w-full h-fit pt-1 sm:pt-[3rem] bg-black mt-[0vw] sm:mt-[0vw] relative z-[3]"
    >
      <div className="flex flex-col gap-10 text-white py-4 px-[18vw] g">
        <div className="flex flex-col items-center gap-0">
          <span className="tracking-wider text-center text-[7vw] sm:text-[3vw] font-yatra max-w-[200px] sm:max-w-fit">
            हमारी उपलब्धियाँ
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
                className="w-full h-fit max-h-[100vh] object-fill"
                width={2000}
                height={2000}
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
