import { Button } from '@/components/ui/button'
import { WhatsappLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const WHATSAPP_CONFIG = {
    number: '+306900000000',
    message: 'Hello! I would like to book a transfer in Kos.'
}

export function WhatsAppFloat() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50"
        >
            <motion.div
                animate={{ 
                    scale: [1, 1.08, 1],
                }}
                transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        className="w-[72px] h-[72px] sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-accent hover:bg-accent/95 shadow-2xl shadow-accent/50 hover:shadow-3xl hover:shadow-accent/60 p-0 transition-all duration-300 border-4 sm:border-4 border-accent/30 hover:border-accent/50 relative overflow-hidden group"
                        onClick={handleWhatsAppClick}
                        aria-label="Contact via WhatsApp"
                    >
                        <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />
                        <WhatsappLogo 
                            size={36} 
                            weight="fill" 
                            className="text-accent-foreground relative z-10 sm:w-9 sm:h-9 md:w-10 md:h-10" 
                        />
                    </Button>
                </motion.div>
            </motion.div>
            
            <motion.div
                className="absolute inset-0 rounded-full bg-accent/30 blur-xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    )
}

const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.message)
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
}
