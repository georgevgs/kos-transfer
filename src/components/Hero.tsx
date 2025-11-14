import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { KosIslandSilhouette } from '@/components/decorative/KosElements'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { useContactLinks } from '@/hooks/useContactLinks'
import { useLanguage } from '@/i18n'

export const Hero = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    const { openWhatsAppBooking } = useWhatsApp()
    const { openPhone } = useContactLinks()
    const { t } = useLanguage()

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <KosIslandSilhouette
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] lg:w-[1200px] lg:h-[750px]"
                opacity={0.05}
            />

            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                style={{
                    backgroundImage: "url('/kos-scenery.avif')",
                    scale,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
            </motion.div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-24 sm:py-20 text-center"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="inline-block mb-7 sm:mb-8 px-6 sm:px-8 py-3 sm:py-3 border border-accent/50 rounded-full bg-accent/8 backdrop-blur-xl shadow-2xl shadow-accent/15"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-accent font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-xs uppercase">
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-[2.75rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-7 sm:mb-8 md:mb-10 tracking-tight px-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.hero.title} <span className="text-accent italic font-light">{t.hero.titleAccent}</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg leading-[1.6] sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto font-light tracking-wide px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center px-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className="w-full sm:w-auto"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-accent hover:bg-accent/95 text-accent-foreground font-semibold tracking-wide text-base sm:text-base px-10 sm:px-10 md:px-12 shadow-2xl shadow-accent/40 transition-all duration-300 hover:shadow-3xl hover:shadow-accent/50 rounded-full relative overflow-hidden group h-[60px]"
                                onClick={openWhatsAppBooking}
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <WhatsappLogo className="mr-2.5 sm:mr-2.5" weight="fill" size={22} />
                                {t.hero.bookWhatsApp}
                            </Button>
                        </motion.div>

                        <motion.div
                            className="w-full sm:w-auto"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-2 border-white/50 bg-white/8 hover:bg-white/20 text-white backdrop-blur-xl font-semibold tracking-wide text-base sm:text-base px-10 sm:px-10 md:px-12 transition-all duration-300 hover:border-white/70 rounded-full h-[60px]"
                                onClick={openPhone}
                            >
                                <Phone className="mr-2.5 sm:mr-2.5" weight="fill" size={22} />
                                {t.hero.callNow}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className="hidden sm:block absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleScrollClick}
            >
                <div className="w-7 h-11 md:w-8 md:h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-md bg-white/5 hover:border-accent/70 transition-colors duration-300">
                    <motion.div
                        className="w-1.5 h-1.5 bg-accent rounded-full shadow-xl shadow-accent/60"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

const handleScrollClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
    })
}
