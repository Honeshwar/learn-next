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
import { useEffect, useRef, useState } from "react";
import { video_share_count } from "../../utils/common-functions";

interface Swiper {
  autoplay: {
    stop: () => void;
  };
  swiper: any;
}

function ThugTales({
  title = "हमारी ठग की कहानियाँ",
  lang = "hindi",
}: {
  title: string;
  lang: string;
}) {
  const [whatsapp_link, setWhatsapp_link] = useState("");
  const [facebook_link, setFacebook_link] = useState("");
  const [twitter_link, setTwitter_link] = useState("");
  const [playingThugVideo, setPlayingThugVideo] = useState(false);

  const swiperRef = useRef<Swiper>(null);

  const videos = [
    {
      src: "/assets/thug tales/videos/r1.mp4",
      poster: "/assets/thug tales/images/Ravana1.webp",
      "data-url": "thug_tales_videos/raven_videos/r1.mp4",
    },
    {
      src: "/assets/thug tales/videos/r2.mp4",
      poster: "/assets/thug tales/images/Ravana2.webp",
      "data-url": "thug_tales_videos/raven_videos/r2.mp4",
    },
    {
      src: "/assets/thug tales/videos/r3.mp4",
      poster: "/assets/thug tales/images/Ravana3.webp",
      "data-url": "thug_tales_videos/raven_videos/r3.mp4",
    },
    {
      src: `/assets/thug tales/videos/${lang}/1.mp4`,
      poster: `/assets/thug tales/images/${lang}/1.webp`,
      "data-url": "thug_tales_videos/hindi/h1.mp4",
    },
    {
      src: `/assets/thug tales/videos/${lang}/2.mp4`,
      poster: `/assets/thug tales/images/${lang}/2.webp`,
      "data-url": "thug_tales_videos/hindi/h2.mp4",
    },
    {
      src: `/assets/thug tales/videos/${lang}/3.mp4`,
      poster: `/assets/thug tales/images/${lang}/3.webp`,
      "data-url": "thug_tales_videos/hindi/h3.mp4",
    },
    {
      src: `/assets/thug tales/videos/${lang}/4.mp4`,
      poster: `/assets/thug tales/images/${lang}/4.webp`,
      "data-url": "thug_tales_videos/hindi/h4.mp4",
    },
    {
      src: `/assets/thug tales/videos/${lang}/5.mp4`,
      poster: `/assets/thug tales/images/${lang}/5.webp`,
      "data-url": "thug_tales_videos/hindi/h5.mp4",
    },
  ];
  // const playThugVideo = (e: any, index: string) => {};
  // function playThugVideo(
  //   e: any,
  //   videoId: string,
  //   dataUrl: string,
  //   shareId: string
  // ) {
  //   const video = document.getElementById(videoId) as HTMLVideoElement;
  //   if (e !== undefined) {
  //     e.target.style.display = "none";
  //   }
  //   console.log(swiperRef.current.swiper);
  //   swiperRef.current!.swiper.autoplay.stop();
  //   video.controls = true;

  //   const muteBtn = document.getElementById("svg_mute") as HTMLElement;
  //   const unMuteBtn = document.getElementById("svg_unmute") as HTMLElement;
  //   const TeaserVideo = document.getElementById(
  //     "teaser-video"
  //   ) as HTMLVideoElement;
  //   // muted teasure video, when we play this video
  //   unMuteBtn.style.display = "none";
  //   muteBtn.style.display = "inline";
  //   TeaserVideo.muted = true; // or teaserVideo.stop();
  //   // mobileVideo.muted = true;

  //   generateShareLinks(document.getElementById(shareId)!, dataUrl);
  //   video.play(); //play
  //   // pledgeSwiper.pagination.el.style.display = "none";
  //   // thugVideoPlaying = true;

  //   // // Listen for the slideChange event
  //   // pledgeSwiper.on("slideChange", function () {
  //   //   pledgeSwiper.pagination.el.style.display = "block";
  //   //   e.target.style.display = "block";
  //   //   thugShares[videoId.charAt(videoId.length - 1) - 1].innerHTML = "";
  //   //   pledgeSwiper.autoplay.start();
  //   //   video.controls = false;
  //   //   video.load(); //video load again and we will see poster img again
  //   //   thugVideoPlaying = false;
  //   // });
  // }

  const generateShareLinks = (shareElement: HTMLElement, videoUrl: string) => {
    let link = encodeURIComponent(
      "https://mahathugbandhan.com/api/v1/videos?name=" + videoUrl
    );

    let text =
      "Check out this video about the Mahathugbandhan, let's remove them from our Bharat!" +
      " %0A " +
      link;

    console.log(text);

    // shares links
    let twitter_link =
      "https://twitter.com/intent/tweet?url=" + link + "&text=" + text;
    let facebook_link =
      "http://www.facebook.com/sharer/sharer.php?u=" + link + "&text=" + text;

    let whatsapp_link = "";
    if (screen.width > 750)
      whatsapp_link =
        "https://web.whatsapp.com/send?url=" +
        link +
        "&text=" +
        link +
        " " +
        `%0A` +
        text;
    else
      whatsapp_link =
        "https://wa.me/?url=" + link + "&text=" + link + " " + `%0A` + text;

    setWhatsapp_link(whatsapp_link);
    setFacebook_link(facebook_link);
    setTwitter_link(twitter_link);
  };

  /**************************** play Thug Tales Video ****************************** */
  useEffect(() => {
    const thugTalesVideos = document.querySelectorAll(".pledge-swiper video");
    thugTalesVideos.forEach((video) => {
      video.addEventListener("mouseenter", function () {
        swiperRef.current!.swiper.autoplay.stop();
      });
      video.addEventListener("mouseleave", function () {
        if (!playingThugVideo) {
          swiperRef.current!!.swiper.autoplay.start();
          setPlayingThugVideo(false);
        }
      });
    });
  }, []);

  function playThugVideo(
    imgId: string,
    videoId: string,
    videoUrl: string,
    shareElementId: string
  ) {
    const muteBtn = document.getElementById("svg_mute") as HTMLElement;
    const unMuteBtn = document.getElementById("svg_unmute") as HTMLElement;
    const TeaserVideo = document.querySelector(
      "#teaser-video"
    ) as HTMLVideoElement;
    const video = document.getElementById(videoId) as HTMLVideoElement;
    const imgElement = document.getElementById(imgId)!;
    imgElement.style.display = "none";
    // video.style.display = "block";
    console.log(swiperRef.current!.swiper);
    swiperRef.current!.swiper.autoplay.stop();
    video.controls = true;

    // muted teasure video, when we play this video
    unMuteBtn.style.display = "none";
    muteBtn.style.display = "inline";
    TeaserVideo.muted = true; // or teaserVideo.stop();
    // mobileVideo.muted = true;
    const shareElement = document.getElementById(shareElementId)!;
    generateShareLinks(shareElement, videoUrl);
    video.play(); //play
    swiperRef.current!.swiper.pagination.el.style.display = "none";
    setPlayingThugVideo(true);
    // Listen for the slideChange event
    swiperRef.current!.swiper.on("slideChange", function () {
      swiperRef.current!.swiper.pagination.el.style.display = "block";
      imgElement.style.display = "block";
      // shareElement.innerHTML = "";
      swiperRef.current!.swiper.autoplay.start();
      video.controls = false;
      video.load(); //video load again and we will see poster img again
      setPlayingThugVideo(false);
    });
  }

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
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          navigation={{
            nextEl: ".thug-swiper .swiper-button-next",
            prevEl: ".thug-swiper .swiper-button-prev",
            disabledClass: "hidden",
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
                  id={`thug-${index + 1}`}
                  className="w-[90vw] sm:w-[60vw] max-h-fit  rounded-[15px] sm:rounded-[30px] mx-auto"
                  data-url=""
                  poster={video.poster}
                  onClick={() =>
                    playThugVideo(
                      `img-${index + 1}`,
                      `thug-${index + 1}`,
                      video["data-url"],
                      `thug-shares-${index + 1}`
                    )
                  }
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser doesn&apos;t support video
                </video>
                <Image
                  id={`img-${index + 1}`}
                  width={100}
                  height={100}
                  onClick={() =>
                    playThugVideo(
                      `img-${index + 1}`,
                      `thug-${index + 1}`,
                      video["data-url"],
                      `thug-shares-${index + 1}`
                    )
                  }
                  className="w-[5vw] h-[5vw] min-h-[30px]  min-w-[30px]  max-h-[70px]  max-w-[70px] absolute cursor-pointer"
                  src="/assets/thug tales/Video icon.webp"
                  alt="video icon"
                />
                <div
                  id={`thug-shares-${index + 1}`}
                  className=" absolute right-[8vw] top-[5vw] sm:right-[19vw] sm:top-[5vw] text-white flex flex-col justify-center items-center gap-[2vw] sm:gap-5"
                >
                  {playingThugVideo && (
                    <>
                      <a
                        onClick={video_share_count}
                        className="flex flex-col justify-center items-center gap-0 sm:gap-2"
                        href={whatsapp_link}
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        <Image
                          width={50}
                          height={50}
                          className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                          src="/assets/svg/whatsapp.svg"
                          alt="whatsapp logo"
                        />
                      </a>
                      <a
                        onClick={video_share_count}
                        className="flex flex-col justify-center items-center gap-0 sm:gap-2"
                        href={twitter_link}
                        style={{ color: "black" }}
                        target="_blank"
                      >
                        <Image
                          width={50}
                          height={50}
                          className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                          src="/assets/svg/twt-x-logo.svg"
                          alt="twitter logo"
                          style={{
                            backgroundColor: "black",
                            padding: "3px",
                            borderRadius: "50%",
                          }}
                        />
                      </a>
                      <a
                        onClick={video_share_count}
                        className="flex flex-col justify-center items-center gap-0 sm:gap-2"
                        href={facebook_link}
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        <Image
                          width={50}
                          height={50}
                          className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                          src="/assets/svg/fb.svg"
                          alt="facebook logo"
                        />
                      </a>
                    </>
                  )}
                </div>
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