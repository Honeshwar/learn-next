"use client";
import Image from "next/image";
import "../../styles/quiz/home.css";
import { useState } from "react";
import QuizHomeModal from "./QuizHomeModal";
function QuizHome({ setScreen }: { setScreen: Function }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <span id="home_nav" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z" />
        </svg>
      </span>
      <section id="start-container" className="w-100 section-container">
        <span id="language">
          <a href="../en/quiz/">English</a>
        </span>

        <div id="start-header">
          <Image
            width={1920}
            height={1080}
            src="/assets/quiz/MTB Typo.webp"
            alt="logo"
            priority={true}
          />
          <Image
            width={1920}
            height={1080}
            id="line-wire"
            src="/assets/quiz/Line Break.webp"
            alt="line wire"
          />
        </div>

        <div id="header-end">
          <div>
            <Image
              width={1920}
              height={1080}
              src="/assets/quiz/Take a Quiz Illustration.webp"
              alt="Quiz home image"
              priority={true}
              loading="eager"
            />
            <button
              id="start-btn"
              className="btn  col-8 mx-auto"
              onClick={() => setScreen(2)}
            >
              क्विज़ खेलें!
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      {openModal && <QuizHomeModal setOpenModal={setOpenModal} />}
    </>
  );
}

export default QuizHome;
