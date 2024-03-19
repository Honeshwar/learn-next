"use client";
import Quiz from "../../UI/components/quiz/quiz";
import { QuizContextProvider } from "../../UI/context/quizContext";

export default function WrapperQuiz() {
  return (
    <>
      <QuizContextProvider>
        <Quiz lang="en" />
      </QuizContextProvider>
    </>
  );
}
