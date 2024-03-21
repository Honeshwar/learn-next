"use client";

import clsx from "clsx";
import "../styles/achievement.css";
import dynamic from "next/dynamic";

function Achievement({
  title = "हमारी उपलब्धियाँ",
  lang = "hi",
}: {
  title: string;
  lang: string;
}) {
  const LazySwiperSLider = dynamic(() => import("./swiper Slider/Achievement"));
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
        {/* swiper slider */}
        <LazySwiperSLider lang={lang} />
      </div>
    </section>
  );
}

export default Achievement;
