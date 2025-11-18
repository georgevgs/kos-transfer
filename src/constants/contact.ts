export const CONTACT = {
    whatsappNumber: '+306972961560',
    phoneDisplay: '+30 697 296 1560',
    email: 'georgiaskostransport@gmail.com',
} as const

export const SOCIAL_MEDIA = {
    instagram: 'https://www.instagram.com/georgia.transport?igsh=YThlNHJycmNpZXVt',
} as const

export const WHATSAPP_MESSAGES = {
    booking: 'Hello! I would like to book a transfer in Kos.',
    inquiry: 'Hello! I have a question about your services.',
    vehicleBooking: (vehicleName: string) => `Hello! I would like to book the ${vehicleName} for a transfer in Kos.`,
} as const
