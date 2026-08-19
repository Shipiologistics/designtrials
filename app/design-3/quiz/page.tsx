import type { Metadata } from "next";
import { HairQuiz } from "../../components/HairQuiz";

export const metadata: Metadata = { title: "Hair Quiz | Inruuts Design 3", description: "Build an illustrative personalized Inruuts hair-care profile in about three minutes." };

export default function DesignThreeQuiz() { return <main className="quiz-page d3-quiz-page"><HairQuiz /></main>; }
