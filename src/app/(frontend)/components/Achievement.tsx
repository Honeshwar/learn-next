"use client";

import clsx from "clsx";
import "../styles/achievement.css";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
const LazySwiperImage = dynamic(() => import("./swiper Slider/Achievement"));
import SwiperImage from "./swiper Slider/Achievement";

function Achievement({
  title = "हमारी उपलब्धियाँ",
  lang = "hi",
}: {
  title: string;
  lang: string;
}) {
  const { isMobile } = useAppContext();
  // const images = [
  //   `/assets/achievement section/${lang}/3 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/4 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/5 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/6 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/7 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/8 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/9 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/10 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   // `/assets/achievement section/${lang}/11 - ${isMobile? "Mobile" : "Desktop"}.webp`,
  //   `/assets/achievement section/${lang}/12 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/13 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/14 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  // ];
  const data = {
    mobile: {
      hi: {
        sources: [
          "/assets/achievement section/hi/3 - Mobile.webp",
          "/assets/achievement section/hi/4 - Mobile.webp",
          "/assets/achievement section/hi/5 - Mobile.webp",
          "/assets/achievement section/hi/6 - Mobile.webp",
          "/assets/achievement section/hi/7 - Mobile.webp",
          "/assets/achievement section/hi/8 - Mobile.webp",
          "/assets/achievement section/hi/9 - Mobile.webp",
          "/assets/achievement section/hi/10 - Mobile.webp",
          "/assets/achievement section/hi/12 - Mobile.webp",
          "/assets/achievement section/hi/13 - Mobile.webp",
          "/assets/achievement section/hi/14 - Mobile.webp",
        ],
        base64: [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nAEnANj/AG5gPEpAIVdVT87OzgDahmP/o3fsx6v7+/sAVhcZKAAA6MbH1LvAZpETuCsInsIAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALUlEQVR4nGNQFmew0GMw1WLQ1dVkiDThqHIXVJNgMDExYbBmAKH82ITfv38DAG60CFdMNrTWAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNwNJdJCNbV0lDmYmdhmJ7rMD/dJiPet7u7m6FTX61QSe7/r+9Pnz4FAM17DmjFRddfAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGPQlWew0mYI9VQyMjJlCFFnKjPnrYj1vX//PoMtA4MRA8PZKZP+f3gPAKz7DEFbpz76AAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNQk2OwM+EVZGSICvNnaI/WnJNiWJIe4OzszBDJwODOwPBy/97/Hz8AAKXEC+oMOYE2AAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGMQZ2PQlGII8jOIzYhg8NFkiDNgttaRs7MxZ7BjYDBjYJjS1PD7928AhBQJhaNMzCoAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGMQZmBQlWSINJD7/+sPQ7wuQ7Akg7elrre3N4MlA4MeA4OWiGi0qRkAqrkH+A0+mgQAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGOQ5GOwNZb4dXT+plVLGVZkOd/viv//8Xx9dQ2DAwODCy/fk12r+opzADypELVS6xkrAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGMwUmMIcOQ10pWu72hgKHATcxBnqMpP+fPnD4M9A4MZA4Obts6qhnoAxhsLFxt1AU8AAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGOQ4mIw02JYOqfv/6/3DGH6TJU2Ajlx4deuXWOwZGAwZWBw1teLs3cAAP0sDBZ6bWZoAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGMQZmZQk2XQVJU01NRkSDXjKrLg2Ti94ffv3wwuDAz+nLwhluZBdg4Anx0JlX3tn/YAAAAASUVORK5CYII=",
        ],
      },
      en: {
        sources: [
          "/assets/achievement section/en/3 - Mobile.webp",
          "/assets/achievement section/en/4 - Mobile.webp",
          "/assets/achievement section/en/5 - Mobile.webp",
          "/assets/achievement section/en/6 - Mobile.webp",
          "/assets/achievement section/en/7 - Mobile.webp",
          "/assets/achievement section/en/8 - Mobile.webp",
          "/assets/achievement section/en/9 - Mobile.webp",
          "/assets/achievement section/en/10 - Mobile.webp",
          "/assets/achievement section/en/12 - Mobile.webp",
          "/assets/achievement section/en/13 - Mobile.webp",
          "/assets/achievement section/en/14 - Mobile.webp",
        ],
        base64: [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAK0lEQVR4nGOIDrYO8TFpbGzk5uZmeLO47NHEnD+//7S2tjLE6utlxsZCOAA5GBIn5D00lwAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGPgZWDws9OcX1AoKirKsDzLaV9pwP8PjxbMnc9gzM5krqYWGei9YcMGAO7JDcnEj26zAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNws1F0tFLiZmbw93Zn2NIWPj/fKz87raamhiFYWKzQye7v909//vwBANfJDxT6Cj6sAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNQk+MU5GGYWpdnamzCMD3asMlB8/CePf///GbQZGBQEeLdt3v7rTXlAOZ/DmCiRyWOAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGMQ4GEwM5L3l5RcWRLKMMlRYaKbekd9fWhQIIMEA4OKnMzv37/fvXsHAL3FDTenMcg1AAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGPgZmBgY2IIiwnIq8xkqPSRq/HVjgzxCQ70YTBmYFBhYJg5adLfv38BotQLMci9gsEAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGOQFGIQ5GZoaGioqKhg2FbstjXLd8/Obb9//2ZQZ2AItzbeuXq+tLQ0AAdhDmcupMGYAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGMQYGOwMVFNiIsWExNjuDA98//7dbvnT6wMCGRw4+KtD/E+3lr2f98iAPJ+DxTOcbZYAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGMQYGaQFmFwdHRcv3EjQ0mIgp+J8KxZs/78+cPgwMBgysiQ6evraWwMANWaC37rquEHAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNwtpQM81KN8FQU4WFgWOGtvzbZ4fWRjbm5uQxsjEy2lqb/f7yfOXMmANkyDbsJJA0FAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAL0lEQVR4nGMwUWfwsOa1NlUVYmBmyAqWqInR+f/j1YWjRxmyGBhKGNiqbK0ctbUBxe4LFtHKIHsAAAAASUVORK5CYII=",
        ],
      },
    },
    desktop: {
      hi: {
        sources: [
          "/assets/achievement section/hi/3 - Desktop.webp",
          "/assets/achievement section/hi/4 - Desktop.webp",
          "/assets/achievement section/hi/5 - Desktop.webp",
          "/assets/achievement section/hi/6 - Desktop.webp",
          "/assets/achievement section/hi/7 - Desktop.webp",
          "/assets/achievement section/hi/8 - Desktop.webp",
          "/assets/achievement section/hi/9 - Desktop.webp",
          "/assets/achievement section/hi/10 - Desktop.webp",
          "/assets/achievement section/hi/12 - Desktop.webp",
          "/assets/achievement section/hi/13 - Desktop.webp",
          "/assets/achievement section/hi/14 - Desktop.webp",
        ],
        base64: [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGOwNBCNCdBavGiOkJAQgz4Dgxwb89+/f3t7ewFYeQhgFNsSsgAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGOI8FLuKnR+vHaljo4OgzEDgxQDQ3Z82I8fPwBr7wkW6tJq7AAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGOQF2Mw0xVUV5F1d3VksGBgkGJg+P/30////wE6dAgc/xfz8QAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGMI91TytpXrqMg1NzdnsGZgkGVg2L5x4/8f1wFXygi6b2AdnQAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGPgZWAw1BIpD/bdVJfBYMzAIMXA8OfPn78/fgEAToQJXC+FD8gAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGMw0uTSUOGorc+Nio1k0Gdg8NTTuH7+xO/fvwFThQlgbygRQQAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGNICtWszXOePXNCXV0dgyEDg5mU6L8v7+bNmwcAfAUKnU7Uq4AAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGNIC7NY1JXz+sUjVlZWBndO9jVNRf8fXfi/aSEAjlcMS/wmM/cAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGMIdRPysRNwc3H+9e8vgz4Dg5Yo9/NbN77euwsAb18KzDQ08fMAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGPQV2bWU+U4tHBKcnIygyEDgwonw//v7zZu3AgAW1EJJnounZgAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGNQEGUw1xL89uF5X10dgwEDgzYv0/9Prx7v3wsAb8oKo3xarTsAAAAASUVORK5CYII=",
        ],
      },
      en: {
        sources: [
          "/assets/achievement section/en/3 - Desktop.webp",
          "/assets/achievement section/en/4 - Desktop.webp",
          "/assets/achievement section/en/5 - Desktop.webp",
          "/assets/achievement section/en/6 - Desktop.webp",
          "/assets/achievement section/en/7 - Desktop.webp",
          "/assets/achievement section/en/8 - Desktop.webp",
          "/assets/achievement section/en/9 - Desktop.webp",
          "/assets/achievement section/en/10 - Desktop.webp",
          "/assets/achievement section/en/12 - Desktop.webp",
          "/assets/achievement section/en/13 - Desktop.webp",
          "/assets/achievement section/en/14 - Desktop.webp",
        ],
        base64: [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGPwtuVryjXx8fLIzMxksGZgcGZg+P/m6fwJkwFfggjjsFJAkwAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGOw0mVKDZaRFWGwsrFlcGJgMGFgUGVi/v37NwA1ogWzuHyS1AAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGNwNOVwseS2tTIyNzdncGVgsGBg+P/t65EjRwBFhAgIGhtH2QAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGOw0mGw0WeQFRe3tLJnsGNgMGVgmFaQ9//TBwA0nQaXB4vpkAAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGMI9ZQsTNT2dNF3tjNjcGJgMGVgOLR8+f8PHwBTygiO9drtUgAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGNwMWcJcRU0MZZNSgxnsGNgMGNgmNJQ/vv3bwBG6we4JpiHiwAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGMwVmVwMGLwUpb5//cfgyUDgxkDQ6CRQbKvLwBS4AZtNMBxiwAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGOoyzI5s6V4flPu/3fPGWwYGGwZGHZPaJFlYgAAmZAJ2aaehDEAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGNwt+QuTVCNCTKvaaplsGNgMGNg6Css+v/zBwBaqQi78BmrPgAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAIklEQVR4nGNwMWOwN2bISQ37/+MDgx8DgzkDg6OK0oHpUwFiLwfzvYU7zwAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGPwsmZxNGGaM6P3/49fDB4MDBYMDJOKMp5eugQAdMIKKDEPM5oAAAAASUVORK5CYII=",
        ],
      },
    },
  } as any;
  const [images, setImages] = useState<any>({});
  useEffect(() => {
    setImages(data[isMobile ? "mobile" : "desktop"][lang]);
  }, [isMobile, lang]);
  console.log(images, isMobile, lang);

  // const [delay, setDelay] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDelay(true);
  //   }, 2000);
  // }, []);
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
      <div className="w-full  min-h-fit bg-black sm:h-screen max-h-fit sm:mt-[50px] ">
        {/* swiper slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          className="achievement-swiper  h-fit w-full"
        >
          {images?.sources?.map((src: string, index: number) => (
            <SwiperSlide key={index} className="h-fit w-full ">
              <LazySwiperImage
                isMobile={isMobile}
                src={src}
                base64={images.base64[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Achievement;
