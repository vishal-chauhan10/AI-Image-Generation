export interface ParticleProps {
  id: number;
  size: number;
  position: {
    x: number;
    y: number;
  };
  color: 'primary' | 'secondary' | 'accent';
}

export interface GeneratedImageData {
  imageUrl: string;
  prompt?: string;
}

export interface HighScore {
  id: string;
  score: number;
  date: string;
}

export interface CloudVisionResponse {
  responses: [{
    labelAnnotations: {
      description: string;
      score: number;
    }[];
    imagePropertiesAnnotation: {
      dominantColors: {
        colors: {
          color: {
            red: number;
            green: number;
            blue: number;
          };
          score: number;
        }[];
      };
    };
  }];
} 