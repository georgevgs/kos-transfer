export const CONTACT = {
    whatsappNumber: '+306900000000',
    phoneDisplay: '+30 690 000 0000',
    email: 'info@koselitetransfers.com',
} as const

export const SOCIAL_MEDIA = {
    instagram: '#',
    facebook: '#',
} as const

export const WHATSAPP_MESSAGES = {
    booking: 'Hello! I would like to book a transfer in Kos.',
    inquiry: 'Hello! I have a question about your services.',
    vehicleBooking: (vehicleName: string) => `Hello! I would like to book the ${vehicleName} for a transfer in Kos.`,
} as const
