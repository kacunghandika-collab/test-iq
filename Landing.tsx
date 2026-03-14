import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Clock, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Brain, title: "20 Soal", desc: "Dirancang untuk mengukur kemampuan logika & penalaran" },
    { icon: Clock, title: "~10 Menit", desc: "Cukup singkat, tanpa batas waktu per soal" },
    { icon: Target, title: "Akurat", desc: "Berbasis pola standar pengukuran kognitif" },
  ];

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

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Seberapa Tinggi
              <br />
              <span className="text-primary">IQ Anda?</span>
            </h1>
            <p className="text-muted-foreground font-body text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Uji kemampuan logika, penalaran, dan pemecahan masalah Anda dengan 20 soal yang dirancang secara sistematis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/test")}
              className="font-heading font-semibold text-base px-10 py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              Mulai Test IQ
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 text-center">
                <f.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground font-body">© 2026 Kiietsuu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
