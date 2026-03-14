import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calculateIQ, getIQCategory } from "@/data/questions";
import { useEffect } from "react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { correct: number; total: number } | null;

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  if (!state) return null;

  const { correct, total } = state;
  const iq = calculateIQ(correct, total);
  const category = getIQCategory(iq);
  const percentage = Math.round((correct / total) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="font-heading font-bold text-foreground text-lg">IQ Test</span>
        </div>
        <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">By Kiietsuu</span>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-8 text-center">
            <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Hasil Test IQ Anda</h1>
            <p className="text-muted-foreground text-sm font-body mb-8">Berdasarkan {total} soal yang telah dijawab</p>

            {/* IQ Score */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-36 h-36 rounded-full border-4 border-primary bg-primary/5">
                <div>
                  <span className="font-heading text-5xl font-extrabold text-primary">{iq}</span>
                  <p className="font-heading text-xs text-muted-foreground mt-1">IQ Score</p>
                </div>
              </div>
            </motion.div>

            {/* Category */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-heading font-semibold text-sm mb-3">
                {category.label}
              </span>
              <p className="text-muted-foreground text-sm font-body leading-relaxed max-w-sm mx-auto">
                {category.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-t border-border">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">{correct}</p>
                <p className="text-xs text-muted-foreground font-body">Benar</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">{total - correct}</p>
                <p className="text-xs text-muted-foreground font-body">Salah</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">{percentage}%</p>
                <p className="text-xs text-muted-foreground font-body">Akurasi</p>
              </div>
            </div>

            <Button
              onClick={() => navigate("/")}
              className="font-heading font-semibold"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Ulangi Test
            </Button>
          </div>
        </motion.div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground font-body">© 2026 Kiietsuu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Results;
