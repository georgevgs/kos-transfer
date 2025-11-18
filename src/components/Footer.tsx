import { motion } from 'framer-motion'
import { EnvelopeSimple, InstagramLogo, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'
import { CONTACT, SOCIAL_MEDIA } from '@/constants/contact'
import { useContactLinks } from '@/hooks/useContactLinks'
import { useLanguage } from '@/i18n'

type SocialLink = {
    href: string
    icon: typeof InstagramLogo
    label: string
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: SOCIAL_MEDIA.instagram,
        icon: InstagramLogo,
        label: 'Instagram',
    },
]

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { getPhoneLink, getWhatsAppLink, getEmailLink } = useContactLinks()
    const { t } = useLanguage()

    const quickLinks = [
        { href: '#fleet', label: t.nav.fleet },
        { href: '#services', label: t.nav.services },
        { href: '#about', label: t.nav.about },
    ]

    return (
        <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-20 sm:py-20 md:py-24 px-5 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-40" />
            <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12 md:gap-14 mb-16 sm:mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="sm:col-span-2 lg:col-span-1 relative"
                    >
                        <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden">
                            <img
                                src="/kos-map.avif"
                                alt=""
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] h-auto brightness-0 invert"
                            />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-accent tracking-tight relative z-10">
                            {t.footer.companyName}
                        </h3>
                        <p className="text-sm sm:text-base text-primary-foreground/60 font-light mb-5 sm:mb-5 md:mb-6 relative z-10">
                            Georgia Kommata
                        </p>
                        <p className="text-primary-foreground/75 leading-relaxed font-light text-base sm:text-base relative z-10">
                            {t.footer.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className="font-semibold text-lg sm:text-lg mb-5 sm:mb-5 md:mb-6 tracking-tight">
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-4 sm:space-y-4">
                            {quickLinks.map((link) => {
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-base sm:text-base text-primary-foreground/75 hover:text-accent transition-colors font-light inline-flex items-center group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className="font-semibold text-lg sm:text-lg mb-5 sm:mb-5 md:mb-6 tracking-tight">
                            {t.footer.contact}
                        </h4>
                        <ul className="space-y-5 sm:space-y-5">
                            <li className="flex items-center gap-3 sm:gap-3 group">
                                <Phone
                                    size={22}
                                    weight="fill"
                                    className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <a
                                    href={getPhoneLink()}
                                    className="text-base sm:text-base text-primary-foreground/75 hover:text-accent transition-colors font-light"
                                >
                                    {CONTACT.phoneDisplay}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 sm:gap-3 group">
                                <WhatsappLogo
                                    size={22}
                                    weight="fill"
                                    className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base sm:text-base text-primary-foreground/75 hover:text-accent transition-colors font-light"
                                >
                                    {t.footer.whatsapp}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 sm:gap-3 group">
                                <EnvelopeSimple
                                    size={22}
                                    weight="fill"
                                    className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                                />
                                <a
                                    href={getEmailLink()}
                                    className="text-sm sm:text-sm text-primary-foreground/75 hover:text-accent transition-colors font-light break-all"
                                >
                                    {CONTACT.email}
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className="font-semibold text-lg sm:text-lg mb-5 sm:mb-5 md:mb-6 tracking-tight">
                            {t.footer.location}
                        </h4>
                        <div className="flex items-start gap-3 sm:gap-3 mb-10 sm:mb-10">
                            <MapPin size={22} weight="fill" className="text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                            <p className="text-base sm:text-base text-primary-foreground/75 font-light">
                                {t.footer.island}
                                <br />
                                {t.footer.region}
                            </p>
                        </div>
                        <div className="flex gap-4 sm:gap-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/5 hover:bg-accent/15 border border-primary-foreground/10 hover:border-accent/40 flex items-center justify-center transition-all duration-300"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon
                                            size={22}
                                            weight="fill"
                                            className="text-primary-foreground hover:text-accent transition-colors"
                                        />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                <Separator className="bg-primary-foreground/15 mb-10 sm:mb-10" />

                <motion.div
                    className="text-center text-primary-foreground/60 text-sm sm:text-sm font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p>
                        © {currentYear} {t.footer.copyright}
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
