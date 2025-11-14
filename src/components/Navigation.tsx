import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/i18n'
import { useWhatsApp } from '@/hooks/useWhatsApp'

type NavLink = {
    href: string
    label: string
}

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t } = useLanguage()
    const { openWhatsAppBooking } = useWhatsApp()

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

    const handleNavClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
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
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 items-center h-20">
                        {/* Logo - Left */}
                        <div className="flex justify-start">
                            <motion.a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                }}
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                                    isScrolled ? 'text-accent' : 'text-accent'
                                }`}>
                                    Kos Elite
                                </span>
                                <span className={`text-xl sm:text-2xl font-light transition-colors ${
                                    isScrolled ? 'text-foreground' : 'text-white'
                                }`}>
                                    Transfers
                                </span>
                            </motion.a>
                        </div>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="flex items-center gap-8">
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
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Book Now Button - Right */}
                        <div className="hidden lg:flex items-center justify-end">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={openWhatsAppBooking}
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                                >
                                    {t.nav.booking}
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden justify-end">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <X size={28} weight="bold" className={isScrolled ? 'text-foreground' : 'text-white'} />
                                ) : (
                                    <List size={28} weight="bold" className={isScrolled ? 'text-foreground' : 'text-white'} />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
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
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-background border-l border-border/60 shadow-2xl z-50 lg:hidden"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-xl font-bold text-accent">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} weight="bold" className="text-foreground" />
                                    </button>
                                </div>

                                <nav className="space-y-2">
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
                                            className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="mt-8"
                                >
                                    <Button
                                        onClick={() => {
                                            setIsOpen(false)
                                            openWhatsAppBooking()
                                        }}
                                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-xl shadow-lg"
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
