import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeaderProps = {
    badge: string
    title: ReactNode
    description?: string
    isInView: boolean
}

export const SectionHeader = ({ badge, title, description, isInView }: SectionHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={getAnimationState(isInView)}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14 sm:mb-16 md:mb-24"
        >
            <motion.div
                className="inline-block mb-5 sm:mb-6 md:mb-7 px-6 sm:px-6 md:px-7 py-2.5 sm:py-2.5 border border-accent/40 rounded-full bg-accent/8 backdrop-blur-xl shadow-lg shadow-accent/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={getScaleAnimationState(isInView)}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-accent font-semibold tracking-wide text-xs sm:text-sm">
                    {badge}
                </span>
            </motion.div>
            <motion.h2
                className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 sm:mb-6 md:mb-7 tracking-tight px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={getAnimationState(isInView)}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    className="text-base leading-[1.6] sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    )
}

const getAnimationState = (isInView: boolean) => {
    if (isInView) {
        return { opacity: 1, y: 0 }
    }
    return {}
}

const getScaleAnimationState = (isInView: boolean) => {
    if (isInView) {
        return { opacity: 1, scale: 1 }
    }
    return {}
}
