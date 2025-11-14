import { CONTACT } from '@/constants/contact'

type UseContactLinksReturn = {
    getPhoneLink: () => string
    getWhatsAppLink: (message?: string) => string
    getEmailLink: (subject?: string) => string
    openPhone: () => void
    openEmail: (subject?: string) => void
}

export const useContactLinks = (): UseContactLinksReturn => {
    const getPhoneLink = (): string => {
        return `tel:${CONTACT.whatsappNumber}`
    }

    const getWhatsAppLink = (message?: string): string => {
        if (message) {
            const encodedMessage = encodeURIComponent(message)
            return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`
        }
        return `https://wa.me/${CONTACT.whatsappNumber}`
    }

    const getEmailLink = (subject?: string): string => {
        if (subject) {
            const encodedSubject = encodeURIComponent(subject)
            return `mailto:${CONTACT.email}?subject=${encodedSubject}`
        }
        return `mailto:${CONTACT.email}`
    }

    const openPhone = () => {
        window.open(getPhoneLink(), '_self')
    }

    const openEmail = (subject?: string) => {
        window.open(getEmailLink(subject), '_self')
    }

    return {
        getPhoneLink,
        getWhatsAppLink,
        getEmailLink,
        openPhone,
        openEmail,
    }
}
