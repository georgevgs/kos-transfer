import { motion } from 'framer-motion'

export function GreekBorder() {
    return (
        <div className="w-full h-3 relative overflow-hidden">
            <div className="flex items-center h-full border-t-2 border-b-2 border-accent/30">
                <div className="flex-1 flex">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-3 border-r-2 border-accent/30 flex-shrink-0"
                            style={{
                                borderBottom: i % 2 === 0 ? '2px solid' : 'none',
                                borderTop: i % 2 === 1 ? '2px solid' : 'none',
                                borderColor: 'oklch(0.70 0.15 75 / 0.3)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export function GreekCorner({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
    const positionClasses = {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0 rotate-90',
        'bottom-left': 'bottom-0 left-0 -rotate-90',
        'bottom-right': 'bottom-0 right-0 rotate-180',
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
        >
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-accent/20">
                <path
                    d="M0,20 L20,20 L20,0 M20,20 L20,40 L40,40 L40,20 L60,20 L60,0 M60,20 L60,60 L80,60 L80,40 L100,40 L100,20 L120,20 L120,0"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="square"
                />
            </svg>
        </motion.div>
    )
}

export function GreekWavePattern() {
    return (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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

export function GreekMeanderPattern() {
    return (
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="meander" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <g stroke="currentColor" strokeWidth="3" fill="none" className="text-accent">
                            <path d="M0,30 L30,30 L30,0 M30,30 L30,60 L60,60 L60,30 L90,30 L90,0 M90,30 L90,90 L60,90 L60,60 M60,90 L30,90 L30,60 M30,90 L0,90 L0,60" />
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#meander)" />
            </svg>
        </div>
    )
}

export function GreekColumn() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
        >
            <svg width="60" height="200" viewBox="0 0 60 200" className="text-accent/15">
                {/* Capital */}
                <rect x="0" y="0" width="60" height="20" fill="currentColor" />
                <rect x="5" y="20" width="50" height="5" fill="currentColor" />
                
                {/* Shaft with flutes */}
                <rect x="10" y="25" width="40" height="150" fill="currentColor" />
                <path d="M15,25 L15,175" stroke="oklch(0.99 0.002 240)" strokeWidth="2" />
                <path d="M22,25 L22,175" stroke="oklch(0.99 0.002 240)" strokeWidth="2" />
                <path d="M29,25 L29,175" stroke="oklch(0.99 0.002 240)" strokeWidth="2" />
                <path d="M36,25 L36,175" stroke="oklch(0.99 0.002 240)" strokeWidth="2" />
                <path d="M43,25 L43,175" stroke="oklch(0.99 0.002 240)" strokeWidth="2" />
                
                {/* Base */}
                <rect x="5" y="175" width="50" height="5" fill="currentColor" />
                <rect x="0" y="180" width="60" height="20" fill="currentColor" />
            </svg>
        </motion.div>
    )
}
