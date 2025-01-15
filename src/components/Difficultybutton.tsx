'use client'
import React, { FC } from 'react';
type DifficultyButtonProps = {
  level: string;
  active?: boolean;
};
const DifficultyButton: FC<DifficultyButtonProps> = ({ level, active = false }) => (
    <button
      className={`px-3 py-1 rounded-full text-xs ${
        active 
          ? 'bg-indigo-600 text-white' 
          : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-600'
      }`}
    >
      {level}
    </button>
  );
export default DifficultyButton;
