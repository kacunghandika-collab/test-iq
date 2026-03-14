import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/questions";
import { useState } from "react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  questionNumber: number;
}

const QuestionCard = ({ question, onAnswer, questionNumber }: QuestionCardProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => {
      onAnswer(index);
      setSelected(null);
    }, 400);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-card rounded-lg shadow-lg border border-border p-6 sm:p-8">
          <span className="text-xs font-heading font-semibold text-primary tracking-wider uppercase mb-3 block">
            Soal {questionNumber}
          </span>
          <h2 className="text-lg sm:text-xl font-heading font-semibold text-card-foreground mb-6 leading-relaxed">
            {question.question}
          </h2>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-full text-left px-5 py-4 rounded-md border transition-all duration-200 font-body text-sm sm:text-base ${
                  selected === index
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border bg-background hover:border-primary/50 hover:bg-primary/5 text-foreground"
                }`}
              >
                <span className="font-heading font-semibold text-muted-foreground mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionCard;
