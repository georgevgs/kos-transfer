import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'
import { SectionHeader } from '@/components/common/SectionHeader'

type FAQ = {
    question: string
    answer: string
}

const FAQS: FAQ[] = [
    {
        question: 'How do I book a transfer?',
        answer: 'You can book directly through our website using the booking form, or contact us via WhatsApp for instant confirmation. We recommend booking at least 24 hours in advance, especially during peak season.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash (EUR) upon arrival, credit/debit cards, and bank transfers. Payment can be made to the driver or in advance through our secure payment system.',
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'Free cancellation up to 24 hours before your scheduled pickup time. Cancellations within 24 hours are subject to a 50% charge. No-shows will be charged the full amount.',
    },
    {
        question: 'Do you provide child seats?',
        answer: 'Yes, we provide complimentary child seats and booster seats upon request. Please specify the age of your children when booking so we can prepare the appropriate safety seats.',
    },
    {
        question: 'What happens if my flight is delayed?',
        answer: 'We monitor all flight arrivals in real-time and automatically adjust pickup times for delays. There are no extra charges for flight delays - we will be there when you land.',
    },
    {
        question: 'How much luggage can I bring?',
        answer: 'Our luxury sedans accommodate 3 large suitcases plus hand luggage for up to 4 passengers. Our Mercedes vans can fit 8 large suitcases plus hand luggage for up to 8 passengers.',
    },
    {
        question: 'Are your drivers licensed and insured?',
        answer: 'Yes, all our drivers are fully licensed, professionally trained, and we carry comprehensive insurance coverage for all passengers and vehicles.',
    },
    {
        question: 'Can I book a one-way transfer?',
        answer: 'Absolutely! You can book one-way transfers or round trips. We also offer hourly rentals for island tours and multiple stops.',
    },
    {
        question: 'Do you operate 24/7?',
        answer: 'Yes, we provide transfers around the clock, including early morning flights and late-night arrivals. Simply specify your pickup time when booking.',
    },
    {
        question: 'What areas of Kos do you cover?',
        answer: 'We cover the entire island of Kos, including the airport, port, all major hotels and resorts, beaches, and villages. From Kos Town to Kefalos and everywhere in between.',
    },
]

export const FAQ = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null)
            return
        }
        setOpenIndex(index)
    }

    return (
        <section
            ref={ref}
            id="faq"
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-gradient-to-b from-muted/10 via-muted/20 to-background relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10">
                <SectionHeader
                    badge="FAQ"
                    title={
                        <>
                            Frequently Asked <span className="text-accent italic font-light">Questions</span>
                        </>
                    }
                    description="Everything you need to know about our transfer services"
                    isInView={isInView}
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                >
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={getAnimationState(isInView)}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="border border-border/60 rounded-2xl bg-card/80 backdrop-blur-sm overflow-hidden hover:border-accent/40 transition-colors duration-300"
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left hover:bg-accent/5 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-foreground text-base sm:text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex-shrink-0"
                                    >
                                        <CaretDown size={24} weight="bold" className="text-accent" />
                                    </motion.div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isOpen ? 'auto' : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-2">
                                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mt-12 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/20"
                >
                    <p className="text-foreground font-medium text-base sm:text-lg mb-2">
                        Still have questions?
                    </p>
                    <p className="text-muted-foreground font-light text-sm sm:text-base">
                        Contact us via WhatsApp or email and we'll be happy to help!
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
