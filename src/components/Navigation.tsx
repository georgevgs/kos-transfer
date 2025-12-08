import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/i18n'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { useFocusTrap, useRestoreFocus } from '@/hooks/useFocusManagement'

type NavLink = {
    href: string
    label: string
}

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t, language, setLanguage } = useLanguage()
    const { openWhatsAppBooking } = useWhatsApp()
    const mobileMenuRef = useFocusTrap(isOpen)
    
    useRestoreFocus(isOpen)

    const navLinks: NavLink[] = [
        { href: '#fleet', label: t.nav.fleet },
        { href: '#services', label: t.nav.services },
        { href: '#about', label: t.nav.about },
        { href: '#testimonials', label: t.nav.testimonials },
        { href: '#faq', label: t.nav.faq },
    ]

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            return
        }
        document.body.style.overflow = ''
    }, [isOpen])

    const handleNavClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleLanguageToggle = () => {
        const newLanguage = language === 'en' ? 'el' : 'en'
        setLanguage(newLanguage)
    }

    const getLanguageLabel = (): string => {
        if (language === 'en') {
            return 'Switch to Greek'
        }
        return 'Αλλαγή σε Αγγλικά'
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/60' : 'bg-black/20 backdrop-blur-md'
                }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <div className="flex-shrink-0">
                            <motion.a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}
                                className="flex flex-col"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="VIP Tour Transfer - Go to homepage"
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                                        isScrolled ? 'text-accent' : 'text-accent'
                                    }`}>
                                        VIP Tour
                                    </span>
                                    <span className={`text-lg sm:text-xl md:text-2xl font-light transition-colors ${
                                        isScrolled ? 'text-foreground' : 'text-white'
                                    }`}>
                                        Transfer
                                    </span>
                                </div>
                                <span className={`text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors ${
                                    isScrolled ? 'text-muted-foreground' : 'text-white/70'
                                }`}>
                                    Georgia Kommata
                                </span>
                            </motion.a>
                        </div>

                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <nav className="flex items-center gap-8" aria-label="Primary navigation links">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick(link.href)
                                        }}
                                        className={`text-sm font-medium transition-colors relative group whitespace-nowrap ${
                                            isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-white/90 hover:text-accent'
                                        }`}
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" aria-hidden="true" />
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="hidden lg:flex items-center justify-end gap-4">
                            <motion.button
                                onClick={handleLanguageToggle}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                    isScrolled
                                        ? 'bg-card/80 border border-border/60 hover:border-accent/40'
                                        : 'bg-black/20 border border-white/20 hover:border-accent/40'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={getLanguageLabel()}
                            >
                                <Globe size={18} weight="fill" className={isScrolled ? 'text-accent' : 'text-white'} aria-hidden="true" />
                                <span className={`text-sm font-semibold ${
                                    isScrolled ? 'text-foreground' : 'text-white'
                                }`}>
                                    {language === 'en' ? 'EN' : 'ΕΛ'}
                                </span>
                                <div className={`h-3 w-px ${
                                    isScrolled ? 'bg-border/60' : 'bg-white/30'
                                }`} aria-hidden="true" />
                                <span className={`text-sm ${
                                    isScrolled ? 'text-muted-foreground' : 'text-white/70'
                                }`}>
                                    {language === 'en' ? 'ΕΛ' : 'EN'}
                                </span>
                            </motion.button>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={openWhatsAppBooking}
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                                    aria-label="Book transfer now"
                                >
                                    {t.nav.booking}
                                </Button>
                            </motion.div>
                        </div>

                        <div className="flex lg:hidden">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2.5 rounded-xl transition-colors ${
                                    isScrolled 
                                        ? 'hover:bg-accent/10' 
                                        : 'hover:bg-white/10'
                                }`}
                                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isOpen}
                                aria-controls="mobile-menu"
                            >
                                {isOpen ? (
                                    <X size={24} weight="bold" className={isScrolled ? 'text-foreground' : 'text-white'} aria-hidden="true" />
                                ) : (
                                    <List size={24} weight="bold" className={isScrolled ? 'text-foreground' : 'text-white'} aria-hidden="true" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                            aria-hidden="true"
                        />
                        <motion.div
                            id="mobile-menu"
                            ref={mobileMenuRef as React.RefObject<HTMLDivElement>}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] bg-background border-l border-border/60 shadow-2xl z-50 lg:hidden flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation menu"
                        >
                            <div className="p-5 sm:p-6 border-b border-border/40">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-accent">Menu</span>
                                        <span className="text-xs text-muted-foreground">VIP Tour Transfer</span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-xl hover:bg-accent/10 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={22} weight="bold" className="text-foreground" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                                <nav className="space-y-1" aria-label="Mobile navigation links">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleNavClick(link.href)
                                            }}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="block px-4 py-3.5 rounded-xl text-[15px] font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors active:bg-accent/15"
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-5 sm:p-6 border-t border-border/40 space-y-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.25 }}
                                >
                                    <button
                                        onClick={handleLanguageToggle}
                                        className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-muted/50 border border-border/60 hover:border-accent/40 transition-all duration-300 active:bg-muted"
                                        aria-label={getLanguageLabel()}
                                    >
                                        <Globe size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        <span className="text-sm font-medium text-foreground">
                                            {language === 'en' ? 'Ελληνικά' : 'English'}
                                        </span>
                                    </button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <Button
                                        onClick={() => {
                                            setIsOpen(false)
                                            openWhatsAppBooking()
                                        }}
                                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 rounded-xl shadow-lg text-[15px]"
                                        aria-label="Book transfer now"
                                    >
                                        {t.nav.booking}
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
