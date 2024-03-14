"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useMobileNumber from "../../hooks/MobileNumberHook";

function SpinTheWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [result_ID, setResultID] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // custom hook use
  const {
    mobileNumber,
    setMobileNumber,
    error,
    setError,
    validatePhoneNumber,
  } = useMobileNumber();
  const [submitMobileNumber, setSubmitMobileNumber] = useState(false);

  useEffect(() => {
    function getQueryParam(e: any) {
      return decodeURIComponent(
        window.location.search.replace(
          RegExp(
            "^(?:.*[&\\?]" +
              encodeURIComponent(e).replace(/[\.\+\*]/g, "\\$&") +
              "(?:\\=([^&]*))?)?.*$",
            "i"
          ),
          "$1"
        )
      );
    }
    async function submit(mobileNumber: string) {
      // form data
      let body = new FormData();
      // adding utm data
      let a = getQueryParam("utm_source"),
        s = getQueryParam("utm_medium"),
        n = getQueryParam("utm_campaign");
      body.append("utm_source", a),
        body.append("utm_medium", s),
        body.append("utm_campaign", n),
        // adding mobile data
        body.append("mobile", mobileNumber),
        // call api
        fetch("https:mahathugbandhan.com/api/v1/" + "user", {
          method: "POST",
          body,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // if(data.status !== 404){
            setShowPhoneModal(false);
            localStorage.setItem("mobile", mobileNumber);
            setShowResult(true);
          });
    }
    if (submitMobileNumber) {
      submit(mobileNumber);
    }
  }, [submitMobileNumber]);
  const lang = "hi";
  const spinResultData = [
    {
      id: 0,
      name: "Mamata Banerjee",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Mamata Banerjee.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Mamata_Banerjee.png`,
    },
    {
      id: 1,
      name: "Rahul Gandhi",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Rahul Gandhi.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Rahul_Gandhi.png`,
    },
    {
      id: 2,
      name: "Sharad Pawar",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Sharad Pawar.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Sharad_Pawar.png`,
    },
    {
      id: 3,
      name: "Lalu Prasad Yadav",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Lalu Prasad Yadav.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Lalu_Prasad_Yadav.png`,
    },
    {
      id: 4,
      name: "Arvind Kejriwal ",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Arvind Kejriwal.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Arvind_Kejriwal.png`,
    },
    {
      id: 5,
      name: "Akhilesh Yadav",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Akhilesh Yadav.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Akhilesh_Yadav.png`,
    },
    {
      id: 6,
      name: "Mallikarjun Kharge",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }Mallikarjun Kharge.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }Mallikarjun_Kharge.png`,
    },
    {
      id: 7,
      name: "MK Stalin",
      imgUrl: `/assets/spinthewheel/${
        lang === "hi" ? "hindi/" : ""
      }MK Stalin.webp`,
      dataUrl: `result_cards/${
        lang === "hi" ? "hindi/" : "english/"
      }MK_Stalin.png`,
    },
  ];
  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        console.log("result popup");
        if (!localStorage.getItem("mobile")) {
          setShowPhoneModal(true);
        }
      }, 4800);

      spin_wheel_count();
      // isSpinning = true;
      const a = Math.floor(Math.random() * 45);
      let counter = 45 * a;

      const randomRotation = 360 * 8 + counter; //prevRotation + 360
      // prevRotation = randomRotation;
      console.log(randomRotation);
      const wheel = document.getElementById("wheel")!;
      wheel.style.transition = "transform 5s ease-out";
      wheel.style.transform = `rotate(${randomRotation}deg)`;
      // wheel.style.transition = "transform 5s ease-out";

      setTimeout(() => {
        let ro = randomRotation % 360;
        let id = Math.floor(ro / 45);
        console.log(ro, id);

        if (id > 7) {
          id = id % 8;
        }
        setResultID(id);

        if (localStorage.getItem("mobile")) setShowResult(true);

        wheel.style.transition = "none";
        wheel.style.transform = "rotate(0deg)";
        setIsSpinning(false);
      }, 6000);
    }
  }, [isSpinning]);
  const spinWheel = () => {
    if (!isSpinning) setIsSpinning(true);
  };
  const image_download_count = () => {};
  const closePopup = () => {
    setShowResult(false);
    // setShowPhoneModal(false);
  };
  const submitNumberToSeeResult = (e: any) => {
    e.preventDefault();
    setSubmitMobileNumber(true);
  };

  const closeSubmitNumberToSeeResult = () => {
    setShowPhoneModal(false);
  };
  const spin_wheel_count = () => {};
  return (
    <section
      id="spinthewheel"
      className="py-7 sm:py-10 bg-stw-mobile md:bg-stw-desktop bg-cover md:bg-center bg-no-repeat "
    >
      <div className="flex flex-col items-center gap-0 sm:pb-2">
        <span className="tracking-wider text-white text-center text-[7vw] w-full sm:text-[3vw] font-yatra  sm:max-w-fit">
          हमारा प्रधानमंत्री उम्मीदवार चुनें
        </span>
        <div className="w-16 sm:w-24 h-[2px] sm:h-[3px] bg-yellow-600"></div>
      </div>
      {/* <!-- spin the wheel game --> */}
      <div className="flex flex-col items-center gap-5 mt-5">
        <div className="relative flex justify-center items-center overflow-hidden">
          <div
            className="w-[80vw] h-[80vw] sm:w-[385px] sm:h-[385px] bg-contain relative flex justify-center items-center rounded-full"
            id="wheel"
            style={{
              backgroundImage:
                "url('/assets/spinthewheel/Fortune Wheel Base crop.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div
              className="w-[55vw] h-[55vw] sm:w-[270px] sm:h-[270px] bg-contain absolute mt-[-3px] ml-[-3px] sm:pt-[-11px] sm:pl-[-4px]"
              style={{
                backgroundImage:
                  "url('/assets/spinthewheel/fortune wheel middle.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <div className="absolute flex justify-center">
            <Image
              width={150}
              height={150}
              className="absolute w-[45%] sm:w-[60%] -top-5"
              src="/assets/spinthewheel/Fortune Wheel Top.webp"
              alt="wheel top"
            />
            <Image
              width={150}
              height={150}
              className="absolute w-[20px] h-[50px] sm:w-[30px] sm:h-[70px] object-contain -top-7 sm:-top-12"
              src="/assets/spinthewheel/Fortune Wheel Handle.webp"
              alt="wheel handle"
            />
            <Image
              width={150}
              height={150}
              className="w-[35%] h-fit sm:w-[45%] z-[1]"
              src="/assets/spinthewheel/mtb_hindi_logo.webp"
              alt="wheel logo"
            />
          </div>
        </div>
        <button
          id="spin-btn"
          onClick={spinWheel}
          className="w-[70%] text-white font-yatra text-[6vw] sm:text-2xl relative sm:w-fit cursor-pointer bg-[blue] hover:bg-blue-950 px-[50px] py-[10px] sm:pt-3 rounded-xl sm:mt-2"
          style={{ letterSpacing: "2px" }}
        >
          पहिया घुमाएं
        </button>
      </div>

      {showResult && (
        <>
          {/* <!--Result popup  --> */}
          <div
            id="resultPopup"
            className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex-col justify-center items-center w-full md:inset-0 h-screen max-h-full bg-[#1a1a18eb]"
          >
            <div className="w-full h-full shape  rounded-[20px] flex flex-col justify-center items-center  gap-7 overflow-visible relative ">
              <div className="w-[100vw] flex flex-col sm:flex-row justify-center items-center relative gap-[5vw] sm:gap-5 ">
                <Image
                  width={1920}
                  height={1080}
                  id="result-popup-img"
                  className="h-full w-full sm:w-[50%]   object-contain sm:object-cover"
                  src={spinResultData[result_ID].imgUrl}
                  alt="spin the wheel result"
                />
                <div className=" h-full w-full sm:w-[30%]  text-white flex flex-col justify-center items-center gap-5 sm:gap-[3vw] ">
                  <div className="flex flex-col justify-center items-center gap-[1vw] ">
                    <h3 className="text-[9vw] sm:text-[2rem] font-dangerous text-white font-yatra ">
                      {" "}
                      शेयर{" "}
                    </h3>
                    <div
                      id="result-card-share"
                      className="text-white flex justify-center items-center gap-4 sm:gap-5"
                    ></div>
                  </div>
                  <a
                    id="result-card-download"
                    onClick={image_download_count}
                    href=""
                    download="choose_our_PM_candidate"
                    className="w-[150px] bg-[rgb(255,0,0)] py-1 px-4 flex justify-center items-center gap-3 rounded-md text-white font-bold "
                  >
                    <span className="material-symbols-outlined">
                      {" "}
                      download{" "}
                    </span>
                    <span className="font-yatra text-[1.2rem] sm:text-[1.5rem] pt-[2px]">
                      डाउनलोड
                    </span>
                  </a>
                </div>
                <span
                  onClick={closePopup}
                  title="close result card"
                  className="material-symbols-outlined text-red-700 text-[10vw]   sm:text-[4vw] md:text-[3rem] absolute top-[-15vw]  right-[2vw] sm:right-[5vw] sm:top-[-3vw] cursor-pointer"
                >
                  cancel
                </span>
              </div>
              {/* <!-- <button 
          onclick="closePopup()"
          title="close result card"
          className="bg-red-700 text-white px-3 py-1 sm:mt-0 rounded-lg sm:text-[1.4vw] absolute right-[3vw] top-[10vw]"
          >बंद करें -->
        */}
              {/* <!-- </button>  --> */}
            </div>
          </div>
        </>
      )}
      {showPhoneModal && (
        <>
          {/* <!-- phone number submit popup --> */}
          <div
            id="result-submit-mobile-modal"
            className="flex overflow-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
            style={{ backgroundColor: "#181844" }}
          >
            <div className="w-full h-full flex justify-center items-center px-[5vw] ">
              <div className="relative pt-7 sm:pt-0 p-4 w-[80vw] sm:w-[30vw] max-w-[500px] bg-yellow-600  rounded-md">
                {/* <!-- Modal content --> */}
                <div
                  id="result-mobile-number-form"
                  className="relative bg- rounded-lg  h-full w-full flex justify-center items-center flex-col sm:py-[3vw]  sm:gap-1"
                >
                  <h3 className=" text-center text-[1.5rem] sm:text-[2rem] font-yatra text-white  ">
                    परिणाम देखने के लिए मोबाइल नंबर दर्ज करें
                  </h3>
                  {/* <!-- Modal body --> */}
                  {/* <!-- show error --> */}
                  {error && (
                    <div
                      id="result-mobile-number-error"
                      className="flex text-[red] font-bold  justify-center font-yatra text-[1.2rem] sm:text-[1.4rem]"
                    >
                      त्रुटि उत्पन्न हुई अमान्य मोबाइल नंबर
                    </div>
                  )}
                  <form
                    onSubmit={submitNumberToSeeResult}
                    className="mobileNo-form flex flex-col items-center  gap-5 sm:gap-6 w-full h-full"
                  >
                    <input
                      id="result-card-input"
                      className=" pl-3 py-[1.3vw] sm:py-[.51vw] w-[90%]"
                      type="number"
                      placeholder="मोबाइल नंबर दर्ज करें"
                      required
                      onInput={validatePhoneNumber}
                    />
                    <button className="w-[90%]  rounded-lg px-3 py-2 text-white  bg-red-600  text-[1.2rem] sm:text-[1.5rem] font-yatra font-extrabold sm:tracking-[1px]">
                      जमा करें
                    </button>
                  </form>
                  <span
                    onClick={closeSubmitNumberToSeeResult}
                    title="close result card"
                    className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[3.1vw] absolute top-[-6vw]  right-[-2.5vw] sm:right-[-.5vw] sm:top-[-4.5vw] cursor-pointer"
                  >
                    cancel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default SpinTheWheel;
