// app/results/page.tsx
"use client";
import React from "react";
import { Timer, Trophy, XCircle, Eye, ArrowLeft, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface GameResult {
  playerName: string;
  isSuccess: boolean;
  timeElapsed: number; // in seconds
  level: string;
  board: string[][];
  solution: string[][];
  startTime: Date;
  endTime: Date;
}

const SudokuCell: React.FC<{ value: string; isCorrect: boolean }> = ({ value, isCorrect }) => (
  <div
    className={`aspect-square flex items-center justify-center text-lg font-medium border ${
      isCorrect ? "text-green-600" : "text-red-600"
    }`}
  >
    {value}
  </div>
);

const SudokuBoard: React.FC<{ board: string[][], solution: string[][] }> = ({ board, solution }) => (
  <div className="grid grid-cols-9 gap-px bg-gray-200 border-2 border-indigo-600">
    {board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <SudokuCell
          key={`${rowIndex}-${colIndex}`}
          value={cell}
          isCorrect={cell === solution[rowIndex][colIndex]}
        />
      ))
    )}
  </div>
);

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export default function ResultsPage() {
  const router = useRouter();
  
  // This would typically come from your game state management
  const mockResult: GameResult = {
    playerName: "John Doe",
    isSuccess: true,
    timeElapsed: 845, // 14 minutes and 5 seconds
    level: "Medium",
    board: Array(9).fill(Array(9).fill("5")), // Replace with actual game board
    solution: Array(9).fill(Array(9).fill("5")), // Replace with actual solution
    startTime: new Date(Date.now() - 845000),
    endTime: new Date()
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={20} />
            <span>Back to Game</span>
          </Link>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Share2 size={20} />
            <span>Share Result</span>
          </button>
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
          {/* Result Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {mockResult.isSuccess ? (
              <Trophy size={48} className="text-yellow-500" />
            ) : (
              <XCircle size={48} className="text-red-500" />
            )}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {mockResult.isSuccess ? "Congratulations!" : "Better Luck Next Time!"}
              </h1>
              <p className="text-gray-600">
                {mockResult.isSuccess
                  ? "You've successfully completed the puzzle!"
                  : "Keep practicing to improve your skills."}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Player</p>
              <p className="text-lg font-medium text-gray-900">{mockResult.playerName}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Time</p>
              <div className="flex items-center justify-center gap-2">
                <Timer size={20} className="text-indigo-600" />
                <p className="text-lg font-medium text-gray-900">
                  {formatTime(mockResult.timeElapsed)}
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Level</p>
              <p className="text-lg font-medium text-gray-900">{mockResult.level}</p>
            </div>
          </div>

          {/* Sudoku Board */}
          <div className="max-w-md mx-auto mb-8">
            <SudokuBoard board={mockResult.board} solution={mockResult.solution} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/game')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Play Again
            </button>
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <Eye size={20} />
              View Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}