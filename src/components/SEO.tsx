type SEOProps = {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    ogType?: string
}

const DEFAULT_SEO = {
    title: 'Kos Elite Transfers - Premium Luxury Transportation Services in Kos Island',
    description:
        'Experience luxury transfers in Kos with professional drivers, premium vehicles, and 24/7 availability. Airport pickups, hotel transfers, and island tours across Kos, Greece.',
    keywords:
        'Kos transfers, Kos airport taxi, Kos transportation, luxury transfers Kos, Kos Elite Transfers, airport transfers Kos, Kos port transfers, Kos taxi service, private transfers Kos Greece',
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
            <meta name="geo.placename" content="Kos" />
            <link rel="canonical" href="https://koselitetransfers.com" />
        </>
    )
}
