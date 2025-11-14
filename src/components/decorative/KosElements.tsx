export function KosIslandSilhouette({ className = '', opacity = 0.03 }: { className?: string; opacity?: number }) {
    return (
        <div className={`absolute pointer-events-none ${className}`} style={{ opacity }}>
            <svg
                viewBox="0 0 1000 600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-accent"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Simplified Kos Island Silhouette */}
                <path
                    d="M 100,350 Q 150,320 200,340 L 250,330 Q 280,310 320,330 L 380,320 Q 420,300 460,320 L 520,310 Q 560,290 600,315 L 650,305 Q 690,285 730,310 L 780,300 Q 820,280 860,305 L 900,290 L 920,310 Q 930,340 920,370 L 900,390 Q 880,420 850,410 L 800,420 Q 760,440 720,425 L 670,435 Q 630,455 590,440 L 540,450 Q 500,470 460,455 L 410,465 Q 370,485 330,470 L 280,480 Q 240,500 200,485 L 150,495 Q 110,510 80,490 L 60,470 Q 50,440 60,410 L 80,380 Z"
                    fill="currentColor"
                    className="text-accent"
                />
            </svg>
        </div>
    )
}

export function GreekWavePattern() {
    return (
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="waves" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                        <path
                            d="M0,25 Q12.5,10 25,25 T50,25 Q62.5,10 75,25 T100,25"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className="text-accent"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
        </div>
    )
}
