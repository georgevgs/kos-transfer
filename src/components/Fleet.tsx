import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, BadgeCheck, Shield, Users } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { KosIslandSilhouette, GreekWavePattern } from '@/components/decorative/KosElements'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { useLanguage } from '@/i18n'
import { SectionHeader } from '@/components/common/SectionHeader'

type Vehicle = {
    key: 'fordTransit' | 'peugeot308'
    image: string
    capacity: number
    luggage: number
}

const VEHICLES: Vehicle[] = [
    {
        key: 'fordTransit',
        image: '/ford-transit-2021.avif',
        capacity: 8,
        luggage: 6,
    },
    {
        key: 'peugeot308',
        image: '/peugeot-308-2019.avif',
        capacity: 4,
        luggage: 3,
    },
];

export const Fleet = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const { openWhatsAppVehicleBooking } = useWhatsApp()
    const { t } = useLanguage()

    const handleVehicleBooking = (vehicleName: string) => {
        openWhatsAppVehicleBooking(vehicleName)
    }

    return (
        <section
            ref={ref}
            id="fleet"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden"
        >
            <KosIslandSilhouette
                className="top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[600px] h-[375px] lg:w-[900px] lg:h-[560px]"
                opacity={0.04}
            />

            <GreekWavePattern />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent opacity-60" />
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    badge={t.fleet.badge}
                    title={
                        <>
                            {t.fleet.title} <span className="text-accent italic font-light">{t.fleet.titleAccent}</span>
                        </>
                    }
                    description={t.fleet.subtitle}
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 lg:gap-14">
                    {VEHICLES.map((vehicle, index) => {
                        const vehicleData = t.fleet.vehicles[vehicle.key]
                        return (
                            <motion.div
                                key={vehicle.key}
                                initial={{ opacity: 0, y: 50 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.9, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Card className="overflow-hidden border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/15 group bg-card/80 backdrop-blur-sm p-0">
                                    <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                        <motion.img
                                            src={vehicle.image}
                                            alt={vehicleData.name}
                                            className="w-full h-full object-cover object-[center_35%]"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                        <motion.div
                                            className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={getAnimationState(isInView)}
                                            transition={{ duration: 0.7, delay: 0.8 + index * 0.2 }}
                                        >
                                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white tracking-tight text-center">
                                                {vehicleData.name}
                                            </h3>
                                        </motion.div>
                                    </div>

                                    <div className="p-6 sm:p-7 bg-card/95 backdrop-blur-sm">
                                        <div className="mt-0 mb-5 sm:mb-6">
                                            <div className="grid grid-cols-2 gap-4 sm:gap-5">
                                                <div className="flex flex-col items-center justify-center p-4 sm:p-5 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
                                                    <Users className="text-accent mb-2 sm:mb-3" size={32} />
                                                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{vehicle.capacity}</div>
                                                    <div className="text-sm sm:text-base text-muted-foreground font-medium">{t.fleet.passengers}</div>
                                                </div>
                                                <div className="flex flex-col items-center justify-center p-4 sm:p-5 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors">
                                                    <Briefcase className="text-accent mb-2 sm:mb-3" size={32} />
                                                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{vehicle.luggage}</div>
                                                    <div className="text-sm sm:text-base text-muted-foreground font-medium">{t.fleet.bags}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 sm:mb-7 leading-relaxed text-base sm:text-lg font-light">
                                            {vehicleData.description}
                                        </p>

                                        <div className="mb-6 sm:mb-7">
                                            <h4 className="font-semibold text-foreground mb-4 sm:mb-4 flex items-center text-lg sm:text-lg">
                                                <Shield
                                                    className="mr-2.5 sm:mr-2.5 text-accent"
                                                    size={22}
                                                    fill="currentColor"
                                                />
                                                {t.fleet.features}
                                            </h4>
                                            <ul className="grid grid-cols-1 gap-4 sm:gap-4">
                                                {vehicleData.features.map((feature) => {
                                                    return (
                                                        <motion.li
                                                            key={feature}
                                                            className="text-base sm:text-base text-muted-foreground flex items-center group/item"
                                                            whileHover={{ x: 4 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <BadgeCheck
                                                                className="mr-3 sm:mr-3 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform"
                                                                size={22}
                                                                strokeWidth={2}
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
                                                onClick={() => handleVehicleBooking(vehicleData.name)}
                                            >
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                                <WhatsAppIcon className="mr-2.5 sm:mr-2.5 w-[22px] h-[22px]" />
                                                {t.fleet.bookVehicle}
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
