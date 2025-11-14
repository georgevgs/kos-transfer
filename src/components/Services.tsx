import { Card } from '@/components/ui/card'
import { AirplaneTilt, Anchor, Buildings, MapPin, Umbrella, Sun } from '@phosphor-icons/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
    {
        icon: AirplaneTilt,
        title: 'Airport Transfers',
        description: 'Kos International Airport (KGS) pickups and drop-offs with flight tracking'
    },
    {
        icon: Anchor,
        title: 'Port Transfers',
        description: 'Seamless transfers to and from Kos Port for cruise passengers'
    },
    {
        icon: Buildings,
        title: 'Hotel Transfers',
        description: 'Direct transportation to any hotel or resort across the island'
    },
    {
        icon: MapPin,
        title: 'Custom Routes',
        description: 'Personalized itineraries to explore hidden gems of Kos'
    },
    {
        icon: Umbrella,
        title: 'Beach Destinations',
        description: 'Comfortable rides to Kos\' most beautiful beaches and coves'
    },
    {
        icon: Sun,
        title: 'Sightseeing Tours',
        description: 'Discover ancient ruins, castles, and scenic viewpoints'
    }
]

const locations = [
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
    'Paradise Beach'
]

export function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    
    return (
        <section ref={ref} id="services" className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-muted/10 via-muted/20 to-background relative overflow-hidden">
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
                        <span className="text-accent font-semibold tracking-[0.15em] sm:tracking-[0.15em] text-xs sm:text-xs uppercase">Our Services</span>
                    </motion.div>
                    <motion.h2 
                        className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 sm:mb-6 md:mb-7 tracking-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Comprehensive <span className="text-accent italic font-light">Coverage</span>
                    </motion.h2>
                    <motion.p 
                        className="text-base leading-[1.6] sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={getAnimationState(isInView)}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Professional transfer services to every corner of Kos island
                    </motion.p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-20 sm:mb-20 md:mb-28">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                                    <Card className="p-7 sm:p-8 md:p-9 border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 group h-full bg-card/80 backdrop-blur-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                                        <motion.div 
                                            className="mb-6 sm:mb-6 w-16 h-16 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10"
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
                            Popular <span className="text-accent italic font-light">Destinations</span>
                        </h3>
                        <p className="text-muted-foreground font-light text-base sm:text-base md:text-lg lg:text-xl px-4 leading-relaxed">
                            We serve all major locations across Kos island
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                        {locations.map((location, index) => (
                            <motion.div
                                key={location}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={getScaleAnimationState(isInView)}
                                transition={{ duration: 0.5, delay: 1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.05, x: 2 }}
                                className="flex items-center gap-3 sm:gap-3 p-5 sm:p-5 rounded-xl sm:rounded-2xl bg-background/70 hover:bg-accent/8 transition-all duration-300 border border-transparent hover:border-accent/30 cursor-default shadow-sm hover:shadow-md"
                            >
                                <MapPin size={20} weight="fill" className="text-accent flex-shrink-0" />
                                <span className="text-sm sm:text-sm font-medium text-foreground">{location}</span>
                            </motion.div>
                        ))}
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
