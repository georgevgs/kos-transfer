type StructuredDataSchema = Record<string, unknown>

const BASE_URL = 'https://viptourtransfer.gr'
const BUSINESS_NAME = 'VIP Tour Transfer Kos'
const BUSINESS_PHONE = '+306972961560'
const BUSINESS_EMAIL = 'gkommata@gmail.com'
const OWNER_NAME = 'Georgia Kommata'

export const getLocalBusinessSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: BUSINESS_NAME,
        alternateName: ['Transfer Kos', 'Kos Transfer', 'Kos Airport Transfer', 'VIP Transfer Kos', 'Transfer Kos Service'],
        description: 'Professional transfer Kos services - airport and port transfers in Kos Island, Greece. 24/7 availability, flight tracking, and fixed prices.',
        url: BASE_URL,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        image: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/kos-scenery.avif`,
            width: 1200,
            height: 630,
        },
        logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/logo.png`,
            width: 512,
            height: 512,
        },
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kos',
            addressRegion: 'Dodecanese',
            addressCountry: 'GR',
            postalCode: '85300',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.8935,
            longitude: 26.9861,
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Kos',
                '@id': 'https://www.wikidata.org/wiki/Q178488',
            },
            {
                '@type': 'Place',
                name: 'Kos Island',
                geo: {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                        '@type': 'GeoCoordinates',
                        latitude: 36.8935,
                        longitude: 26.9861,
                    },
                    geoRadius: '50000',
                },
            },
        ],
        serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 36.8935,
                longitude: 26.9861,
            },
            geoRadius: '50000',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
        },
        sameAs: ['https://www.instagram.com/georgia.transport'],
        founder: {
            '@type': 'Person',
            name: OWNER_NAME,
            jobTitle: 'Owner & Operator',
        },
        employee: {
            '@type': 'Person',
            name: OWNER_NAME,
        },
        potentialAction: [
            {
                '@type': 'ReserveAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${BASE_URL}/#booking`,
                    inLanguage: ['en', 'el'],
                    actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
                },
                result: {
                    '@type': 'Reservation',
                    name: 'Transfer Booking',
                },
            },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Kos Transfer Services',
            itemListElement: [
                {
                    '@type': 'OfferCatalog',
                    name: 'Airport Transfers',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Kos Airport to Hotel Transfer',
                                serviceType: 'Airport Transfer',
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Hotel to Kos Airport Transfer',
                                serviceType: 'Airport Transfer',
                            },
                        },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Port Transfers',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Kos Port Transfer',
                                serviceType: 'Port Transfer',
                            },
                        },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Island Tours',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'TouristTrip',
                                name: 'Kos Island Sightseeing Tour',
                                serviceType: 'Sightseeing Tour',
                            },
                        },
                    ],
                },
            ],
        },
    }
}

export const getTransportServiceSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'TaxiService',
        '@id': `${BASE_URL}/#service`,
        name: `${BUSINESS_NAME} - Airport Transfer Service`,
        description: 'Professional airport transfer service from Kos International Airport (KGS) to any destination on Kos Island. 24/7 service with flight tracking.',
        provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS_NAME,
            '@id': `${BASE_URL}/#business`,
        },
        areaServed: {
            '@type': 'Place',
            name: 'Kos Island, Greece',
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: BASE_URL,
            servicePhone: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_PHONE,
                contactType: 'Reservations',
                availableLanguage: ['English', 'Greek'],
            },
        },
        termsOfService: `${BASE_URL}/#terms`,
        serviceOutput: {
            '@type': 'Reservation',
            name: 'Transfer Booking Confirmation',
        },
        category: ['Airport Transfer', 'Port Transfer', 'Private Transfer', 'Sightseeing Tours'],
    }
}

export const getVehicleListingSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#vehicles`,
        name: 'VIP Tour Transfer Fleet',
        description: 'Our fleet of modern, well-maintained vehicles for comfortable transfers in Kos',
        itemListElement: [
            {
                '@type': 'Car',
                '@id': `${BASE_URL}/#vehicle-peugeot308`,
                name: 'Peugeot 308 Sedan',
                brand: {
                    '@type': 'Brand',
                    name: 'Peugeot',
                },
                model: '308',
                vehicleConfiguration: 'Sedan',
                vehicleSeatingCapacity: 4,
                numberOfAirbags: 6,
                vehicleInteriorType: 'Leather',
                fuelType: 'Diesel',
                additionalProperty: [
                    {
                        '@type': 'PropertyValue',
                        name: 'Air Conditioning',
                        value: 'Yes',
                    },
                    {
                        '@type': 'PropertyValue',
                        name: 'Luggage Capacity',
                        value: '3 large suitcases',
                    },
                ],
            },
            {
                '@type': 'Car',
                '@id': `${BASE_URL}/#vehicle-fordtransit`,
                name: 'Ford Transit Van',
                brand: {
                    '@type': 'Brand',
                    name: 'Ford',
                },
                model: 'Transit',
                vehicleConfiguration: 'Van',
                vehicleSeatingCapacity: 8,
                numberOfAirbags: 4,
                fuelType: 'Diesel',
                additionalProperty: [
                    {
                        '@type': 'PropertyValue',
                        name: 'Air Conditioning',
                        value: 'Yes',
                    },
                    {
                        '@type': 'PropertyValue',
                        name: 'Luggage Capacity',
                        value: '8 large suitcases',
                    },
                    {
                        '@type': 'PropertyValue',
                        name: 'Ideal For',
                        value: 'Groups and Families',
                    },
                ],
            },
        ],
    }
}

export const getTouristDestinationSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        '@id': `${BASE_URL}/#kos-tour`,
        name: 'Kos Island Private Tour',
        description: 'Explore the beautiful island of Kos with our private tour service. Visit ancient ruins, traditional villages, and stunning beaches.',
        provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS_NAME,
            '@id': `${BASE_URL}/#business`,
        },
        itinerary: [
            {
                '@type': 'Place',
                name: 'Asklepion',
                description: 'Ancient healing temple and medical school',
            },
            {
                '@type': 'Place',
                name: 'Zia Village',
                description: 'Traditional mountain village with stunning sunset views',
            },
            {
                '@type': 'Place',
                name: 'Neratzia Castle',
                description: 'Medieval castle in Kos Town harbor',
            },
            {
                '@type': 'Place',
                name: 'Paradise Beach',
                description: 'Beautiful sandy beach with crystal clear waters',
            },
        ],
        touristType: ['Families', 'Couples', 'Solo Travelers', 'Groups'],
    }
}

export const getAirportSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Airport',
        '@id': 'https://www.wikidata.org/wiki/Q1432617',
        name: 'Kos International Airport',
        alternateName: ['Hippocrates Airport', 'KGS Airport'],
        iataCode: 'KGS',
        icaoCode: 'LGKO',
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.7993,
            longitude: 27.0917,
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Antimacheia',
            addressRegion: 'Kos',
            addressCountry: 'GR',
        },
    }
}

export const getWebPageSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: 'VIP Tour Transfer Kos | Private Transfers in Kos Island Greece',
        description: '#1 Kos transfer service. Book airport transfers from KGS, port pickups, hotel transfers & island tours. 24/7 service, flight tracking, fixed prices.',
        inLanguage: ['en', 'el'],
        isPartOf: {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            url: BASE_URL,
            name: 'VIP Tour Transfer Kos',
        },
        about: {
            '@type': 'Thing',
            name: 'Airport Transfer Services',
        },
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/kos-scenery.avif`,
            width: 1200,
            height: 630,
        },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/#breadcrumb`,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: BASE_URL,
                },
            ],
        },
    }
}

export const getReviewsSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        '@id': `${BASE_URL}/#reviews`,
        name: 'Customer Reviews - VIP Tour Transfer Kos',
        description: 'Real customer reviews from travelers who used our Kos transfer services',
        itemListElement: [
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-1`,
                author: {
                    '@type': 'Person',
                    name: 'Sarah M.',
                },
                datePublished: '2025-10-15',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    "Georgia was already waiting when we came out of arrivals - such a relief after a long flight! Car was spotless and cool, and she knew exactly where our hotel was. Couldn't have asked for a better start to our holiday.",
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-2`,
                author: {
                    '@type': 'Person',
                    name: 'Michael S.',
                },
                datePublished: '2025-08-20',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    'Traveled with my wife and 4 kids, so we needed the bigger van. Plenty of room for everyone and all our bags. The driver was patient with the kids and even helped us with the luggage. Very fair price too.',
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-3`,
                author: {
                    '@type': 'Person',
                    name: 'Emma A.',
                },
                datePublished: '2025-06-10',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    'Used them three times during our week in Kos - airport, a day trip to Zia, and back to the airport. Always on time, always friendly. Georgia even recommended a great taverna in Zia village!',
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-4`,
                author: {
                    '@type': 'Person',
                    name: 'James O.',
                },
                datePublished: '2024-09-05',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    "Our flight got delayed by almost 3 hours and I was worried, but they tracked it and were there when we finally landed. No fuss, no extra charge. That's proper service right there.",
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-5`,
                author: {
                    '@type': 'Person',
                    name: 'Maria R.',
                },
                datePublished: '2024-08-12',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    'Booked last minute on WhatsApp - got a reply within minutes and everything was sorted. The Peugeot was comfortable and clean. Simple, easy, exactly what you want after traveling.',
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
            {
                '@type': 'Review',
                '@id': `${BASE_URL}/#review-6`,
                author: {
                    '@type': 'Person',
                    name: 'Thomas D.',
                },
                datePublished: '2024-07-18',
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: 5,
                    bestRating: 5,
                },
                reviewBody:
                    "Organised transfers for 12 of our wedding guests arriving on different flights. Georgia coordinated everything perfectly - everyone got picked up on time. One less thing to stress about on our big day!",
                itemReviewed: {
                    '@type': 'LocalBusiness',
                    name: BUSINESS_NAME,
                    '@id': `${BASE_URL}/#business`,
                },
            },
        ],
    }
}

export const getFAQSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/#faq`,
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How do I book a Kos transfer?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can book your Kos transfer directly through our website using the booking form, or contact us via WhatsApp for instant confirmation. We recommend booking at least 24 hours in advance, especially during peak season.',
                },
            },
            {
                '@type': 'Question',
                name: 'How much does a Kos airport transfer cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Kos transfer prices vary by destination. We offer fixed prices with no hidden fees. Contact us via WhatsApp for an instant quote for your specific route from Kos Airport (KGS) to your hotel.',
                },
            },
            {
                '@type': 'Question',
                name: 'What happens if my flight to Kos is delayed?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We monitor all flight arrivals at Kos Airport (KGS) in real-time and automatically adjust pickup times for delays. There are no extra charges for flight delays - your Kos transfer will be waiting when you land.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide Kos port transfers?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide Kos port transfers for cruise ship passengers and ferry travelers. We track all arrivals and will be waiting at the port when your ship docks.',
                },
            },
            {
                '@type': 'Question',
                name: 'What areas of Kos do you cover?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We provide Kos transfers to the entire island including Kos Airport (KGS), Kos Port, Kos Town, Kardamena, Kefalos, Tigaki, Mastichari, Marmari, and all hotels and resorts.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is your Kos transfer service available 24/7?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide Kos transfers around the clock, including early morning flights and late-night arrivals at Kos Airport. Simply specify your pickup time when booking.',
                },
            },
            {
                '@type': 'Question',
                name: 'What payment methods do you accept for Kos transfers?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We accept cash (EUR) and card payments for all Kos transfers. Payment is made at the end of your ride - no prepayment required.',
                },
            },
            {
                '@type': 'Question',
                name: 'How many passengers can your Kos transfer vehicles hold?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our Peugeot 308 sedan accommodates up to 4 passengers with 3 large suitcases. Our Ford Transit van can fit up to 8 passengers with 6 large suitcases - perfect for families and groups.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I book a Kos island tour with your transfer service?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! Besides airport and port transfers, we offer Kos island tours to Asklepion, Zia village, beaches, and other attractions. Contact us for custom tour itineraries.',
                },
            },
        ],
    }
}

export const getAggregateRatingSchema = (): StructuredDataSchema => {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business-with-rating`,
        name: BUSINESS_NAME,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: 6,
            bestRating: '5',
            worstRating: '1',
        },
    }
}

export const getAllStructuredData = (): StructuredDataSchema[] => {
    return [
        getLocalBusinessSchema(),
        getTransportServiceSchema(),
        getVehicleListingSchema(),
        getTouristDestinationSchema(),
        getAirportSchema(),
        getWebPageSchema(),
        getReviewsSchema(),
        getFAQSchema(),
        getAggregateRatingSchema(),
    ]
}
