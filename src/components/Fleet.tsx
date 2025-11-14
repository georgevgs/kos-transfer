import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Briefcase, CheckCircle, Shield, Users, WhatsappLogo } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { KosIslandSilhouette, GreekWavePattern } from '@/components/decorative/KosElements'

const WHATSAPP_NUMBER = '+306900000000'
const WHATSAPP_MESSAGE = 'Hello! I would like to book a transfer in Kos.'

const vehicles = [
    {
        name: 'Luxury Sedan',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070',
        capacity: 4,
        luggage: 3,
        features: ['Premium Comfort', 'Air Conditioning', 'Professional Driver', 'Wi-Fi Available'],
        description: 'Perfect for couples or small groups seeking elegant transportation around Kos',
    },
    {
        name: 'Mercedes Van',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070',
        capacity: 8,
        luggage: 8,
        features: ['Spacious Interior', 'Climate Control', 'Extra Luggage Space', 'Group Transport'],
        description: 'Ideal for families and larger groups exploring the beaches of Kos',
    },
]

export function Fleet() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section
            ref={ref}
            id="fleet"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden"
        >
            {/* Kos Island Silhouette */}
            <KosIslandSilhouette 
                className="top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[600px] h-[375px] lg:w-[900px] lg:h-[560px]" 
                opacity={0.04}
            />
            
            {/* Greek Wave Pattern */}
            <GreekWavePattern />
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent opacity-60" />
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

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
                        <span className="text-accent font-semibold tracking-[0.15em] sm:tracking-[0.15em] text-xs sm:text-xs uppercase">
                            Our Fleet
                        </span>
                    </motion.div>
                    <motion.h2
                        className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 sm:mb-6 md:mb-7 tracking-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Choose Your <span className="text-accent italic font-light">Luxury Ride</span>
                    </motion.h2>
                    <motion.p
                        className="text-base leading-[1.6] sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Select from our premium vehicles tailored to your needs
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 lg:gap-14">
                    {vehicles.map((vehicle, index) => {
                        return (
                            <motion.div
                                key={vehicle.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.9, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Card className="overflow-hidden border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/15 group bg-card/80 backdrop-blur-sm">
                                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                                        <motion.img
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                        <motion.div
                                            className="absolute bottom-6 sm:bottom-6 md:bottom-7 left-5 sm:left-6 md:left-7 right-5 sm:right-6 md:right-7"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={getAnimationState(isInView)}
                                            transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
                                        >
                                            <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-4 tracking-tight">
                                                {vehicle.name}
                                            </h3>
                                            <div className="flex gap-2.5 sm:gap-3 flex-wrap">
                                                <Badge className="bg-accent/95 text-accent-foreground border-0 px-4 sm:px-4 py-2 sm:py-2 font-semibold shadow-xl shadow-accent/30 hover:bg-accent transition-colors text-sm sm:text-sm">
                                                    <Users className="mr-2 sm:mr-2" size={18} weight="fill" />
                                                    {vehicle.capacity} Passengers
                                                </Badge>
                                                <Badge className="bg-accent/95 text-accent-foreground border-0 px-4 sm:px-4 py-2 sm:py-2 font-semibold shadow-xl shadow-accent/30 hover:bg-accent transition-colors text-sm sm:text-sm">
                                                    <Briefcase className="mr-2 sm:mr-2" size={18} weight="fill" />
                                                    {vehicle.luggage} Bags
                                                </Badge>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="p-7 sm:p-8 md:p-9 bg-card/95 backdrop-blur-sm">
                                        <p className="text-muted-foreground mb-7 sm:mb-7 md:mb-9 leading-relaxed text-base sm:text-lg font-light">
                                            {vehicle.description}
                                        </p>

                                        <div className="mb-7 sm:mb-8 md:mb-9">
                                            <h4 className="font-semibold text-foreground mb-5 sm:mb-5 flex items-center text-lg sm:text-lg">
                                                <Shield
                                                    className="mr-2.5 sm:mr-2.5 text-accent"
                                                    size={22}
                                                    weight="fill"
                                                />
                                                Premium Features
                                            </h4>
                                            <ul className="grid grid-cols-1 gap-4 sm:gap-4">
                                                {vehicle.features.map((feature) => {
                                                    return (
                                                        <motion.li
                                                            key={feature}
                                                            className="text-base sm:text-base text-muted-foreground flex items-center group/item"
                                                            whileHover={{ x: 4 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <CheckCircle
                                                                className="mr-3 sm:mr-3 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform"
                                                                size={20}
                                                                weight="fill"
                                                            />
                                                            {feature}
                                                        </motion.li>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 text-base sm:text-base rounded-2xl relative overflow-hidden group/btn h-[56px]"
                                                onClick={handleBookingClick}
                                            >
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                                <WhatsappLogo className="mr-2.5 sm:mr-2.5" weight="fill" size={22} />
                                                Book This Vehicle
                                            </Button>
                                        </motion.div>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
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

const handleBookingClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
}
