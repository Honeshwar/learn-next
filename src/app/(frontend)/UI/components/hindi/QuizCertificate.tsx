import Image from "next/image";
import { quiz_share_count } from "../../utils/common-functions";
import { useEffect, useState } from "react";
import "../../styles/quiz/certificateContainer.css";
import QuizHomeModal from "./QuizHomeModal";
import { useQuizContext } from "../../context/quizContext";

export default function QuizCertificate() {
  const { certificateUrl } = useQuizContext();
  const [isDownload, setIsDownload] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  console.log(certificateUrl);
  useEffect(() => {
    if (isDownload) {
      const x = localStorage.getItem("mobile");
      window.location.href =
        `https://mahathugbandhan.com/api/v1/get_certificate/` + x;
    }
  }, [isDownload]);

  return (
    <>
      <span
        id="q_home_nav"
        onClick={() => setOpenModal(true)}
        className="absolute top-[2vw] left-1 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-[11vw] md:w-[4vw] lg:w-[3vw] fill-yellow-500"
        >
          <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z" />
        </svg>
      </span>
      <section id="certificate-container" className="section-container">
        <div
          id="certificate-section"
          className="w-[90%] md:w-[50%] max-w-[650px] p-3 mx-auto md:mt-[2vh]"
        >
          <Image
            width={650}
            height={650}
            id="certificate"
            className="w-full my-2"
            src={
              certificateUrl === ""
                ? "/assets/quiz/MTB_WebCertificate_Eng.png"
                : certificateUrl
            }
            alt="certificate"
            loading="eager"
          />
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
            <button
              id="download-btn"
              className="w-[80%]  md:w-[60%]  max-w-[250px] py-2 px-0 rounded-[4px]"
              onClick={() => setIsDownload(true)}
            >
              <Image
                width={20}
                height={20}
                className=" w-[20px] h-[20px] mr-3"
                src="/assets/quiz/download.svg"
                alt="download"
              />
              डाउनलोड करें
            </button>
            <div className="w-full md:w-[40%] flex justify-center items-center gap-0  mt-5 md:mt-0">
              <span className="mx-2">शेयर करें:</span>
              <div className="flex justify-center items-center">
                <a id="facebook-link" target="_blank" href="" className="mx-1">
                  <Image
                    width={20}
                    height={20}
                    className="w-[30px] h-[30px] mr-2"
                    onClick={quiz_share_count}
                    src="/assets/quiz/fb.svg"
                    alt=""
                  />
                </a>
                <a id="whatsapp-link" target="_blank" href="" className="mx-1">
                  <Image
                    width={20}
                    height={20}
                    className="w-[30px] h-[30px] mr-2"
                    onClick={quiz_share_count}
                    src="/assets/quiz/whatsapp.svg"
                    alt=""
                  />
                </a>
                <a id="twitter-link" target="_blank" href="" className="mx-1">
                  <Image
                    width={20}
                    height={20}
                    className="w-[30px] h-[30px] mr-2"
                    onClick={quiz_share_count}
                    src="/assets/quiz/twt-x-logo.svg"
                    style={{
                      backgroundColor: "black",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <a href="../" className="mx-3 p-3 underline">
            मुख्य वेबसाइट पर वापस जाएँ
          </a>
        </div>
      </section>
      {openModal && <QuizHomeModal setOpenModal={setOpenModal} />}
    </>
  );
}
