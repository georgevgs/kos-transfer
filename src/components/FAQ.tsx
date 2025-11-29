import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CaretDown } from '@phosphor-icons/react'
import { SectionHeader } from '@/components/common/SectionHeader'
import { useLanguage } from '@/i18n'

export const FAQ = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const { t } = useLanguage()

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
                    badge={t.faq.badge}
                    title={
                        <>
                            {t.faq.title} <span className="text-accent italic font-light">{t.faq.titleAccent}</span>
                        </>
                    }
                    description={t.faq.subtitle}
                    isInView={isInView}
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={getAnimationState(isInView)}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                >
                    {t.faq.items.map((faq, index) => {
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
                        {t.faq.stillHaveQuestions}
                    </p>
                    <p className="text-muted-foreground font-light text-sm sm:text-base">
                        {t.faq.contactPrompt}
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
