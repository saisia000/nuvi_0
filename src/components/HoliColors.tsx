import { useEffect, useState } from 'react';

interface PowderParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const HoliColors = () => {
  const [particles, setParticles] = useState<PowderParticle[]>([]);

  const holiColors = [
    '#FF0040', '#FF6B00', '#FFD700', '#00FF00',
    '#00BFFF', '#8A2BE2', '#FF1493', '#00FFFF'
  ];

  useEffect(() => {
    const createPowderThrow = (fromLeft: boolean) => {
      const newParticles: PowderParticle[] = [];
      let particleId = Date.now() + Math.random() * 1000;

      const startY = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.2;
      const color = holiColors[Math.floor(Math.random() * holiColors.length)];

      for (let i = 0; i < 200; i++) {
        const startX = fromLeft ? -40 : window.innerWidth + 40;
        const angleSpread = (Math.random() - 0.5) * 0.6;
        const baseSpeed = 12 + Math.random() * 3; // 🌟 Just a little more push

        const speedX = (fromLeft ? 1 : -1) * baseSpeed * Math.cos(angleSpread);
        const speedY = baseSpeed * Math.sin(angleSpread) - Math.random() * 2;

        newParticles.push({
          id: particleId++,
          x: startX + (Math.random() - 0.5) * 50,
          y: startY + (Math.random() - 0.5) * 80,
          size: Math.random() * 1.5 + 0.5,
          color,
          speedX,
          speedY,
          opacity: 0.8 + Math.random() * 0.15, // 🌈 A little more vibrant
          life: 0,
          maxLife: Math.random() * 120 + 140, // Slightly longer travel time
        });
      }

      return newParticles;
    };

    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => {
            const lifeRatio = p.life / p.maxLife;
            const opacity = p.opacity * (1 - Math.pow(lifeRatio, 1.7));
            return {
              ...p,
              x: p.x + p.speedX,
              y: p.y + p.speedY,
              speedX: p.speedX * 0.985,
              speedY: p.speedY + 0.1,
              opacity: Math.max(0, opacity),
              life: p.life + 1,
            };
          })
          .filter(p =>
            p.life < p.maxLife &&
            p.opacity > 0.03 &&
            p.x > -100 &&
            p.x < window.innerWidth + 100
          )
      );
    };

    const throwInterval = setInterval(() => {
      const action = Math.random();
      const burstLeft = action < 0.5 || action > 0.85;
      const burstRight = action > 0.3;

      if (burstLeft) {
        setParticles(prev => [...prev, ...createPowderThrow(true)]);
      }
      if (burstRight) {
        setParticles(prev => [...prev, ...createPowderThrow(false)]);
      }
    }, 300);

    const animationInterval = setInterval(animate, 16);

    return () => {
      clearInterval(throwInterval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${p.size * 1}px)`, // Slightly tighter blur
            boxShadow: `0 0 ${p.size * 8}px ${p.color}`, // Softer glow
            zIndex: 5,
          }}
        />
      ))}
    </div>
  );
};

export default HoliColors;
