import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretUp } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
                return
            }
            setIsVisible(false)
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-20 left-4 sm:bottom-8 sm:left-8 z-40"
                >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={scrollToTop}
                            size="lg"
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-xl hover:bg-accent/95 border-2 border-border/60 hover:border-accent/40 shadow-xl hover:shadow-2xl transition-all duration-300 p-0 group"
                            aria-label="Scroll to top"
                        >
                            <CaretUp size={20} weight="bold" className="text-foreground group-hover:text-accent-foreground transition-colors sm:size-6" />
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
