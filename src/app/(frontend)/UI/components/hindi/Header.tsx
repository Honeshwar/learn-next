"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeaserVideo from "./TeaserVideo";
import DetailForm from "./DetailForm";
import Link from "next/link";
import DATA from "../../utils/constant";
import clsx from "clsx";

function Header({
  isMobile,
  lang = "hi",
}: {
  isMobile: boolean;
  lang: string;
}) {
  const [openNavDropdown, setOpenNavDropdown] = useState(false);
  console.log("openNavDropdown", openNavDropdown);

  const [navList] = useState(DATA[lang].navLinks);
  const [CTA] = useState(DATA[lang].CTA);

  const [step, setStep] = useState(1);
  const [data, setData] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (step === 1 && localStorage.getItem("mobile_main") !== null) {
      setStep(5); //5
    }
    async function submit() {
      // form data
      let body = new FormData();
      body.append("mobile", phoneNo);
      console.log("form data", body);

      // calling api
      fetch("https:mahathugbandhan.com/api/v1/" + "user", {
        method: "POST",
        body,
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log("user", responseData);

          if (
            "Mobile Number already registered." === responseData.result ||
            responseData?.otp_verified_at === null
          ) {
            // send otp
            fetch(
              "https:mahathugbandhan.com/api/v1/" +
                `user/send_otp?language=${lang}`,
              {
                method: "PATCH",
                body,
              }
            )
              .then((response) => response.json())
              .then((responseData) => {
                console.log("send otp result", responseData);
                if (responseData.status >= 200 && responseData.status < 300) {
                  // save mobile no to sessionStorage
                  console.log("before session add kare se", data);
                  sessionStorage.setItem("mobile_main", data);
                  setStep(2);
                  setData("");
                }
              });
          } else {
            console.log("already resistered", "already registered");
            localStorage.setItem("mobile_main", data); // so in spin the when no form shown
            setStep(0);
          }
        });
    }

    async function otpVerification() {
      // e.preventDefault();
      // console.log("otp verification");
      // invalidOtp[0].style.display = "none"; //re-enter otp
      // invalidOtp[1].style.display = "none"; //re-enter otp

      // const otpValue = e.target[0].value;
      // form data
      let body = new FormData();
      body.append("otp", data);
      body.append("mobile", sessionStorage.getItem("mobile_main")!),
        console.log("form data", body);

      // call api
      fetch(
        "https:mahathugbandhan.com/api/v1/" +
          `user/verify_otp?language=${lang}`,
        {
          method: "PATCH",
          body,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data?.status >= 200 && data?.status < 300) {
            //otp verified
            localStorage.setItem(
              "mobile_main",
              sessionStorage.getItem("mobile_main")!
            );
            fetch(
              `https://mahathugbandhan.com/api/v1/get_district?language=${lang}`
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("get allstates ", data);
                if (data?.status >= 200 && data?.status < 300) {
                  setStates(data.result);
                  setStep(3);
                  setData("");
                } else {
                  console.log(data);
                }
              });
          } else {
            if (data?.result === "Error Occured: Invalid OTP") {
              setError(true);
            }
            console.log("error while otp matching", data);
          }
        });

      return;
    }
    console.log("data", data.length);
    if (data.length === 10) {
      try {
        submit();
      } catch (error) {
        console.log("error while create user", error);
      }
    } else if (data.length === 6) {
      try {
        otpVerification();
      } catch (error) {
        console.log("error while otp matching", error);
      }
    }
  }, [data]);

  const submitMobileNo = (event: any) => {
    event.preventDefault();
    if (
      phoneNo.length === 10 &&
      Number(phoneNo.charAt(0)) > 5 &&
      Number(phoneNo.charAt(0)) <= 9
    ) {
      console.log("number is submited to setData", phoneNo);
      setData(phoneNo);
    } else {
      setError(true);
    }
  };

  const validatePhoneNumber = (e: any) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
      return;
    }
    setError(false);
    const phoneNumber = e.target.value;
    const sliceNumber = phoneNumber.slice(0, 10);
    e.target.value = sliceNumber;
    setPhoneNo(sliceNumber);

    console.log("slice number", phoneNumber.slice(0, 10), phoneNumber.length);
  };
  const otpVerification = (e: any) => {
    e.preventDefault();
    setData(otp);
  };

  return (
    <>
      {/* <!-- desktop view --> */}
      {isMobile ? null : (
        <nav className="hidden md:flex bg-blue-900 px-5 pt-2 items-end gap-0 md:gap-5 xl:gap-10 justify-around h-[100px]">
          <div className="w-full md:w-auto flex justify-between gap-2 text-white">
            <Link href={lang === "hi" ? "/" : "/en"} className="">
              <Image
                className={clsx("object-contain", {
                  "h-[95px] ": lang === "hi",
                  "h-[60px] lg:h-[70px] xl:h-[90px]": lang === "en",
                })}
                src={
                  lang === "hi"
                    ? "/assets/mtb_hindi_logo.webp"
                    : "/assets/mtb_english_logo.webp"
                }
                priority={true}
                placeholder="blur"
                blurDataURL={
                  lang === "hi"
                    ? "/assets/mtb_hindi_logo.webp"
                    : "/assets/mtb_english_logo.webp"
                }
                alt="brand logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div
            className={clsx(" h-full flex justify-center items-center", {
              "w-[90%] md:w-[90%]": lang === "hi",
              "w-[95%] xl:w-[90%]": lang === "en",
            })}
          >
            <ul
              className={clsx("w-full flex justify-center pt-[.21vw]", {
                "gap-[10px] lg:gap-2": lang === "hi",
                "gap-[0px] lg:gap-1 xl:gap-1": lang === "en",
              })}
            >
              {navList.map(
                (item: { name: string; url: string }, index: number) => (
                  <a
                    key={index}
                    href={item.url}
                    className={clsx(
                      "text-white hover:bg-yellow-600 hover:text-white rounded-md px-3 py-2 md:pl-1 md:pr-1 text-[1.2vw] text-center",
                      {
                        "xl:px-3 font-yatra": lang === "hi",
                        "xl:px-2 font-dangerous": lang === "en",
                      }
                    )}
                  >
                    {item.name}
                  </a>
                )
              )}

              {/* <!-- language switch button --> */}
              <Link
                href={lang === "hi" ? "/en" : "/"}
                className={clsx(
                  "flex gap-2 items-center px-4 flex-wrap justify-center z-10",
                  {
                    "pr-2 xl:px-4": lang === "en",
                  }
                )}
                style={{ top: "90px", right: "5vw" }}
              >
                <Image
                  className="h-5"
                  src="/assets/images/language icon.webp"
                  alt="language translate image"
                  width={20}
                  height={20}
                />
                <button className="hidden bg-red-700 px-4 py-[0px] rounded-[10px] text-white gap-2 sm:flex items-center font-bold">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span id="language"> English</span>
                </button>
              </Link>
            </ul>
          </div>
        </nav>
      )}

      <header className="relative w-full h-[90vh] sm:h-[45vw]">
        {isMobile && (
          <>
            {/* <!-- mobile  navbar --> */}
            <nav className="flex md:hidden absolute left-0 right-0 top-0 z-[11] px-5 pt-2 items-end">
              <div className="w-full md:w-auto flex justify-between gap-2 text-white">
                <Link href={lang === "hi" ? "/" : "/en"} className="">
                  <Image
                    className="h-[90px] object-contain"
                    src={
                      lang === "hi"
                        ? "/assets/mtb_hindi_logo.webp"
                        : "/assets/mtb_english_logo.webp"
                    }
                    priority={true}
                    placeholder="blur"
                    blurDataURL={
                      lang === "hi"
                        ? "/assets/mtb_hindi_logo.webp"
                        : "/assets/mtb_english_logo.webp"
                    }
                    alt="brand logo"
                    width={100}
                    height={100}
                  />
                </Link>
                {/* <!-- mobile --> */}
                <div className="md:hidden flex flex-col items-end gap-3">
                  <Link
                    href={lang === "hi" ? "/en" : "/"}
                    className="flex gap-2"
                  >
                    <Image
                      className="h-5"
                      src="/assets/images/language icon.webp"
                      alt="language translate image"
                      width={20}
                      height={200}
                    />
                    <button className="text-sm md:hidden bg-red-700 px-2 py-[1px] rounded-[10px] text-white gap-2 flex items-center font-bold">
                      <span className="w-3 h-3 bg-white rounded-full"></span>

                      <span id="language">
                        {" "}
                        {lang === "hi" ? "English" : "हिंदी"}{" "}
                      </span>
                    </button>
                  </Link>
                  <Image
                    onClick={() => {
                      console.log("openNavDropdown", openNavDropdown);
                      setOpenNavDropdown((prev) => !prev);
                    }}
                    id="hamburg"
                    className="w-7 h-5"
                    src="/assets/images/Hamburger.webp"
                    alt="hamburg"
                    width={28}
                    height={20}
                  />
                </div>
              </div>

              {/* <!-- navigation dropdown for mobile devices  --> */}
              {openNavDropdown && (
                <div
                  id="navbar-dropdown"
                  className="flex absolute top-20 right-2 bg-[rgb(0,0,0,.9)] rounded-lg pr-3 pl-9 py-4"
                >
                  <ul className="flex flex-col items-end gap-2">
                    {navList.map(
                      (item: { name: string; url: string }, index: number) => (
                        <a
                          key={index}
                          href={item.url}
                          className={clsx(
                            "text-yellow-500 rounded-md px-3 py-2 text-[1rem] text-center",
                            {
                              "font-yatra": lang === "hi",
                              "font-dangerous": lang === "en",
                            }
                          )}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </ul>
                </div>
              )}
            </nav>
          </>
        )}

        <TeaserVideo isMobile={isMobile} lang={lang} />

        {isMobile ? (
          <>
            {/* <!-- form for mobile devices --> */}
            <div className="sm:hidden absolute bottom-[0vw] left-0 right-0 text-center flex flex-col gap-2 z-10 px-3 py-7 pb-0">
              <div className="font-climateCrisis flex flex-col px-2 items-center">
                <Image
                  className="w-full h-full max-w-[150px] mx-auto "
                  src={
                    lang === "hi"
                      ? "/assets/mtb_hindi_logo.webp"
                      : "/assets/mtb_english_logo.webp"
                  }
                  priority={true}
                  placeholder="blur"
                  blurDataURL={
                    lang === "hi"
                      ? "/assets/mtb_hindi_logo.webp"
                      : "/assets/mtb_english_logo.webp"
                  }
                  alt="MTB logo"
                  width={100}
                  height={100}
                />
                <span
                  className={clsx("text-white ", {
                    "text-[21px] font-yatra max-w-[290px]": lang === "hi",
                    "tracking-[1px] text-[20px] font-dangerous max-w-[270px]":
                      lang === "en",
                  })}
                >
                  {/* देश को महाठगबंधन से बचाने का संकल्प लें */}
                  {/* Pledge to save the country from Mahathugbandhan */}
                  {/* {lang === "hi"
                    ? "देश को महाठगबंधन से बचाने का संकल्प लें"
                    : "Pledge to save the country from Mahathugbandhan"} */}
                  {CTA.title}
                </span>
              </div>

              {/* <!-- Mobile number form --> */}
              {step === 1 && (
                <>
                  {error && (
                    <span
                      className={clsx(
                        " font-bold text-[red] transition duration-1000 ease-in-out text-center ",
                        {
                          "font-yatra ": lang === "hi",
                          // " ": lang === "en",
                        }
                      )}
                    >
                      {/* *** त्रुटि हुई: अमान्य मोबाइल नंबर */}
                      {CTA["form-1"]["error-msg"]}
                    </span>
                  )}
                  <form
                    onSubmit={submitMobileNo}
                    className="flex flex-col items-center space-y-3 gap-0"
                  >
                    <input
                      className={clsx("pl-3 py-[2vw] w-full", {
                        "max-w-[290px]": lang === "hi",
                        "max-w-[270px]": lang === "en",
                      })}
                      type="number"
                      placeholder={CTA["form-1"]["input-placeholder"]}
                      required
                      onInput={validatePhoneNumber}
                    />
                    <button
                      className={clsx(
                        "w-full rounded-sm px-2 text-white  bg-[red]  text-wrap flex justify-center items-center",
                        {
                          "font-yatra max-w-[290px] pt-[1.5vw] pb-[.5vw] text-[20px] ":
                            lang === "hi",
                          "py-[2vw] max-w-[270px] font-extrabold font-book text-[18px]":
                            lang === "en",
                        }
                      )}
                    >
                      {/* संकल्प लें */}
                      {CTA["form-1"]["submit-btn"]}
                    </button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  {/* <!-- otp Form --> */}
                  {error && (
                    <span
                      className={clsx(
                        " font-bold text-[red] transition duration-1000 ease-in-out  ",
                        {
                          // "text-[1.5rem] ": lang === "hi",
                          // "text-[1.2rem] ": lang === "en",
                        }
                      )}
                    >
                      {/* *** त्रुटि उत्पन्न हुई अमान्य ओटीपी */}
                      {CTA["form-2"]["error-msg"]}
                    </span>
                  )}
                  <form
                    onSubmit={otpVerification}
                    className="flex  flex-col items-center space-y-3 gap-0"
                  >
                    <input
                      className={clsx("pl-3 py-[2vw] w-full ", {
                        "max-w-[290px]": lang === "hi",
                        "max-w-[270px]": lang === "en",
                      })}
                      type="number"
                      placeholder="ओटीपी दर्ज करें"
                      required
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      className={clsx(
                        "w-full rounded-sm    text-white  bg-[red]  text-wrap ",
                        {
                          "font-yatra max-w-[290px] px-2 pt-[1.5vw] pb-[.5vw] text-[20px] flex justify-center items-center":
                            lang === "hi",
                          "px-3 py-[2vw] font-extrabold font-book text-[16px] max-w-[270px] flex justify-center items-center":
                            lang === "en",
                        }
                      )}
                    >
                      {/* ओटीपी जमा करें */}
                      {CTA["form-2"]["submit-btn"]}
                    </button>
                  </form>
                </>
              )}

              {/* <!-- alreadyRegistered --> */}
              {step === 0 && (
                <div className="flex text-center flex-col justify-center items-center">
                  <h3
                    className={clsx(
                      "sm:text-md md:text-lg  underline text-[yellow] dark:text-[yellow]",
                      {
                        "font-yatra": lang === "hi",
                        "font-dangerous": lang === "en",
                      }
                    )}
                  >
                    {/* आप पहले से ही पंजीकृत हैं */}
                    {CTA["already-registerd"]["heading"]}
                  </h3>
                  <h3
                    className={clsx(
                      "sm:text-md md:text-lg underline text-[yellow] dark:text-[yellow]",
                      {
                        "font-yatra": lang === "hi",
                        "font-dangerous": lang === "en",
                      }
                    )}
                  >
                    {/* प्रतिज्ञा के लिए धन्यवाद */}
                    {CTA["already-registerd"]["sub-heading"]}
                  </h3>
                </div>
              )}
              {/* <!-- thanks --> */}
              {step === 5 && (
                <div className="flex text-center justify-center items-center">
                  <h3 className="mb-5 text-lg font-bold text-[yellow] dark:text-[yellow]">
                    <span
                      className={clsx("underline", {
                        "font-yatra": lang === "hi",
                        "font-dangerous": lang === "en",
                      })}
                    >
                      {/* प्रतिज्ञा के लिए धन्यवाद */}
                      {CTA["already-registerd"]["sub-heading"]}
                    </span>
                  </h3>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* <!-- form for desktop devices --> */}
            <div
              className={clsx(
                "hidden z-[2] absolute sm:top-[3vw] right-[4vw] text-center sm:flex flex-col gap-6 bg-[rgb(32,33,36,.5)] rounded-[1.5vw] px-[1vw] py-[3vw] pt-[1vw] w-fit h-fit ",
                {
                  "max-w-[580px]": lang === "en",
                }
              )}
            >
              <div
                className={clsx("font-bold flex flex-col px-2", {
                  "gap-3": lang === "hi",
                  "gap-[12px]": lang === "en",
                })}
              >
                <Image
                  className="max-w-[170px] mx-auto"
                  src="/assets/mtb_hindi_logo.webp"
                  priority={true} //lazy lodaing remove and preload hoga start
                  placeholder="empty"
                  //   blurDataURL="/assets/mtb_hindi_logo.webp"
                  alt="MTB logo"
                  width={100}
                  height={100}
                />
                <span
                  className={clsx(" text-white ", {
                    "text-[2.5vw] font-yatra ": lang === "hi",
                    "tracking-[3px] text-[2vw] font-dangerous": lang === "en",
                  })}
                >
                  {/* देश को महाठगबंधन से बचाने का संकल्प लें */}
                  {CTA.title}
                </span>
              </div>

              {/* <!-- mobile number form  --> */}
              {step === 1 && (
                <>
                  {error && (
                    <span
                      className={clsx(
                        " font-bold text-[red] transition duration-1000 ease-in-out text-center ",
                        {
                          "text-[1.5rem] ": lang === "hi",
                          "text-[1.2rem] ": lang === "en",
                        }
                      )}
                    >
                      {/* *** त्रुटि हुई: अमान्य मोबाइल नंबर */}
                      {CTA["form-1"]["error-msg"]}
                    </span>
                  )}
                  <form
                    onSubmit={submitMobileNo}
                    className={clsx("flex flex-col items-center", {
                      "space-y-3 gap-3": lang === "hi",
                      "gap-6": lang === "en",
                    })}
                  >
                    <input
                      className=" pl-3 py-[.51vw] w-[90%]"
                      type="number"
                      placeholder={CTA["form-1"]["input-placeholder"]}
                      required
                      onInput={validatePhoneNumber}
                    />
                    <button
                      className={clsx(
                        "w-[90%]  rounded-lg px-3  text-white font-extrabold bg-red-600   ",
                        {
                          "py-1 pt-2 text-[25px] font-yatra": lang === "hi",
                          "py-[.51vw] text-[20px] font-book": lang === "en",
                        }
                      )}
                    >
                      {CTA["form-1"]["submit-btn"]}
                    </button>
                  </form>
                </>
              )}

              {/* <!-- otp form --> */}
              {step === 2 && (
                <>
                  {error && (
                    <span
                      className={clsx(
                        "hidden font-bold text-[red] transition duration-1000 ease-in-out ",
                        {
                          "font-yatra text-[1.5rem]": lang === "hi",
                          "text-[1.2rem] ": lang === "en",
                        }
                      )}
                    >
                      {/* *** त्रुटि उत्पन्न हुई अमान्य ओटीपी */}
                      {CTA["form-2"]["error-msg"]}
                    </span>
                  )}
                  <form
                    onSubmit={otpVerification}
                    className="flex-col items-center space-y-3 gap-1"
                  >
                    <input
                      className="pl-3 py-[.51vw] w-[90%]"
                      type="number"
                      placeholder={CTA["form-2"]["input-placeholder"]}
                      required
                    />
                    <button
                      className={clsx(
                        "w-[90%]  rounded-lg  text-white font-extrabold bg-red-600 ",
                        {
                          "px-3 py-2 text-[25px] font-yatra": lang === "hi",
                          "py-[.51vw] text-[20px] font-book": lang === "en",
                        }
                      )}
                    >
                      {CTA["form-2"]["submit-btn"]}
                    </button>
                  </form>
                </>
              )}

              {/* <!-- alreadyRegistered --> */}
              {step === 0 && (
                <div className="text-center flex-col justify-center items-center">
                  <h3
                    className={clsx(
                      "sm:text-md underline text-[yellow] dark:text-[yellow] ",
                      {
                        "font-yatra text-[1.5rem]": lang === "hi",
                        "font-dangerous text-[1.2rem]": lang === "en",
                      }
                    )}
                  >
                    {/* आप पहले से ही पंजीकृत हैं */}
                    {CTA["already-registered"]["heading"]}
                  </h3>
                  <h3
                    className={clsx(
                      "sm:text-md underline text-[yellow] dark:text-[yellow]",
                      {
                        "font-yatra text-[1.5rem]": lang === "hi",
                        "font-dangerous text-[1.2rem]": lang === "en",
                      }
                    )}
                  >
                    {/* प्रतिज्ञा के लिए धन्यवाद */}
                    {CTA["already-registered"]["sub-heading"]}
                  </h3>
                </div>
              )}
              {/* <!-- thanks --> */}
              {step === 5 && (
                <div className="text-center justify-center items-center">
                  {/* <Image
              className="mx-auto mb-4 text-gray-400 w-[5vw] h-[5vw] dark:text-gray-200 object-contain"
              src="https://cdn.pixabay.com/photo/2016/06/01/00/57/thank-you-1428147_640.png"
              alt="thank you image"
            /> */}
                  <h3 className="mb-5 text-lg font-bold text-[yellow] dark:text-[yellow]">
                    <span
                      className={clsx("underline", {
                        "font-yatra text-[1.5rem]": lang === "hi",
                        "font-dangerous text-[1.2rem]": lang === "en",
                      })}
                    >
                      {/* प्रतिज्ञा के लिए धन्यवाद */}
                      {CTA["already-registered"]["sub-heading"]}
                    </span>
                  </h3>
                </div>
              )}
            </div>
          </>
        )}

        {/* <!-- blue bg --> */}
        <div
          className="z-[1] absolute bottom-0 h-[50vw] sm:h-[10vw] w-full sm:top-[35vw]"
          style={{
            backgroundImage: "linear-gradient(to top, #12129e, #12129e00)",
          }}
        ></div>
      </header>

      {/* <!-- detail form --> */}
      {step === 3 && (
        <DetailForm
          CTA={CTA}
          states={states}
          setStates={setStates}
          setStep={setStep}
          lang={lang}
        />
      )}

      {/* <!-- Thank you container --> */}
      {step === 4 && (
        <div
          id="thanks-for-pledge"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
          style={{ backgroundColor: "#181844c0" }}
        >
          <div tabIndex={-1}>
            <div className="relative p-4 w-full max-w-lg max-h-full">
              <div className="relative bg-yellow-600 rounded-lg shadow ">
                <div className="p-10 md:p-10 text-center">
                  {/* <Image
                  layout="fill"
                  className="mx-auto mb-4 text-gray-400 w-20 h-20 sm:w-[30vw] sm:h-[30vw]  max-w-[200px] max-h-[200px] dark:text-gray-200"
                  src="https://cdn.pixabay.com/photo/2016/06/01/00/57/thank-you-1428147_640.png"
                  alt="thank you image"
                /> */}
                  <h3
                    className={clsx("mb-5 text-lg  text-white", {
                      "sm:text-[1.5rem] font-yatra": lang === "hi",
                      "sm:text-[1.2rem] font-dangerous": lang === "en",
                    })}
                  >
                    {/* महाठगबंधन के खिलाफ प्रतिज्ञा के लिए धन्यवाद */}
                    {CTA["thank-you"]["title"]}
                    {/* <!-- <p>👍👍</p> --> */}
                  </h3>
                  <button
                    onClick={() => setStep(5)}
                    data-modal-hide="popup-modal"
                    type="button"
                    className={clsx(
                      "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg inline-flex items-center px-5  text-center me-2  ",
                      {
                        "py-[2px] pt-[6px]text-lg font-yatra": lang === "hi",
                        "py-2  text-sm font-book  font-extrabold":
                          lang === "en",
                      }
                    )}
                  >
                    {CTA["thank-you"]["close-btn"]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
