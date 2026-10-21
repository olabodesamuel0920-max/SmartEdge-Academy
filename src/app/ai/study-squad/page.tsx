"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Loader2,
  Trophy,
  Timer,
  Zap,
  RotateCcw,
  MessageCircle,
  Crown,
  CheckCircle,
  XCircle,
  Play,
} from "lucide-react";

const EXAMS = ["WAEC", "NECO", "JAMB", "GCE"];
const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Government",
  "Literature in English",
];

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
  timeLimit: number;
  funFact: string;
}

interface Player {
  name: string;
  score: number;
  streak: number;
}

export default function StudySquadPage() {
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [round, setRound] = useState(1);
  const [gameState, setGameState] = useState<
    "setup" | "playing" | "between-rounds" | "finished"
  >("setup");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [roundTheme, setRoundTheme] = useState("");

  const submitAnswer = useCallback((answerIndex: number | null) => {
    setShowResult(true);
    setPlayers((prev) =>
      prev.map((p, i) => {
        if (i === 0) {
          const isCorrect =
            answerIndex !== null &&
            answerIndex === questions[currentQ]?.correctAnswer;
          return {
            ...p,
            score: p.score + (isCorrect ? questions[currentQ]?.points || 10 : 0),
            streak: isCorrect ? p.streak + 1 : 0,
          };
        }
        const botCorrect = Math.random() > 0.4;
        return {
          ...p,
          score: p.score + (botCorrect ? questions[currentQ]?.points || 10 : 0),
          streak: botCorrect ? p.streak + 1 : 0,
        };
      })
    );
  }, [questions, currentQ]);

  useEffect(() => {
    if (gameState !== "playing" || showResult || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          submitAnswer(selected);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState, showResult, timeLeft, selected, submitAnswer]);

  async function startRound(roundNum: number) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/study-squad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exam,
          subject,
          difficulty: roundNum <= 1 ? "easy" : roundNum <= 2 ? "medium" : "hard",
          roundNumber: roundNum,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQuestions(data.questions);
      setRoundTheme(data.roundTheme || `Round ${roundNum}`);
      setCurrentQ(0);
      setSelected(null);
      setShowResult(false);
      setTimeLeft(data.questions[0]?.timeLimit || 30);
      setGameState("playing");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to start round");
    } finally {
      setLoading(false);
    }
  }

  function startGame() {
    const botNames = ["Ade", "Chioma", "Emeka", "Fatima"];
    const bots: Player[] = botNames
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((name) => ({ name, score: 0, streak: 0 }));

    setPlayers([{ name: playerName || "You", score: 0, streak: 0 }, ...bots]);
    setRound(1);
    startRound(1);
  }

  function nextQuestion() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
      setTimeLeft(questions[currentQ + 1]?.timeLimit || 30);
    } else if (round < 3) {
      setGameState("between-rounds");
    } else {
      setGameState("finished");
    }
  }

  function nextRound() {
    const nextR = round + 1;
    setRound(nextR);
    startRound(nextR);
  }

  function resetGame() {
    setGameState("setup");
    setQuestions([]);
    setPlayers([]);
    setRound(1);
  }

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  if (gameState === "finished") {
    const winner = sortedPlayers[0];
    const isWinner = winner?.name === (playerName || "You");
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 text-center">
            <Trophy
              className={`h-16 w-16 mx-auto mb-4 ${isWinner ? "text-bright-yellow" : "text-gray-400"}`}
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
              {isWinner ? "You Won!" : `${winner?.name} Wins!`}
            </h2>
            <p className="text-gray-500 mb-8">Final Leaderboard</p>

            <div className="space-y-3 mb-8">
              {sortedPlayers.map((p, i) => (
                <div
                  key={p.name}
                  className={`flex items-center justify-between p-4 rounded-xl ${
                    i === 0
                      ? "bg-bright-yellow/20 border-2 border-bright-yellow"
                      : "bg-light-bg"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {i === 0 && (
                      <Crown className="h-5 w-5 text-bright-yellow" />
                    )}
                    <span
                      className={`font-semibold ${i === 0 ? "text-deep-blue" : "text-gray-700"}`}
                    >
                      {i + 1}. {p.name}
                    </span>
                  </div>
                  <span className="font-bold text-deep-blue">
                    {p.score} pts
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetGame}
                className="inline-flex items-center justify-center gap-2 bg-deep-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Play Again
              </button>
              <a
                href="https://wa.me/2348109015332?text=Hello%20SmartEdge!%20I%20just%20played%20Study%20Squad%20and%20want%20to%20join%20classes%20to%20improve."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Level Up with SmartEdge
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "between-rounds") {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <Zap className="h-12 w-12 text-bright-yellow mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-deep-blue mb-2">
            Round {round} Complete!
          </h2>
          <p className="text-gray-500 mb-6">
            Get ready for Round {round + 1} — it gets harder!
          </p>

          <div className="space-y-2 mb-8">
            {sortedPlayers.map((p, i) => (
              <div
                key={p.name}
                className="flex items-center justify-between p-3 bg-white rounded-xl"
              >
                <span className="font-medium text-gray-700">
                  {i + 1}. {p.name}
                </span>
                <span className="font-bold text-deep-blue">{p.score} pts</span>
              </div>
            ))}
          </div>

          <button
            onClick={nextRound}
            disabled={loading}
            className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Play className="h-5 w-5" />
            )}
            Start Round {round + 1}
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "playing" && questions.length > 0) {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen pt-20 pb-12 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-rose-500">
              {roundTheme}
            </span>
            <div className="flex items-center gap-2">
              <Timer
                className={`h-4 w-4 ${timeLeft <= 10 ? "text-red-500" : "text-gray-500"}`}
              />
              <span
                className={`font-bold ${timeLeft <= 10 ? "text-red-500 text-lg" : "text-gray-700"}`}
              >
                {timeLeft}s
              </span>
            </div>
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {sortedPlayers.map((p) => (
              <div
                key={p.name}
                className={`shrink-0 px-3 py-2 rounded-xl text-xs font-medium ${
                  p.name === (playerName || "You")
                    ? "bg-rose-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {p.name}: {p.score}pts
                {p.streak >= 2 && <span className="ml-1">🔥{p.streak}</span>}
              </div>
            ))}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-rose-500 h-2 rounded-full transition-all"
              style={{
                width: `${((currentQ + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">
                Q{currentQ + 1}/{questions.length}
              </span>
              <span className="text-sm font-bold text-bright-yellow">
                +{q.points} pts
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {q.question}
            </h3>

            <div className="space-y-3 mb-6">
              {q.options.map((opt, i) => {
                let style =
                  "border-gray-200 hover:border-rose-500 hover:bg-rose-50";
                if (showResult) {
                  if (i === q.correctAnswer) style = "border-green-500 bg-green-50";
                  else if (i === selected) style = "border-red-500 bg-red-50";
                } else if (i === selected) {
                  style = "border-rose-500 bg-rose-50";
                }
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (!showResult) {
                        setSelected(i);
                        submitAnswer(i);
                      }
                    }}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${style}`}
                  >
                    <span className="text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div>
                <div
                  className={`p-4 rounded-xl mb-4 ${
                    selected === q.correctAnswer
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {selected === q.correctAnswer ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm font-medium">
                      {selected === q.correctAnswer ? "Correct!" : "Wrong!"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{q.funFact}</p>
                </div>
                <button
                  onClick={nextQuestion}
                  className="w-full bg-deep-blue text-white py-3 rounded-full font-semibold hover:bg-deep-blue/90 transition-colors"
                >
                  {currentQ < questions.length - 1
                    ? "Next Question"
                    : round < 3
                      ? "End Round"
                      : "See Final Results"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-light-bg">
      <div className="max-w-2xl mx-auto px-4">
        <Link
          href="/#ai-suite"
          className="inline-flex items-center gap-1 text-deep-blue hover:text-forest-green text-sm font-medium mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to AI Suite
        </Link>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-2">
            Study Squad
          </h1>
          <p className="text-gray-600">
            Challenge AI opponents to a live quiz! 3 rounds, increasing
            difficulty. Can you top the leaderboard?
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Exam
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {EXAMS.map((e) => (
                  <button
                    key={e}
                    onClick={() => setExam(e)}
                    className={`py-2.5 rounded-xl font-medium text-sm transition-all ${
                      exam === e
                        ? "bg-deep-blue text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SUBJECTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`py-2.5 px-3 rounded-xl font-medium text-sm transition-all text-left ${
                      subject === s
                        ? "bg-forest-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={startGame}
              disabled={!exam || !subject || loading}
              className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Setting up challenge...
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  Start Study Squad!
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
