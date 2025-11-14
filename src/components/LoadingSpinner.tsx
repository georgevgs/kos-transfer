import { motion } from 'framer-motion'

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <motion.div
                className="relative w-16 h-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full" />
            </motion.div>
        </div>
    )
}
