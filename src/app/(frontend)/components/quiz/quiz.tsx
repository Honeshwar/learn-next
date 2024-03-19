"use client";
import { useQuizContext } from "../../context/quizContext";
import QuizCertificate from "./QuizCertificate";
import QuizHome from "./QuizHome";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

import "../../styles/quiz/global.css";
export default function Quiz({ lang = "hi" }: { lang?: string }) {
  const { screen, setScreen } = useQuizContext();
  return (
    <div className="body">
      {screen === 1 ? <QuizHome setScreen={setScreen} lang={lang} /> : null}
      {screen === 2 ? <QuizQuestion lang={lang} /> : null}
      {screen === 3 ? <QuizResult lang={lang} /> : null}
      {screen === 4 ? <QuizCertificate lang={lang} /> : null}
    </div>
  );
}
