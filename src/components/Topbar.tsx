// TopBar.tsx
"use client";
import React from "react";
import { Bell, ChevronDown, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
interface TopBarProps {
  playerName: string;
  profileImage?: string;
}

const TopBar: React.FC<TopBarProps> = ({ playerName, profileImage }) => {
  return (
    <div className="w-full fixed top-0 bg-white shadow-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Profile */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-indigo-100">
            {profileImage ? (
              <Image
                src={profileImage}
                alt={playerName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-indigo-200 text-indigo-600 font-medium text-lg">
                {playerName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">{playerName}</span>
            <span className="text-xs text-gray-500">Player</span>
          </div>
        </div>

        {/* Right side - Notifications and Options */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Options Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings size={20} className="text-gray-600" />
              <ChevronDown size={16} className="text-gray-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Game Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>New Game</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Difficulty Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>View Statistics</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Help</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-red-600">Exit Game</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;