import { CONTACT } from '@/constants/contact'
import { useLanguage } from '@/i18n'

type UseWhatsAppReturn = {
    openWhatsApp: (message?: string) => void
    openWhatsAppBooking: () => void
    openWhatsAppInquiry: () => void
    openWhatsAppVehicleBooking: (vehicleName: string) => void
}

export const useWhatsApp = (): UseWhatsAppReturn => {
    const { t } = useLanguage()

    const openWhatsApp = (message?: string) => {
        const messageToUse = message || t.whatsappMessage.quickBooking
        const encodedMessage = encodeURIComponent(messageToUse)
        const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    const openWhatsAppBooking = () => {
        openWhatsApp(t.whatsappMessage.quickBooking)
    }

    const openWhatsAppInquiry = () => {
        openWhatsApp(t.whatsappMessage.inquiry)
    }

    const openWhatsAppVehicleBooking = (vehicleName: string) => {
        const message = t.whatsappMessage.vehicleBooking.replace('{vehicleName}', vehicleName)
        openWhatsApp(message)
    }

    return {
        openWhatsApp,
        openWhatsAppBooking,
        openWhatsAppInquiry,
        openWhatsAppVehicleBooking,
    }
}
