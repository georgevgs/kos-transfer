import { en } from '@/i18n/en'
import { el } from '@/i18n/el'

type StructuredDataSchema = Record<string, unknown>
type Locale = 'en' | 'el'

const BASE_URL = 'https://gkviptransfer.gr'
const BUSINESS_NAME = 'GK Vip Transfer Kos'
const BUSINESS_PHONE = '+306972961560'
// Email intentionally left out of all structured data: JSON-LD is plain text
// in every page's HTML, the easiest place for spam harvesters to scrape.
const WHATSAPP_URL = 'https://wa.me/306972961560'
const OWNER_NAME = 'Georgia Kommata'
const INSTAGRAM_URL = 'https://www.instagram.com/georgia.transport'

// Stable node identifiers; every cross-reference below uses these.
// Entity nodes (business, service, fleet, …) are shared across locales;
// page-level nodes (webpage, breadcrumb, faq) are minted per page URL.
const BUSINESS_ID = `${BASE_URL}/#business`
const SERVICE_ID = `${BASE_URL}/#service`
const FLEET_ID = `${BASE_URL}/#fleet`
const TOUR_ID = `${BASE_URL}/#tour`
const AIRPORT_ID = `${BASE_URL}/#airport`
const ISLAND_ID = `${BASE_URL}/#kos-island`
const WEBSITE_ID = `${BASE_URL}/#website`
const PERSON_ID = `${BASE_URL}/#georgia`
const CAR_SEDAN_ID = `${BASE_URL}/#car-peugeot-308`
const CAR_VAN_ID = `${BASE_URL}/#car-ford-transit`

const SERVICE_TOWNS = ['Kos Town', 'Kardamena', 'Kefalos', 'Tigaki', 'Mastichari', 'Marmari']

const kosIsland: StructuredDataSchema = {
    '@type': 'Place',
    '@id': ISLAND_ID,
    name: 'Kos Island',
    sameAs: ['https://www.wikidata.org/wiki/Q178488', 'https://en.wikipedia.org/wiki/Kos'],
    geo: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 36.8935, longitude: 26.9861 },
        geoRadius: 50000,
    },
}

const business: StructuredDataSchema = {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: ['GK VIP Transfer'],
    description:
        'Private airport and port transfer service on Kos Island, Greece. 24/7 availability, flight tracking, fixed prices, run by owner-driver Georgia Kommata.',
    slogan: '24/7 private transfers across Kos Island',
    url: BASE_URL,
    telephone: BUSINESS_PHONE,
    image: { '@type': 'ImageObject', url: `${BASE_URL}/kos-scenery.jpg`, width: 1200, height: 630 },
    logo: { '@type': 'ImageObject', url: `${BASE_URL}/gk-monogram-geometric.svg`, width: 215, height: 150 },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    knowsLanguage: ['el', 'en'],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kos',
        addressRegion: 'Dodecanese',
        postalCode: '85300',
        addressCountry: 'GR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 36.8935, longitude: 26.9861 },
    // hasMap: 'https://maps.google.com/?cid=XXXXXXXXXXXXXXXX', // TODO: Google Maps CID link from the Google Business Profile
    areaServed: [
        { '@id': ISLAND_ID },
        ...SERVICE_TOWNS.map((name) => ({
            '@type': 'City',
            name,
            containedInPlace: { '@id': ISLAND_ID },
        })),
    ],
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
    },
    sameAs: [
        INSTAGRAM_URL,
        // TODO: add the Google Business Profile / Maps URL (highest-value single addition)
        // TODO: add Facebook page URL once one exists
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'reservations',
            telephone: BUSINESS_PHONE,
            availableLanguage: ['English', 'Greek'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            name: 'WhatsApp',
            url: WHATSAPP_URL,
            telephone: BUSINESS_PHONE,
            availableLanguage: ['English', 'Greek'],
        },
    ],
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    owns: [{ '@id': CAR_SEDAN_ID }, { '@id': CAR_VAN_ID }],
    knowsAbout: [{ '@id': AIRPORT_ID }, 'Kos Island', 'Airport transfers', 'Port transfers', 'Private island tours'],
    makesOffer: [{ '@type': 'Offer', itemOffered: { '@id': SERVICE_ID } }],
    potentialAction: {
        '@type': 'ReserveAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/#booking`,
            inLanguage: ['en', 'el'],
            actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
        },
        result: { '@type': 'Reservation', name: 'Transfer Booking' },
    },
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
                        itemOffered: { '@type': 'Service', name: 'Kos Port Transfer', serviceType: 'Port Transfer' },
                    },
                ],
            },
            {
                '@type': 'OfferCatalog',
                name: 'Island Tours',
                itemListElement: [{ '@type': 'Offer', itemOffered: { '@id': TOUR_ID } }],
            },
        ],
    },
}

const owner: StructuredDataSchema = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: OWNER_NAME,
    jobTitle: 'Owner & Operator',
    worksFor: { '@id': BUSINESS_ID },
    knowsLanguage: ['el', 'en'],
    knowsAbout: ['Kos Island', 'Airport transfers', 'Private tours'],
    sameAs: [INSTAGRAM_URL],
}

const taxiService: StructuredDataSchema = {
    '@type': 'TaxiService',
    '@id': SERVICE_ID,
    name: `${BUSINESS_NAME} - Airport Transfer Service`,
    serviceType: 'Airport transfer',
    description:
        'Private airport transfer service from Kos International Airport (KGS) to any destination on Kos Island. 24/7 service with flight tracking.',
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@id': ISLAND_ID },
    hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
    },
    availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: BASE_URL,
        servicePhone: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_PHONE,
            contactType: 'reservations',
            availableLanguage: ['English', 'Greek'],
        },
    },
    serviceOutput: { '@type': 'Reservation', name: 'Transfer Booking Confirmation' },
    category: ['Airport Transfer', 'Port Transfer', 'Private Transfer', 'Sightseeing Tours'],
}

// Vehicle specs deliberately limited to what is visible on the page;
// structured data must mirror on-page content.
const fleet: StructuredDataSchema = {
    '@type': 'ItemList',
    '@id': FLEET_ID,
    name: 'GK Vip Transfer Fleet',
    description: 'Our fleet of modern, well-maintained vehicles for comfortable transfers in Kos',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@type': 'Car',
                '@id': CAR_SEDAN_ID,
                name: 'Peugeot 308 Sedan',
                brand: { '@type': 'Brand', name: 'Peugeot' },
                model: '308',
                vehicleConfiguration: 'Sedan',
                vehicleSeatingCapacity: 4,
                additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Air Conditioning', value: 'Yes' },
                    { '@type': 'PropertyValue', name: 'Luggage Capacity', value: '3 large suitcases' },
                ],
            },
        },
        {
            '@type': 'ListItem',
            position: 2,
            item: {
                '@type': 'Car',
                '@id': CAR_VAN_ID,
                name: 'Ford Transit Van',
                brand: { '@type': 'Brand', name: 'Ford' },
                model: 'Transit',
                vehicleConfiguration: 'Van',
                vehicleSeatingCapacity: 8,
                additionalProperty: [
                    { '@type': 'PropertyValue', name: 'Air Conditioning', value: 'Yes' },
                    { '@type': 'PropertyValue', name: 'Luggage Capacity', value: '6 large suitcases' },
                    { '@type': 'PropertyValue', name: 'Ideal For', value: 'Groups and Families' },
                ],
            },
        },
    ],
}

const islandTour: StructuredDataSchema = {
    '@type': 'TouristTrip',
    '@id': TOUR_ID,
    name: 'Kos Island Private Tour',
    description:
        'Explore the beautiful island of Kos with our private tour service. Visit ancient ruins, traditional villages, and stunning beaches.',
    provider: { '@id': BUSINESS_ID },
    itinerary: [
        { '@type': 'Place', name: 'Asklepion', description: 'Ancient healing temple and medical school' },
        { '@type': 'Place', name: 'Zia Village', description: 'Traditional mountain village with stunning sunset views' },
        { '@type': 'Place', name: 'Neratzia Castle', description: 'Medieval castle in Kos Town harbor' },
        { '@type': 'Place', name: 'Paradise Beach', description: 'Beautiful sandy beach with crystal clear waters' },
    ],
    touristType: ['Families', 'Couples', 'Solo Travelers', 'Groups'],
}

const airport: StructuredDataSchema = {
    '@type': 'Airport',
    // Own the identifier; external entities (Wikidata/Wikipedia) belong in sameAs.
    '@id': AIRPORT_ID,
    name: 'Kos International Airport',
    alternateName: ['Hippocrates Airport', 'KGS Airport'],
    iataCode: 'KGS',
    icaoCode: 'LGKO',
    sameAs: ['https://www.wikidata.org/wiki/Q1432617', 'https://en.wikipedia.org/wiki/Kos_International_Airport'],
    geo: { '@type': 'GeoCoordinates', latitude: 36.7993, longitude: 27.0917 },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Antimacheia',
        addressRegion: 'Kos',
        addressCountry: 'GR',
    },
    containedInPlace: { '@id': ISLAND_ID },
}

const website: StructuredDataSchema = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE_URL,
    name: BUSINESS_NAME,
    inLanguage: ['en', 'el'],
    publisher: { '@id': BUSINESS_ID },
}

const PAGE_META: Record<Locale, { url: string; name: string; description: string }> = {
    en: {
        url: `${BASE_URL}/`,
        name: 'GK Vip Transfer - Kos Airport, Port & Island Service',
        description:
            'Private Kos transfer service. Book airport transfers from KGS, port pickups, hotel transfers & island tours. 24/7 service, flight tracking, fixed prices.',
    },
    el: {
        url: `${BASE_URL}/el/`,
        name: 'GK Vip Transfer - Μεταφορές Κως | Αεροδρόμιο, Λιμάνι & Νησί',
        description:
            'Ιδιωτικές μεταφορές στην Κω. Transfer από το αεροδρόμιο KGS, το λιμάνι και προς όλα τα ξενοδοχεία. Υπηρεσία 24/7, παρακολούθηση πτήσεων, σταθερές τιμές.',
    },
}

const getWebPage = (locale: Locale): StructuredDataSchema => {
    const page = PAGE_META[locale]
    return {
        '@type': 'WebPage',
        '@id': `${page.url}#webpage`,
        url: page.url,
        name: page.name,
        description: page.description,
        inLanguage: locale,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': BUSINESS_ID },
        mainEntity: { '@id': BUSINESS_ID },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${BASE_URL}/kos-scenery.jpg`, width: 1200, height: 630 },
        breadcrumb: { '@id': `${page.url}#breadcrumb` },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '#about', '#faq'],
        },
    }
}

const HOME_LABEL: Record<Locale, string> = { en: 'Home', el: 'Αρχική' }

const getBreadcrumb = (locale: Locale): StructuredDataSchema => {
    const page = PAGE_META[locale]
    return {
        '@type': 'BreadcrumbList',
        '@id': `${page.url}#breadcrumb`,
        itemListElement: [{ '@type': 'ListItem', position: 1, name: HOME_LABEL[locale], item: page.url }],
    }
}

// FAQ markup is generated from the same i18n source as the visible FAQ section,
// so the schema always matches on-page content in the page's own language.
const getFAQ = (locale: Locale): StructuredDataSchema => {
    const page = PAGE_META[locale]
    const items = (locale === 'el' ? el : en).faq.items
    return {
        '@type': 'FAQPage',
        '@id': `${page.url}#faq`,
        isPartOf: { '@id': `${page.url}#webpage` },
        inLanguage: locale,
        mainEntity: items.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
    }
}

// NOTE: Review and AggregateRating markup intentionally removed.
// Google treats reviews of a LocalBusiness published on that business's own
// site as "self-serving" and ignores them for rich results; fabricated-looking
// review markup risks a spammy-structured-markup manual action. Testimonials
// stay as visible page content only; the Google Business Profile in sameAs is
// the legitimate path to the real Google reviews.

/**
 * Single consolidated JSON-LD graph for the given page locale. Returned as a
 * one-element array so Layout.astro emits exactly one
 * <script type="application/ld+json"> block.
 */
export const getAllStructuredData = (locale: Locale = 'en'): StructuredDataSchema[] => {
    return [
        {
            '@context': 'https://schema.org',
            '@graph': [
                business,
                owner,
                taxiService,
                fleet,
                islandTour,
                airport,
                kosIsland,
                website,
                getWebPage(locale),
                getBreadcrumb(locale),
                getFAQ(locale),
            ],
        },
    ]
}

type LegalPageMeta = {
    path: string
    name: string
    description: string
}

/**
 * Compact graph for legal pages (privacy, terms): the business and website
 * entities plus a WebPage and breadcrumb scoped to the page's own URL. The
 * home page's FAQ markup is intentionally not repeated here, since FAQPage
 * markup must describe content that exists on the page itself.
 */
export const getLegalPageStructuredData = (locale: Locale, page: LegalPageMeta): StructuredDataSchema[] => {
    const url = `${BASE_URL}${page.path}`
    return [
        {
            '@context': 'https://schema.org',
            '@graph': [
                business,
                website,
                {
                    '@type': 'WebPage',
                    '@id': `${url}#webpage`,
                    url,
                    name: page.name,
                    description: page.description,
                    inLanguage: locale,
                    isPartOf: { '@id': WEBSITE_ID },
                    about: { '@id': BUSINESS_ID },
                    breadcrumb: { '@id': `${url}#breadcrumb` },
                },
                {
                    '@type': 'BreadcrumbList',
                    '@id': `${url}#breadcrumb`,
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: HOME_LABEL[locale], item: PAGE_META[locale].url },
                        { '@type': 'ListItem', position: 2, name: page.name, item: url },
                    ],
                },
            ],
        },
    ]
}
