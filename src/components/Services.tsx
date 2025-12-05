import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { AirplaneTilt, Anchor, Buildings, MapPin, Sun, Umbrella } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { KosIslandSilhouette, GreekWavePattern } from '@/components/decorative/KosElements'
import { useLanguage } from '@/i18n'

type ServiceIcon = typeof AirplaneTilt

const SERVICE_ICONS: ServiceIcon[] = [AirplaneTilt, Anchor, Buildings, MapPin, Umbrella, Sun]

const LOCATIONS: string[] = [
    'Kos Town',
    'Kardamena',
    'Kefalos',
    'Tigaki',
    'Mastichari',
    'Marmari',
    'Psalidi',
    'Lambi',
    'Antimachia',
    'Pyli',
    'Zia Village',
    'Paradise Beach',
]

export const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const { t } = useLanguage()

    return (
        <section
            ref={ref}
            id="services"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-muted/10 via-muted/20 to-background relative overflow-hidden"
        >
            <KosIslandSilhouette
                className="top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 w-[600px] h-[375px] lg:w-[900px] lg:h-[560px]"
                opacity={0.04}
            />

            <GreekWavePattern />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
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
                            {t.services.badge}
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 sm:mb-6 md:mb-7 tracking-tight px-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.services.title} <span className="text-accent italic font-light">{t.services.titleAccent}</span>
                    </motion.h2>
                    <motion.p
                        className="text-base leading-[1.6] sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {t.services.subtitle}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-20 sm:mb-20 md:mb-28">
                    {t.services.items.map((service, index) => {
                        const Icon = SERVICE_ICONS[index]
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Card className="p-7 sm:p-8 md:p-9 border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 group h-full bg-card/80 backdrop-blur-sm relative overflow-hidden text-center">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                                        <motion.div
                                            className="mb-6 sm:mb-6 w-16 h-16 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10 mx-auto"
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <Icon size={32} weight="fill" className="text-accent" />
                                        </motion.div>
                                        <h3 className="text-xl sm:text-xl font-semibold text-foreground mb-4 sm:mb-4 tracking-tight relative z-10">
                                            {service.title}
                                        </h3>
                                        <p className="text-base sm:text-base text-muted-foreground leading-relaxed font-light relative z-10">
                                            {service.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-7 sm:p-8 md:p-12 lg:p-16 border border-border/60 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl" />

                    <div className="text-center mb-10 sm:mb-10 md:mb-12 relative z-10">
                        <h3 className="text-[1.75rem] leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-4 md:mb-5 tracking-tight">
                            {t.services.popularDestinations}{' '}
                            <span className="text-accent italic font-light">{t.services.popularDestinationsAccent}</span>
                        </h3>
                        <p className="text-muted-foreground font-light text-base sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
                            {t.services.destinationsSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 relative z-10">
                        {LOCATIONS.map((location, index) => {
                            return (
                                <FlipBoardItem
                                    key={location}
                                    location={location}
                                    index={index}
                                    isInView={isInView}
                                />
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
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

type FlipBoardItemProps = {
    location: string
    index: number
    isInView: boolean
}

const FlipBoardItem = ({ location, index, isInView }: FlipBoardItemProps) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [displayText, setDisplayText] = useState('')

    useEffect(() => {
        if (!isInView) {
            return
        }

        const startDelay = 800 + index * 150
        const flipDuration = 80
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        const timer = setTimeout(() => {
            setIsFlipped(true)
            let currentIndex = 0
            let flipCount = 0
            const maxFlips = 4

            const flipInterval = setInterval(() => {
                if (flipCount < maxFlips) {
                    const randomText = location
                        .split('')
                        .map((char, i) => {
                            if (i < currentIndex) {
                                return location[i]
                            }
                            if (char === ' ') {
                                return ' '
                            }
                            return characters[Math.floor(Math.random() * characters.length)]
                        })
                        .join('')
                    setDisplayText(randomText)
                    flipCount++
                } else {
                    if (currentIndex < location.length) {
                        currentIndex++
                        flipCount = 0
                    } else {
                        clearInterval(flipInterval)
                        setDisplayText(location)
                    }
                }
            }, flipDuration)

            return () => {
                clearInterval(flipInterval)
            }
        }, startDelay)

        return () => {
            clearTimeout(timer)
        }
    }, [isInView, location, index])

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={isFlipped ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
            style={{ perspective: '1000px' }}
        >
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-700 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span
                        className="text-xs sm:text-sm font-mono font-bold tracking-wider text-amber-400 uppercase"
                        style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
                    >
                        {displayText || '\u00A0'.repeat(location.length)}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
