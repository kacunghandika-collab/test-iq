import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { questions } from "@/data/questions";

const Test = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate correct answers
      const correct = newAnswers.filter((a, i) => a === questions[i].correctAnswer).length;
      navigate("/results", { state: { correct, total: questions.length } });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-heading font-bold text-foreground text-sm">IQ Test</span>
        </div>
        <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">By Kiietsuu</span>
      </header>

      {/* Progress */}
      <div className="max-w-2xl mx-auto w-full px-6 mt-4">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      {/* Question */}
      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <QuestionCard
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentIndex + 1}
        />
      </main>
    </div>
  );
};

export default Test;
