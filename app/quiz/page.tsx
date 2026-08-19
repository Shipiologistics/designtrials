import type { Metadata } from "next";
import { HairQuiz } from "../components/HairQuiz";

export const metadata: Metadata = { title: "Hair Quiz | Inruuts", description: "Build an illustrative personalized Inruuts hair-care profile in about three minutes." };

export default function QuizPage() { return <main className="quiz-page"><HairQuiz /></main>; }
