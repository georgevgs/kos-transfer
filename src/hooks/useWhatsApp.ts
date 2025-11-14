import { CONTACT, WHATSAPP_MESSAGES } from '@/constants/contact'

type UseWhatsAppReturn = {
    openWhatsApp: (message?: string) => void
    openWhatsAppBooking: () => void
    openWhatsAppInquiry: () => void
    openWhatsAppVehicleBooking: (vehicleName: string) => void
}

export const useWhatsApp = (): UseWhatsAppReturn => {
    const openWhatsApp = (message?: string) => {
        const messageToUse = message || WHATSAPP_MESSAGES.booking
        const encodedMessage = encodeURIComponent(messageToUse)
        const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    const openWhatsAppBooking = () => {
        openWhatsApp(WHATSAPP_MESSAGES.booking)
    }

    const openWhatsAppInquiry = () => {
        openWhatsApp(WHATSAPP_MESSAGES.inquiry)
    }

    const openWhatsAppVehicleBooking = (vehicleName: string) => {
        openWhatsApp(WHATSAPP_MESSAGES.vehicleBooking(vehicleName))
    }

    return {
        openWhatsApp,
        openWhatsAppBooking,
        openWhatsAppInquiry,
        openWhatsAppVehicleBooking,
    }
}
