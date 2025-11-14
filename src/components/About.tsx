import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Clock, Shield, Star } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { KosIslandSilhouette, GreekWavePattern } from '@/components/decorative/KosElements'

type Feature = {
    icon: typeof Star
    title: string
    description: string
}

const FEATURES: Feature[] = [
    {
        icon: Star,
        title: 'Premium Service',
        description: 'Luxury vehicles maintained to the highest standards',
    },
    {
        icon: Shield,
        title: 'Fully Licensed',
        description: 'Certified drivers with comprehensive insurance coverage',
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Round-the-clock service for early flights and late arrivals',
    },
    {
        icon: CheckCircle,
        title: 'Guaranteed Reliability',
        description: 'Punctual pickups and flight tracking for peace of mind',
    },
]

export const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section
            ref={ref}
            id="about"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden"
        >
            <KosIslandSilhouette
                className="top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[700px] h-[435px] lg:w-[1000px] lg:h-[625px]"
                opacity={0.03}
            />

            <GreekWavePattern />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent opacity-60" />
            <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-16 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={getSlideAnimationState(isInView)}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            className="inline-block mb-5 sm:mb-6 md:mb-7 px-6 sm:px-6 md:px-7 py-2.5 sm:py-2.5 border border-accent/40 rounded-full bg-accent/8 backdrop-blur-xl shadow-lg shadow-accent/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={getScaleAnimationState(isInView)}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-accent font-semibold tracking-[0.15em] sm:tracking-[0.15em] text-xs sm:text-xs uppercase">
                                Why Choose Us
                            </span>
                        </motion.div>
                        <motion.h2
                            className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-7 sm:mb-8 md:mb-10 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={getAnimationState(isInView)}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Experience the <span className="text-accent italic font-light">Difference</span>
                        </motion.h2>
                        <motion.div
                            className="space-y-6 sm:space-y-6 md:space-y-7"
                            initial={{ opacity: 0, y: 20 }}
                            animate={getAnimationState(isInView)}
                            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="text-base leading-[1.7] sm:text-lg md:text-xl text-muted-foreground font-light">
                                At Kos Elite Transfers, we understand that your journey begins the moment you arrive.
                                With our premium fleet and professional service, we ensure every transfer is smooth,
                                comfortable, and memorable.
                            </p>
                            <p className="text-base leading-[1.7] sm:text-lg md:text-xl text-muted-foreground font-light">
                                Whether you're visiting for business or pleasure, traveling solo or with a group, we
                                provide tailored transportation solutions that match your needs and exceed your
                                expectations.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={getSlideRightAnimationState(isInView)}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
                    >
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={getAnimationState(isInView)}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5 + index * 0.15,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Card className="p-7 sm:p-7 md:p-8 border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 h-full group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                                            <motion.div
                                                className="mb-6 sm:mb-6 w-16 h-16 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10"
                                                whileHover={{ scale: 1.15, rotate: 5 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <Icon size={32} weight="fill" className="text-accent" />
                                            </motion.div>
                                            <h3 className="text-lg sm:text-lg font-semibold text-foreground mb-4 sm:mb-4 tracking-tight relative z-10">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed sm:text-sm text-muted-foreground font-light relative z-10">
                                                {feature.description}
                                            </p>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
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

const getSlideAnimationState = (isInView: boolean) => {
    if (isInView) {
        return { opacity: 1, x: 0 }
    }
    return {}
}

const getSlideRightAnimationState = (isInView: boolean) => {
    if (isInView) {
        return { opacity: 1, x: 0 }
    }
    return {}
}
