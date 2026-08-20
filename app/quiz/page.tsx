import type { Metadata } from "next";
import { HairQuiz } from "../components/HairQuiz";

export const metadata: Metadata = { title: "Hair Quiz | Inruut", description: "Build an illustrative personalized Inruut hair-care profile in about three minutes." };

export default function QuizPage() { return <main className="quiz-page"><HairQuiz /></main>; }
