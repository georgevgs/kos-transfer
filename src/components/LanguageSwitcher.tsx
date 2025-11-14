import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe } from '@phosphor-icons/react'
import { useLanguage } from '@/i18n'

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
                return
            }
            setIsScrolled(false)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleToggle = () => {
        if (language === 'en') {
            setLanguage('el')
            return
        }
        setLanguage('en')
    }

    return (
        <motion.button
            onClick={handleToggle}
            className={`fixed top-6 right-6 sm:top-8 sm:right-24 lg:right-8 z-[60] flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isScrolled 
                    ? 'bg-card/80 backdrop-blur-xl border border-border/60 hover:border-accent/40' 
                    : 'bg-black/20 backdrop-blur-md border border-white/20 hover:border-accent/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <Globe size={20} weight="fill" className={isScrolled ? 'text-accent' : 'text-white'} />
            <span className={`text-sm font-semibold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                {language === 'en' ? 'EN' : 'ΕΛ'}
            </span>
            <div className={`h-4 w-px ${isScrolled ? 'bg-border/60' : 'bg-white/30'}`} />
            <span className={`text-sm ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                {language === 'en' ? 'ΕΛ' : 'EN'}
            </span>
        </motion.button>
    )
}
