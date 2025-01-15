"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Timer, Trash2, CheckCircle } from "lucide-react";

type Board = string[][];
type SelectedCell = {
  row: number;
  col: number;
} | null;

interface CellProps {
  value: string;
  rowIndex: number;
  colIndex: number;
  selectedCell: SelectedCell;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const Cell: React.FC<CellProps> = ({
  value,
  rowIndex,
  colIndex,
  selectedCell,
  onChange,
  onFocus,
  onBlur
}) => (
  <input
    type="text"
    maxLength={1}
    value={value}
    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    className={`
      w-full h-full text-center outline-none
      ${(rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'border-b-2 border-indigo-600' : ''}
      ${(colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'border-r-2 border-indigo-600' : ''}
      ${selectedCell?.row === rowIndex && selectedCell?.col === colIndex 
        ? 'bg-indigo-50' 
        : 'hover:bg-gray-50'}
      text-sm sm:text-base
    `}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default function SoloPlayer(): JSX.Element {
  const [board, setBoard] = useState<Board>(Array(9).fill(Array(9).fill("")));
  const [selectedCell, setSelectedCell] = useState<SelectedCell>(null);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleCellChange = (row: number, col: number, value: string): void => {
    if (value === "" || (/^[1-9]$/.test(value))) {
      const newBoard: Board = board.map((r, rIndex) =>
        rIndex === row
          ? [...r.slice(0, col), value, ...r.slice(col + 1)]
          : [...r]
      );
      setBoard(newBoard);
    }
  };

  const clearBoard = (): void => {
    setBoard(Array(9).fill(Array(9).fill("")));
    setTimer(0);
  };

  const handleSubmit = (): void => {
    // Add your Sudoku validation logic here
    console.log("Submit clicked");
  };

  const isSudokuValid = (): boolean => {
    // Add validation logic here
    return true;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4">
      {/* Timer */}
      <div className="flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-lg shadow-sm">
        <Timer size={16} className="text-indigo-600" />
        <span className="text-sm font-medium">{formatTime(timer)}</span>
      </div>

      {/* Sudoku Board */}
      <div className="w-full max-w-md aspect-square bg-white rounded-lg shadow-sm p-2">
        <div className="grid grid-cols-9 gap-px bg-gray-200 h-full">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                rowIndex={rowIndex}
                colIndex={colIndex}
                selectedCell={selectedCell}
                onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                onFocus={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                onBlur={() => setSelectedCell(null)}
              />
            ))
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={clearBoard}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-indigo-600 transition-colors text-sm"
        >
          <Trash2 size={14} />
          Clear All
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
        >
          <CheckCircle size={14} />
          Submit
        </button>
      </div>
    </div>
  );
}