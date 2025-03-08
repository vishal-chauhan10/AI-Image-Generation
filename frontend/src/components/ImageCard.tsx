import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Image as ImageIcon } from 'lucide-react';

interface ImageCardProps {
  image: string | GeneratedImageData | null;
  title: string;
  loading?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, loading = false }) => {
  const imageUrl = typeof image === 'string' ? image : image?.imageUrl;

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 border-b border-white/10">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="relative aspect-square w-full overflow-hidden bg-card/50">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="skeleton w-full h-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-primary" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        ) : imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <ImageIcon size={32} className="text-gray-400" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageCard;