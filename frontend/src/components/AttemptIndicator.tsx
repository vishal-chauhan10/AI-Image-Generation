import React from 'react';
import { motion } from 'framer-motion';

interface AttemptIndicatorProps {
  attempts: number;
  maxAttempts: number;
}

const AttemptIndicator: React.FC<AttemptIndicatorProps> = ({ attempts, maxAttempts }) => {
  return (
    <div className="flex items-center space-x-2 my-4">
      <span className="text-sm text-gray-400 mr-2">Attempts:</span>
      {Array.from({ length: maxAttempts }).map((_, index) => {
        const isActive = index === attempts;
        const isUsed = index < attempts;
        
        return (
          <motion.div
            key={index}
            className={`attempt-indicator ${isActive ? 'active' : isUsed ? 'used' : 'unused'}`}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: isActive ? 1.2 : 1, 
              opacity: isActive ? 1 : isUsed ? 0.7 : 0.5 
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
      <div className="tooltip ml-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <span className="tooltip-text">You have {maxAttempts - attempts} attempts remaining</span>
      </div>
    </div>
  );
};

export default AttemptIndicator;