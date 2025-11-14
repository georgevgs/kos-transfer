import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quotes } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/SectionHeader'

type Testimonial = {
    name: string
    location: string
    rating: number
    text: string
    date: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        location: 'United Kingdom',
        rating: 5,
        text: 'Absolutely fantastic service! Our driver was waiting for us at the airport with a name sign, the car was immaculate, and the journey to our hotel was smooth and comfortable. Highly recommend for anyone visiting Kos!',
        date: 'October 2024',
    },
    {
        name: 'Michael Schmidt',
        location: 'Germany',
        rating: 5,
        text: 'We booked the Mercedes Van for our family of 6 and it was perfect. Plenty of space for luggage, air conditioning worked great, and the driver was very professional and friendly. Great value for money!',
        date: 'September 2024',
    },
    {
        name: 'Emma Andersson',
        location: 'Sweden',
        rating: 5,
        text: 'Used Kos Elite Transfers for our entire stay - airport pickup, day trips to Zia Village and Paradise Beach, and airport drop-off. Every journey was punctual and the drivers were knowledgeable about the island. Will definitely use again!',
        date: 'August 2024',
    },
    {
        name: 'James O\'Connor',
        location: 'Ireland',
        rating: 5,
        text: 'Flight was delayed by 3 hours but they tracked it and adjusted pickup time automatically. No extra charges, just excellent service. The luxury sedan was spotless and very comfortable. 10/10!',
        date: 'July 2024',
    },
    {
        name: 'Maria Rossi',
        location: 'Italy',
        rating: 5,
        text: 'Booked last minute via WhatsApp and they accommodated us immediately. The booking process was so easy and the service exceeded our expectations. The driver even gave us great restaurant recommendations!',
        date: 'June 2024',
    },
    {
        name: 'Thomas Dubois',
        location: 'France',
        rating: 5,
        text: 'Professional, reliable, and affordable. We needed transfers for our wedding guests and Kos Elite handled everything perfectly. All 8 transfers went smoothly and on time. Thank you for making our day stress-free!',
        date: 'May 2024',
    },
]

export const Testimonials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section
            ref={ref}
            id="testimonials"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    badge="Testimonials"
                    title={
                        <>
                            What Our <span className="text-accent italic font-light">Clients Say</span>
                        </>
                    }
                    description="Real experiences from travelers who chose Kos Elite Transfers"
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {TESTIMONIALS.map((testimonial, index) => {
                        return (
                            <motion.div
                                key={`${testimonial.name}-${index}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Card className="p-6 sm:p-7 md:p-8 border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 h-full group bg-card/80 backdrop-blur-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />

                                        <div className="relative z-10">
                                            <motion.div
                                                className="mb-5 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
                                                whileHover={{ rotate: 180, scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Quotes size={24} weight="fill" className="text-accent" />
                                            </motion.div>

                                            <div className="flex gap-1 mb-4">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        weight="fill"
                                                        className="text-accent"
                                                    />
                                                ))}
                                            </div>

                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-light">
                                                "{testimonial.text}"
                                            </p>

                                            <div className="border-t border-border/40 pt-4">
                                                <p className="font-semibold text-foreground mb-1">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground font-light">
                                                    {testimonial.location}
                                                </p>
                                                <p className="text-xs text-muted-foreground/70 mt-1 font-light">
                                                    {testimonial.date}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mt-12 sm:mt-14"
                >
                    <p className="text-muted-foreground font-light text-base sm:text-lg">
                        Join hundreds of satisfied customers who trusted us with their Kos transfers
                    </p>
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
