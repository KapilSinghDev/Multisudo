import React, { FC } from 'react';
import { Users, User, Trophy, Brain } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DifficultyButton from './Difficultybutton';
type GameModeModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type GameOptionProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const GameModeModal: FC<GameModeModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center">Choose Game Mode</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Single Player Section */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-indigo-600 transition-colors cursor-pointer group">
            <div className="mb-4">
              <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                <User size={16} className="text-indigo-600" />
                Single Player
              </h3>
              <p className="text-sm text-gray-600">Challenge yourself and improve your skills</p>
            </div>
            
            <div className="space-y-3">
              <GameOption 
                icon={<Brain size={14} />}
                title="Practice Mode"
                description="Play at your own pace"
              />
              <GameOption 
                icon={<Trophy size={14} />}
                title="Time Trial"
                description="Race against the clock"
              />
            </div>
          </div>

          {/* Multiplayer Section */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-indigo-600 transition-colors cursor-pointer group">
            <div className="mb-4">
              <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                <Users size={16} className="text-indigo-600" />
                Multiplayer
              </h3>
              <p className="text-sm text-gray-600">Play together with friends and competitors</p>
            </div>

            <div className="space-y-3">
              <GameOption 
                icon={<Users size={14} />}
                title="Co-op Mode"
                description="Solve puzzles together"
              />
              <GameOption 
                icon={<Trophy size={14} />}
                title="Competitive"
                description="Race against others"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg mt-4">
          <h4 className="text-sm font-semibold mb-2">Difficulty Selection</h4>
          <div className="flex gap-2">
            <DifficultyButton level="Easy"  />
            <DifficultyButton level="Medium" active={true}/>
            <DifficultyButton level="Hard" />
            <DifficultyButton level="Expert" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const GameOption: FC<GameOptionProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50">
    <div className="text-indigo-600">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  </div>
);


export default GameModeModal;
