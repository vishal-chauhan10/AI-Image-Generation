import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import confetti from 'canvas-confetti';

interface ScoreDisplayProps {
  score: number;
  gameOver: boolean;
  feedback: string;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, gameOver, feedback }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (gameOver && score > 70) {
      // Trigger confetti for high scores
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    // Animate score when it changes
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 }
    });
  }, [score, gameOver, controls]);

  return (
    <motion.div 
      className="glass p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Score</h3>
        <motion.div 
          className="text-2xl font-bold text-primary"
          animate={controls}
        >
          {score}%
        </motion.div>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>
      </div>
      
      {feedback && (
        <motion.p 
          className="mt-4 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {feedback}
        </motion.p>
      )}
      
      {gameOver && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-medium mb-2">Share your score:</h4>
          <div className="flex space-x-3">
            <button 
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button 
              className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </button>
            <button 
              className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
              aria-label="Download Score"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ScoreDisplay;