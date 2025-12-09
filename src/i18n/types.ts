export type Translations = {
    nav: {
        fleet: string
        services: string
        about: string
        testimonials: string
        faq: string
        booking: string
    }
    hero: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        bookWhatsApp: string
        callNow: string
    }
    booking: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        pickupLocation: string
        dropoffLocation: string
        date: string
        time: string
        passengers: string
        vehicle: string
        passenger: string
        passengersPlural: string
        selectPickup: string
        selectDropoff: string
        other: string
        submitButton: string
        noteText: string
    }
    fleet: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        passengers: string
        bags: string
        features: string
        bookVehicle: string
        vehicles: {
            fordTransit: {
                name: string
                description: string
                features: string[]
            }
            peugeot308: {
                name: string
                description: string
                features: string[]
            }
        }
    }
    services: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        popularDestinations: string
        popularDestinationsAccent: string
        destinationsSubtitle: string
        items: Array<{
            title: string
            description: string
        }>
    }
    about: {
        badge: string
        title: string
        titleAccent: string
        intro1: string
        intro2: string
        features: Array<{
            title: string
            description: string
        }>
    }
    testimonials: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        joinText: string
        items: Array<{
            name: string
            location: string
            rating: number
            text: string
            date: string
        }>
    }
    faq: {
        badge: string
        title: string
        titleAccent: string
        subtitle: string
        stillHaveQuestions: string
        contactPrompt: string
        items: Array<{
            question: string
            answer: string
        }>
    }
    footer: {
        companyName: string
        description: string
        quickLinks: string
        contact: string
        location: string
        whatsapp: string
        island: string
        region: string
        copyright: string
    }
    common: {
        loading: string
        error: string
        tryAgain: string
    }
    whatsappMessage: {
        title: string
        pickup: string
        dropoff: string
        date: string
        time: string
        passengers: string
        vehicle: string
        confirmation: string
    }
}
