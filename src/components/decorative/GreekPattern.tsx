import type { ComponentProps } from 'react'

interface GreekPatternProps extends ComponentProps<'div'> {
    variant?: 'meander' | 'wave'
    opacity?: number
}

export function GreekPattern({ variant = 'meander', opacity = 0.05, className = '', ...props }: GreekPatternProps) {
    if (variant === 'wave') {
        return (
            <div className={`absolute inset-0 pointer-events-none ${className}`} {...props}>
                <div
                    className="absolute inset-0"
                    style={{
                        opacity,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,15 Q15,0 30,15 T60,15' stroke='%23d4af37' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                    }}
                />
            </div>
        )
    }

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`} {...props}>
            <div
                className="absolute inset-0"
                style={{
                    opacity,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 L20,20 L20,0 L40,0 L40,40 L0,40 L0,60 L60,60 L60,0 L80,0 L80,80 L0,80 L0,20' stroke='%23d4af37' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />
        </div>
    )
}
