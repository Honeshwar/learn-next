import Image from "next/image";
import "../../styles/quiz/question.css";
import { useState } from "react";
import QuizHomeModal from "./QuizHomeModal";
import SubmitModal from "./SubmitModal";
import { useQuizContext } from "../../context/quizContext";
export default function QuizQuestion() {
  const Questions = [
    {
      imgUrl: "/assets/quiz/question/Fodder scam Image.webp",
      question: "चारा घोटाले का मुख्य आरोपी कौन हैं?",
      a: "लालू प्रसाद यादव",
      b: "जगन्नाथ मिश्रा",
      c: "आर.के. राणा",
      d: "जगदीश शर्मा",
      answer: "लालू प्रसाद यादव",
    },
    {
      imgUrl: "/assets/quiz/question/Liquor Scam Image.webp",
      question: " दिल्ली शराब घोटाले में किस AAP नेता को गिरफ्तार किया गया?",
      a: "राघव चड्ढा",
      b: "संजय सिंह",
      c: "सत्येन्द्र जैन",
      d: "मनीष सिसौदिया",
      answer: "मनीष सिसौदिया",
    },
    {
      imgUrl: "/assets/quiz/question/Article-370.webp",
      question:
        "किस नेता ने कहा था कि अगर श्री नरेंद्र मोदी दस बार भी प्रधानमंत्री बन जाए, तब भी जम्मू-कश्मीर से धारा 370 नहीं हटा पाएंगे?",
      a: "फ़िरोज़ खान",
      b: "फारूक अब्दुल्ला",
      c: "मेहबूबा मुफ्ती",
      d: "हकीम यासीन",
      answer: "फारूक अब्दुल्ला",
    },
    // {
    //   imgUrl: "/assets/quiz/question/Find Audio Image.WEBP",
    //   audioUrl: "/assets/quiz/question/audio.mp3",
    //   question: "यह किसकी आवाज है?",
    //   a: "ममता बनर्जी",
    //   b: "नुसरत जहां",
    //   c: "मिमी चक्रवर्ती",
    //   d: "महुआ मोइत्रा",
    //   answer: "ममता बनर्जी",
    // },
    // {
    //   imgUrl: "/assets/quiz/question/national-herald-jpg.webp",
    //   question:
    //     "988 करोड़ रुपये के नेशनल हेराल्ड भ्रष्टाचार मामले में मुख्य अभियुक्त कौन हैं?",
    //   a: "विष्णु गोयल - रेखा गोयल",
    //   b: "इंदिरा गांधी-राजीव गांधी",
    //   c: "ममता बनर्जी - अभिषेक बनर्जी",
    //   d: "सोनिया गांधी-राहुल गांधी",
    //   answer: "इंदिरा गांधी-राजीव गांधी",
    // },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState(Questions[0]);
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [error, setError] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(true);

  const { setScreen, setScored } = useQuizContext();
  const selectOption = (e: any, isRightAnswer: boolean) => {
    setError(false);

    let buttons = document.querySelectorAll("div.buttons button");
    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-btn");
      }
    }
    e.target.classList.add("active-btn");

    console.log("select option", isRightAnswer);
    setIsOptionSelected(true);
    if (isRightAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (!isOptionSelected) {
      setError(true);
      return;
    }
    if (currentQuestion === Questions.length) {
      if (localStorage.getItem("mobile")) {
        setScored(score);
        setScreen(3);
      } else {
        setOpenSubmitModal(true);
      }

      return;
    }
    let buttons = document.querySelectorAll("div.buttons button");
    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-btn");
      }
    }
    setIsOptionSelected(false);
    setCurrentQuestion((prev) => prev + 1);
    setQuestion(Questions[currentQuestion]);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(1);
    setQuestion(Questions[0]);
  };
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
      <section id="quiz-container" className="section-container">
        <div id="question-container" className="">
          <div id="question-1" className="question col-12  ">
            <div className="quiz-header img-section">
              <Image
                width={1920}
                height={1080}
                className=""
                src="/assets/quiz/question/MTB logo hindi.webp"
                alt="logo"
              />
              <div className="second-img">
                <Image
                  width={1920}
                  height={1080}
                  className=""
                  src={question.imgUrl}
                  alt="quiz img"
                />
              </div>
            </div>
            {/* <!-- quiz question section --> */}
            <div className="question-section col-12">
              <p className="col-12">{question.question}</p>
              <div className="buttons  mx-auto">
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">A</span>
                  {question.a}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">B</span>
                  {question.b}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">C</span>
                  {question.c}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">D</span>
                  {question.d}
                </button>
              </div>
            </div>
          </div>
          <div id="next-btn-container">
            {error && (
              <p className="option_select" style={{ color: "red" }}>
                कृपया आगे बढ़ने के लिए विकल्प चुनें
              </p>
            )}
            <button id="next-btn" onClick={nextQuestion} className="btn">
              {currentQuestion === Questions.length ? "सबमिट" : "आगे बढ़ें"}
              {/* <!-- बढ़ो --> */}
            </button>
            <p id="pagination">
              0{currentQuestion}/0{Questions.length}
            </p>
          </div>
        </div>
        {/* <!-- <div className="footer">
                <Image width={1920} height={1080} src="img/footer1.webp" className="w-100" alt />
            </div> --> */}
      </section>

      {openModal && <QuizHomeModal setOpenModal={setOpenModal} />}
      {openSubmitModal && (
        <SubmitModal
          setOpenSubmitModal={setOpenSubmitModal}
          score={score}
          resetGame={resetGame}
        />
      )}
    </>
  );
}
