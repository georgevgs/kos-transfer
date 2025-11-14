/**
 * Contact information configuration
 * Update these values with your actual contact details
 */

export const CONTACT = {
    whatsapp: '+306900000000',
    phone: '+30 690 000 0000',
    email: 'info@koselitetransfers.com',
    location: {
        city: 'Kos Island',
        region: 'Dodecanese, Greece',
    },
    social: {
        instagram: '#',
        facebook: '#',
    },
} as const

/**
 * Default WhatsApp message template
 */
export const WHATSAPP_MESSAGE = 'Hello! I would like to book a transfer in Kos.'

/**
 * Get WhatsApp URL
 */
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGE): string => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`
}

/**
 * Get phone call URL
 */
export const getPhoneUrl = (): string => {
    return `tel:${CONTACT.whatsapp}`
}

/**
 * Get email URL
 */
export const getEmailUrl = (): string => {
    return `mailto:${CONTACT.email}`
}
