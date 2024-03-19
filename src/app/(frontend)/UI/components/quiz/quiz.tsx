"use client";
import { useQuizContext } from "../../context/quizContext";
import QuizCertificate from "../hindi/QuizCertificate";
import QuizHome from "../hindi/QuizHome";
import QuizQuestion from "../hindi/QuizQuestion";
import QuizResult from "../hindi/QuizResult";

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
