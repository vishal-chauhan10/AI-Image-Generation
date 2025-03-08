import React from 'react';
import { motion } from 'framer-motion';

interface GameOverProps {
  score: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, onRestart }) => {
  let message = "Try again!";
  
  if (score >= 90) {
    message = "Incredible! You're a master!";
  } else if (score >= 70) {
    message = "Great job! You have a good eye!";
  } else if (score >= 50) {
    message = "Not bad! Keep practicing!";
  }

  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="glass p-8 rounded-xl max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-2">Game Over</h2>
        <p className="text-gray-300 mb-6">{message}</p>
        
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
          <p className="text-gray-400">Final Score</p>
        </div>
        
        <button
          onClick={onRestart}
          className="btn-primary w-full"
        >
          Play Again
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GameOver;