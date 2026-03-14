export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Angka berapa yang melanjutkan deret ini: 2, 6, 18, 54, ...?",
    options: ["108", "162", "148", "72"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Jika semua Bloops adalah Razzies dan semua Razzies adalah Lazzies, maka semua Bloops pasti Lazzies. Pernyataan ini:",
    options: ["Tidak benar", "Benar", "Tidak bisa ditentukan", "Kadang benar"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Manakah yang tidak termasuk kelompok? Anjing, Kucing, Burung, Bunga",
    options: ["Anjing", "Kucing", "Burung", "Bunga"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "Jika 5 mesin membutuhkan 5 menit untuk membuat 5 widget, berapa lama 100 mesin membuat 100 widget?",
    options: ["100 menit", "5 menit", "20 menit", "50 menit"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Angka berapa yang melanjutkan deret: 1, 1, 2, 3, 5, 8, ...?",
    options: ["11", "12", "13", "15"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "DOKTER berhubungan dengan PASIEN seperti GURU berhubungan dengan:",
    options: ["Sekolah", "Pendidikan", "Murid", "Buku"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Berapakah 15% dari 200?",
    options: ["25", "30", "35", "20"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "Jika Anda membalik kata 'TIKUS', huruf ke-3 dari belakang adalah:",
    options: ["K", "I", "U", "S"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Sebuah jam menunjukkan pukul 3:15. Berapa derajat sudut antara jarum jam dan jarum menit?",
    options: ["0°", "7.5°", "15°", "22.5°"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Mana yang merupakan anagram dari 'LISTEN'?",
    options: ["TINSEL", "SILENT", "ENLIST", "Semua benar"],
    correctAnswer: 3,
  },
  {
    id: 11,
    question: "Deret: 3, 7, 15, 31, 63, ...?",
    options: ["95", "111", "127", "99"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "Seorang petani punya 17 domba. Semua kecuali 9 mati. Berapa domba yang tersisa?",
    options: ["8", "9", "17", "0"],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: "Jika A = 1, B = 2, C = 3, maka CAB = ?",
    options: ["312", "321", "6", "cab"],
    correctAnswer: 2,
  },
  {
    id: 14,
    question: "Berapa banyak segitiga dalam sebuah pentagon yang dibagi dari satu titik sudut?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Manakah bilangan prima? 51, 53, 57, 59",
    options: ["51 dan 53", "53 dan 59", "51 dan 57", "53 dan 57"],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "Jika Anda berjalan 3 km ke utara, lalu 4 km ke timur, berapa jarak Anda dari titik awal?",
    options: ["7 km", "5 km", "1 km", "6 km"],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "Kata OPPOSITE dari 'BENEVOLENT' adalah:",
    options: ["Generous", "Malevolent", "Kind", "Charitable"],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "Berapa angka selanjutnya: 2, 3, 5, 7, 11, 13, ...?",
    options: ["15", "17", "19", "14"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "Jika sebuah kubus memiliki volume 27 cm³, berapa panjang sisinya?",
    options: ["9 cm", "3 cm", "6 cm", "4.5 cm"],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "Mary adalah ibu dari John. John adalah ayah dari Peter. Siapakah Mary bagi Peter?",
    options: ["Ibu", "Bibi", "Nenek", "Saudara"],
    correctAnswer: 2,
  },
];

export function calculateIQ(correctAnswers: number, totalQuestions: number): number {
  const percentage = correctAnswers / totalQuestions;
  // Map percentage to IQ range (roughly 70-145)
  const iq = Math.round(70 + percentage * 75);
  return iq;
}

export function getIQCategory(iq: number): { label: string; description: string } {
  if (iq >= 130) return { label: "Sangat Superior", description: "Kecerdasan Anda luar biasa tinggi! Anda termasuk dalam 2% teratas populasi." };
  if (iq >= 120) return { label: "Superior", description: "Anda memiliki kecerdasan di atas rata-rata yang signifikan." };
  if (iq >= 110) return { label: "Di Atas Rata-rata", description: "Kecerdasan Anda berada di atas rata-rata populasi umum." };
  if (iq >= 90) return { label: "Rata-rata", description: "Kecerdasan Anda berada dalam rentang normal populasi umum." };
  if (iq >= 80) return { label: "Di Bawah Rata-rata", description: "Skor Anda sedikit di bawah rata-rata, namun ini bukan ukuran absolut." };
  return { label: "Rendah", description: "Jangan khawatir, IQ bukan satu-satunya ukuran kecerdasan." };
}
