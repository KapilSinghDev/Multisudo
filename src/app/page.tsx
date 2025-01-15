'use client'
import React, { useState } from 'react';
import { ArrowRight, Users, Clock, Trophy } from 'lucide-react';
import FeatureCard  from '../components/Cards';
import GameModeModal from '@/components/GameModal';
export default function Home() {
  const [open , setModal] = useState(false)
  const handleModalOpen = () => {
    setModal(true)
  }
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg"></div>
          <span className="font-semibold text-sm">MultiSudo</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#how-to-play" className="text-sm text-gray-600 hover:text-gray-900">How to Play</a>
          
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
            Play Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-4 py-16 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Play Sudoku Together, Solve Puzzles Together
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            MultiSudo brings the classic puzzle game into a multiplayer experience. Challenge friends, compete in real-time, and improve your solving skills together.
          </p>
          <div className="flex items-center space-x-4">
            <button 
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
            onClick={handleModalOpen}
            >
            
              Start Playing
              <ArrowRight size={14} />
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Why Choose MultiSudo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="text-indigo-600" size={20} />}
              title="Multiplayer Experience"
              description="Play with friends in real-time, share strategies, and solve puzzles together."
            />
            <FeatureCard 
              icon={<Clock className="text-indigo-600" size={20} />}
              title="Real-time Updates"
              description="See other players' moves instantly and coordinate your solving strategy."
            />
            <FeatureCard 
              icon={<Trophy className="text-indigo-600" size={20} />}
              title="Competitive Mode"
              description="Compete against friends or join global tournaments to test your skills."
            />
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold mb-2">1. Create or Join a Game</h3>
              <p className="text-sm text-gray-600">
                Start a new game and invite friends or join an existing game with a unique code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold mb-2">2. Solve Together</h3>
              <p className="text-sm text-gray-600">
                Work collaboratively to fill the grid while following standard Sudoku rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-6 w-6 bg-indigo-600 rounded-lg"></div>
            <span className="text-sm text-gray-600">© 2025 MultiSudo</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
    <GameModeModal open={open} onOpenChange={() => setModal(false)}/>
    </>
  );
}
