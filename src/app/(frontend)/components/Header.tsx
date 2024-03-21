"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeaserVideo from "./TeaserVideo";
import DetailForm from "./DetailForm";
import Link from "next/link";
import DATA from "../utils/constant";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Mobile from "./header/Mobile";
// import AlreadyRegisterd from "./header/AlreadyRegisterd";
// import Thanks from "./header/thanks";
import Logo from "./header/Logo";

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
  const [states, setStates] = useState([]);

  const LazyOTP = dynamic(() => import("./header/OTP"), {
    ssr: false,
  });

  const LazyDetailForm = dynamic(() => import("./DetailForm"), {
    ssr: false,
  });
  const LazyThankYouPledge = dynamic(() => import("./header/ThankYouPledge"), {
    ssr: false,
  });
  const LazyAlreadyRegisterd = dynamic(
    () => import("./header/AlreadyRegisterd")
  );
  const LazyThanks = dynamic(() => import("./header/Thanks"), {});

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
                          onClick={() => setOpenNavDropdown(false)}
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
              <Logo isMobile={isMobile} CTA={CTA} lang={lang} />
              {/* <!-- Mobile number form --> */}
              {step === 1 && (
                <Mobile
                  isMobile={isMobile}
                  step={step}
                  setStep={setStep}
                  lang={lang}
                  CTA={CTA}
                />
              )}
              {step === 2 && (
                <>
                  {/* <!-- otp Form --> */}
                  <LazyOTP
                    isMobile={isMobile}
                    lang={lang}
                    setStep={setStep}
                    setStates={setStates}
                    CTA={CTA}
                  />
                </>
              )}

              {/* <!-- alreadyRegistered --> */}
              {step === 0 && (
                <LazyAlreadyRegisterd
                  isMobile={isMobile}
                  lang={lang}
                  CTA={CTA}
                />
              )}
              {/* <!-- thanks --> */}
              {step === 5 && (
                <LazyThanks isMobile={isMobile} lang={lang} CTA={CTA} />
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
              <Logo isMobile={isMobile} CTA={CTA} lang={lang} />

              {/* <!-- mobile number form  --> */}
              {step === 1 && (
                <Mobile
                  isMobile={isMobile}
                  lang={lang}
                  step={step}
                  setStep={setStep}
                  CTA={CTA}
                ></Mobile>
              )}

              {/* <!-- otp form --> */}
              {step === 2 && (
                <>
                  <LazyOTP
                    isMobile={isMobile}
                    lang={lang}
                    setStep={setStep}
                    setStates={setStates}
                    CTA={CTA}
                  />
                </>
              )}

              {/* <!-- alreadyRegistered --> */}
              {step === 0 && (
                <LazyAlreadyRegisterd
                  isMobile={isMobile}
                  lang={lang}
                  CTA={CTA}
                />
              )}
              {/* <!-- thanks --> */}
              {step === 5 && (
                <LazyThanks isMobile={isMobile} lang={lang} CTA={CTA} />
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
        <LazyDetailForm
          CTA={CTA}
          states={states}
          setStates={setStates}
          setStep={setStep}
          lang={lang}
        />
      )}

      {/* <!-- Thank you container --> */}
      {step === 4 && (
        <LazyThankYouPledge lang={lang} setStep={setStep} CTA={CTA} />
      )}
    </>
  );
}

export default Header;
