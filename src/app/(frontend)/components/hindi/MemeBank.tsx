"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/meme-bazar.css";
import { useEffect, useState } from "react";

function MemeBank({ title = "मीम बैंक" }: { title: string }) {
  const [slides, setSlides] = useState(4.7);

  useEffect(() => {
    if (window.screen.width <= 640) {
      setSlides(1.7);
    }
  }, []);
  const images = [
    "/assets/meme-bazar/1.webp",
    "/assets/meme-bazar/2.webp",
    "/assets/meme-bazar/3.webp",
    "/assets/meme-bazar/4.webp",
    "/assets/meme-bazar/5.webp",
    "/assets/meme-bazar/6.webp",
    "/assets/meme-bazar/7.webp",
    "/assets/meme-bazar/8.webp",
    "/assets/meme-bazar/9.webp",
    "/assets/meme-bazar/10.webp",
    "/assets/meme-bazar/11.webp",
    "/assets/meme-bazar/12.webp",
    "/assets/meme-bazar/13.webp",
    "/assets/meme-bazar/14.webp",
    "/assets/meme-bazar/15.webp",
    // "/assets/meme-bazar/16.webp",
  ];
  const downloadMeme = () => {};
  const share = () => {};
  const openUploadMemeModal = () => {};
  const closeShareModal = () => {};
  const UploadMeme = () => {};
  const previewFile = () => {};
  const closeUploadMemeModal = () => {};
  const closeThankYouMemeModal = () => {};
  return (
    <>
      <section
        id="meme-bazar"
        className="w-full h-fit py-5 bg-yellow-500 "
        style={{
          backgroundImage: "url('/assets/meme-bazar/Bg.webp')",
        }}
      >
        <div className="flex flex-col gap-5 text-white  sm:py-4 px-5">
          <h2 className="flex flex-col items-center">
            <span className="tracking-wider text-center text-[7vw] sm:text-[3vw] text-[red] font-yatra">
              {title}
            </span>
            <div className="w-16 sm:w-32 h-[3px] bg-[blue]"></div>
          </h2>
        </div>

        {/* <!-- our meme slider --> */}
        <div
          id="meme-bazar"
          className="w-full h-full relative flex justify-center items-center overflow-hidden mt-2"
        >
          {/* <!-- Swiper --> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slides}
            loop={true}
            autoplay={{
              delay: 500000,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation={{
              nextEl: ".meme-bazar-swiper .swiper-button-next",
              prevEl: ".meme-bazar-swiper .swiper-button-prev",
              disabledClass: "hidden",
            }}
            className="meme-bazar-swiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <Image
                  className="w-full h-full "
                  width={1000}
                  height={800}
                  src={src}
                  alt="meme card"
                />
                {/* <!-- arrow --> */}
                <div className="swiper-button-next meme-bazar-button-next">
                  <Image
                    width={50}
                    height={50}
                    className="z-[2] w-full h-full object-contain"
                    src="/assets/meme-bazar/Navigator Left.webp"
                    alt="navigation left"
                  />
                </div>
                <div className="swiper-button-prev meme-bazar-button-prev">
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
              className="w-[150px] bg-[rgb(255,0,0)] py-1 px-0 flex justify-center items-center gap-3 rounded-md text-white font-bold cursor-pointer font-yatra
                 text-[1.2rem]"
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
              <span>डाउनलोड करें</span>
            </a>
            <a
              onClick={share}
              className="w-[120px] bg-[rgb(255,0,0)] p-1 px-0 flex justify-center items-center gap-3 rounded-md text-white font-bold cursor-pointer font-yatra  text-[1.2rem]"
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
              <span>शेयर करें</span>
            </a>
          </div>
          <button
            onClick={openUploadMemeModal}
            type="button"
            className="w-[230px] sm:w-fit  px-5 py-[6px] sm:px-5  sm:py-2 bg-blue-950 text-yellow-500 flex items-center gap-2 font-bold rounded-md cursor-pointer"
          >
            <span className="text-center leading-5 font-yatra text-[1.2rem] pt-1">
              अपने मीम्स अपलोड करें और उसे प्रदर्शित करवाए
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

      {/* <!-- Share modal --> */}
      <div
        id="share-modal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
        style={{ backgroundColor: "#181844c0" }}
      >
        <div tabIndex={-1}>
          <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
            <div className="relative bg-yellow-600 rounded-lg shadow ">
              <div className="p-10 md:p-20 text-center">
                <h3 className="mb-5 text-[2rem] font-yatra text-white">शेयर</h3>

                <div
                  id="share"
                  className="flex gap-5 sm:gap-[3vw] justify-center items-center flex-wrap pb-9"
                ></div>
                <button
                  onClick={closeShareModal}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-base inline-flex items-center px-5 py-1 pt-2 text-center me-2 font-yatra "
                >
                  बंद करें
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Upload Meme modal --> */}
      <div
        id="upload-meme-modal"
        className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
        style={{ backgroundColor: "#181844c0" }}
      >
        <div tabIndex={-1} className="h-full flex justify-center items-center">
          <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
            <div className="relative bg-yellow-600 rounded-lg shadow ">
              <div className="p-10 md:p-20 text-center flex gap-5 flex-col items-center">
                <h3 className=" text-[2rem] font-yatra text-white">
                  अपलोड मीम्स
                </h3>

                <form
                  onSubmit={UploadMeme}
                  id=""
                  className="flex flex-col gap-5 justify-center items-center flex-wrap pb-9"
                >
                  {/* <!-- <input className="block w-full  max-w-[300px] text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="large_size" type="file" required placeholder="फ़ाइल चयन करें"> --> */}
                  <div className="w-full">
                    <label
                      htmlFor="upload-file"
                      id="upload-file-name"
                      className="text-black bg-white font-yatra text-center border-2 py-4 border-blue-500 rounded-md flex flex-col gap-3 justify-center items-center "
                    >
                      <span className="material-symbols-outlined text-blue-600">
                        cloud_upload
                      </span>
                      <span className="text-blue-600" id="file-name">
                        फ़ाइल चयन करें
                      </span>
                    </label>
                    <input
                      id="upload-file"
                      style={{ display: "none" }}
                      type="file"
                      onChange={previewFile}
                    />
                  </div>
                  <div
                    style={{
                      display: " flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p
                      id="upload-file-error"
                      style={{
                        display: "none",
                        color: "red",
                        textAlign: "center",
                        marginBlock: "-5px 5px",
                      }}
                    >
                      {" "}
                      एक छवि चुनें{" "}
                    </p>
                    <button
                      type="submit"
                      className="max-w-[250px] px-3 pl-2 py-1 pt-[6px] sm:w-fit sm:px-5 bg-blue-950 text-yellow-500 flex justify-center items-center gap-2 font-bold  rounded-md cursor-pointer font-yatra text-[1.2rem] sm:text-[1.5rem] text-center "
                    >
                      अपने मीम्स अपलोड करें
                    </button>
                  </div>
                </form>
                {/* <!-- <button
                onclick="closeUploadMemeModal(event)"
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
              >
              बंद करें
              </button> --> */}
                <span
                  onClick={closeUploadMemeModal}
                  className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[4vw] md:text-[2.5rem] absolute right-5 top-5 cursor-pointer"
                >
                  cancel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Upload Meme Thank-you pop --> */}
      <div
        id="thank-you-meme-modal"
        className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
        style={{ backgroundColor: "#181844c0" }}
      >
        <div tabIndex={-1} className="h-full flex justify-center items-center">
          <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
            <div className="relative bg-yellow-600 rounded-lg shadow ">
              <div className="p-10 md:p-20 text-center flex gap-5 flex-col items-center relative ">
                <h3 className="text-[1.5rem] sm:text-[2.5rem] font-yatra text-white">
                  इमेज अपलोड करने के लिए धन्यवाद
                </h3>
                <span
                  onClick={closeThankYouMemeModal}
                  className="material-symbols-outlined text-red-700 text-[5vw]   sm:text-[4vw] absolute right-5 top-5 cursor-pointer"
                >
                  cancel
                </span>
                {/* <!-- <button
              onclick="closeThankYouMemeModal(event)"
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
            >
            Close
            </button> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemeBank;
