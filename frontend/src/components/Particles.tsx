import React, { useEffect, useState } from 'react';
import { ParticleProps } from '../types';

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    // Create particles
    const particleCount = 8;
    const newParticles: ParticleProps[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 200 + 100,
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
        color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent',
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle bg-${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.position.x}px`,
            top: `${particle.position.y}px`,
            animationDelay: `${particle.id * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;