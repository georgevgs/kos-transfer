import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type PageTransitionProps = {
    children: ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    )
}
