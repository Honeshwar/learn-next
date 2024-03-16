"use client";
import QuizCertificate from "../UI/components/hindi/QuizCertificate";
import QuizHome from "../UI/components/hindi/QuizHome";
import QuizQuestion from "../UI/components/hindi/QuizQuestion";
import QuizResult from "../UI/components/hindi/QuizResult";
import { QuizContextProvider, useQuizContext } from "../UI/context/quizContext";

import "../UI/styles/quiz/global.css";
function Quiz() {
  const { screen, setScreen } = useQuizContext();
  return (
    <>
      {screen === 1 ? <QuizHome setScreen={setScreen} /> : null}
      {screen === 2 ? <QuizQuestion /> : null}
      {screen === 3 ? <QuizResult /> : null}
      {screen === 4 ? <QuizCertificate /> : null}
    </>
  );
}

export default function WrapperQuiz() {
  return (
    <>
      <QuizContextProvider>
        <Quiz />
      </QuizContextProvider>
    </>
  );
}
