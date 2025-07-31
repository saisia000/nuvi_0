import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  shape: 'circle' | 'square' | 'triangle';
}

interface ConfettiProps {
  trigger: boolean;
  onComplete: () => void;
}

const Confetti = ({ trigger, onComplete }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  const confettiColors = [
    '#FF69B4', '#9370DB', '#FFB6C1', '#DDA0DD', 
    '#FF1493', '#8A2BE2', '#BA55D3', '#FF00FF',
    '#FFD700', '#FF6347', '#00CED1', '#98FB98'
  ];

  const shapes = ['circle', 'square', 'triangle'] as const;

  useEffect(() => {
    if (!trigger) return;

    const createConfetti = () => {
      const newPieces: ConfettiPiece[] = [];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Create burst of confetti from center
      for (let i = 0; i < 100; i++) {
        const angle = (Math.PI * 2 * i) / 100;
        const velocity = Math.random() * 15 + 10;
        
        newPieces.push({
          id: i,
          x: centerX,
          y: centerY,
          size: Math.random() * 8 + 4,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 20,
          speedX: Math.cos(angle) * velocity + (Math.random() - 0.5) * 5,
          speedY: Math.sin(angle) * velocity + (Math.random() - 0.5) * 5,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }

      setPieces(newPieces);
    };

    createConfetti();

    const animate = () => {
      setPieces(prev => {
        const newPieces = prev
          .map(piece => ({
            ...piece,
            x: piece.x + piece.speedX,
            y: piece.y + piece.speedY,
            speedY: piece.speedY + 0.5, // Gravity
            speedX: piece.speedX * 0.99, // Air resistance
            rotation: piece.rotation + piece.rotationSpeed,
          }))
          .filter(piece => 
            piece.y < window.innerHeight + 100 &&
            piece.x > -100 && 
            piece.x < window.innerWidth + 100
          );

        if (newPieces.length === 0) {
          onComplete();
        }
          
        return newPieces;
      });
    };

    const animationInterval = setInterval(animate, 16);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, [trigger, onComplete]);

  const renderShape = (piece: ConfettiPiece) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${piece.x}px`,
      top: `${piece.y}px`,
      width: `${piece.size}px`,
      height: `${piece.size}px`,
      backgroundColor: piece.color,
      transform: `translate(-50%, -50%) rotate(${piece.rotation}deg)`,
      zIndex: 1000,
    };

    switch (piece.shape) {
      case 'circle':
        return <div key={piece.id} style={{ ...baseStyle, borderRadius: '50%' }} />;
      case 'square':
        return <div key={piece.id} style={baseStyle} />;
      case 'triangle':
        return (
          <div
            key={piece.id}
            style={{
              ...baseStyle,
              backgroundColor: 'transparent',
              borderLeft: `${piece.size / 2}px solid transparent`,
              borderRight: `${piece.size / 2}px solid transparent`,
              borderBottom: `${piece.size}px solid ${piece.color}`,
              width: 0,
              height: 0,
            }}
          />
        );
      default:
        return null;
    }
  };

  if (!trigger || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map(renderShape)}
    </div>
  );
};

export default Confetti;