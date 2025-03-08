export interface GameState {
  targetImage: string | null;
  generatedImage: string | null;
  prompt: string;
  attempts: number;
  maxAttempts: number;
  score: number;
  loading: boolean;
  gameOver: boolean;
  feedback: string;
  error: string | null;
  highScores: HighScore[];
}

export interface HighScore {
  id: string;
  score: number;
  date: string;
}

export interface ParticleProps {
  id: number;
  size: number;
  position: {
    x: number;
    y: number;
  };
  color: string;
}