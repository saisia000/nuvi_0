import { useEffect, useState } from 'react';

interface Flower {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
    fallSpeed: number;
    swaySpeed: number;
    swayAmount: number;
    opacity: number;
}

const FallingFlowers = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);

    const flowerColors = [
        '#FF69B4', // Pink
        '#9370DB', // Purple
        '#FFB6C1', // Light Pink
        '#DDA0DD', // Plum
        '#FF1493', // Deep Pink
        '#8A2BE2', // Blue Violet
        '#BA55D3', // Medium Orchid
        '#FF00FF', // Magenta
    ];

    const FlowerShape = ({ color, size }: { color: string; size: number }) => (
        <svg width={size} height={size} viewBox="0 0 100 100">
            <g>
                {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                    <ellipse
                        key={i}
                        cx="50"
                        cy="25"
                        rx="12"
                        ry="20"
                        fill={color}
                        stroke="#2D1B69"
                        strokeWidth="2"
                        transform={`rotate(${i * 45} 50 50)`}
                    />
                ))}
                <circle cx="50" cy="50" r="15" fill={color} stroke="#2D1B69" strokeWidth="2" />
                <circle cx="45" cy="45" r="2" fill="#2D1B69" />
                <circle cx="55" cy="45" r="2" fill="#2D1B69" />
                <path d="M 42 55 Q 50 62 58 55" stroke="#2D1B69" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
        </svg>
    );

    useEffect(() => {
        const initialFlowers: Flower[] = [];
        const flowersCount = Math.floor(window.innerWidth / 20); // Dense rain

        for (let i = 0; i < flowersCount; i++) {
            initialFlowers.push({
                id: i,
                x: (i * (window.innerWidth / flowersCount)) + (Math.random() * 20 - 10),
                y: -50 - Math.random() * window.innerHeight * 2,
                size: Math.random() * 20 + 10,
                color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                fallSpeed: Math.random() * 1 + 0.5,
                swaySpeed: Math.random() * 0.01 + 0.005,
                swayAmount: Math.random() * 15 + 5,
                opacity: 0.6 + Math.random() * 0.4,
            });
        }

        setFlowers(initialFlowers);

        const interval = setInterval(() => {
            setFlowers(prev =>
                prev
                    .map(flower => ({
                        ...flower,
                        y: flower.y + flower.fallSpeed,
                        x: flower.x + Math.sin(flower.y * flower.swaySpeed) * 0.5,
                        rotation: flower.rotation + flower.rotationSpeed,
                    }))
                    .filter(flower => flower.y < window.innerHeight + 100)
            );
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {flowers.map(flower => (
                <div
                    key={flower.id}
                    style={{
                        position: 'absolute', // 👈 THIS is the fix!
                        left: `${flower.x}px`,
                        top: `${flower.y}px`,
                        transform: `translate(-50%, -50%) rotate(${flower.rotation}deg)`,
                        opacity: flower.opacity,
                        zIndex: 100,
                    }}
                >
                    <FlowerShape color={flower.color} size={flower.size} />
                </div>
            ))}
        </div>
    );
};

export default FallingFlowers;
