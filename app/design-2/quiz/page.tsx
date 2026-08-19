import type { Metadata } from "next";
import { HairQuiz } from "../../components/HairQuiz";

export const metadata: Metadata = { title: "Hair Quiz | Inruuts Design 2", description: "Build an illustrative personalized Inruuts hair-care profile in about three minutes." };

export default function DesignTwoQuiz() { return <main className="quiz-page d2w-quiz-page"><HairQuiz /></main>; }
