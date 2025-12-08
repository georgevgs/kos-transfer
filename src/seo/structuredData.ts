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
        alternateName: ['Kos Transfer', 'Kos Airport Transfer', 'VIP Transfer Kos'],
        description: 'Professional airport and port transfer services in Kos Island, Greece. 24/7 availability, flight tracking, and fixed prices.',
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
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
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

export const getAllStructuredData = (): StructuredDataSchema[] => {
    return [
        getLocalBusinessSchema(),
        getTransportServiceSchema(),
        getVehicleListingSchema(),
        getTouristDestinationSchema(),
        getAirportSchema(),
        getWebPageSchema(),
    ]
}
