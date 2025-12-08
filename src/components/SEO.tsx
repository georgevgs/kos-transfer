type SEOProps = {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    ogType?: string
}

const DEFAULT_SEO = {
    title: 'VIP Tour Transfer Kos | Private Transfers in Kos Island Greece',
    description:
        '#1 Kos transfer service. Book airport transfers from KGS, port pickups, hotel transfers & island tours. 24/7 service, flight tracking, fixed prices. WhatsApp booking. Trusted by 1000+ travelers in Kos Greece.',
    keywords:
        'kos transfer, kos airport transfer, kos taxi, transfer kos, kos airport taxi, airport transfer kos, taxi kos, kos transfers, kos port transfer, private transfer kos, kos island transfer, kos shuttle, kos transportation, KGS airport taxi, kos town transfer, kardamena transfer, tigaki transfer, kefalos transfer, mastichari transfer',
    ogImage: '/kos-scenery.avif',
    ogType: 'website',
}

export const SEO = ({
    title = DEFAULT_SEO.title,
    description = DEFAULT_SEO.description,
    keywords = DEFAULT_SEO.keywords,
    ogImage = DEFAULT_SEO.ogImage,
    ogType = DEFAULT_SEO.ogType,
}: SEOProps) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="GR-KOS" />
            <meta name="geo.placename" content="Kos, Dodecanese, Greece" />
            <link rel="canonical" href="https://viptourtransfer.gr/" />
        </>
    )
}
