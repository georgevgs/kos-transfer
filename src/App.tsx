import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { BookingForm } from '@/components/BookingForm'
import { Fleet } from '@/components/Fleet'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { ScrollToTop } from '@/components/ScrollToTop'
import { PageTransition } from '@/components/PageTransition'
import { StructuredDataInjector } from '@/seo/StructuredDataInjector'

const App = () => {
    return (
        <PageTransition>
            <StructuredDataInjector />
            <div className="min-h-screen bg-background scroll-smooth">
                <a 
                    href="#booking" 
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                    Skip to booking form
                </a>
                <a 
                    href="#main-content" 
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                    Skip to main content
                </a>
                <Navigation />
                <Hero />
                <main id="main-content" role="main">
                    <BookingForm />
                    <Fleet />
                    <Services />
                    <About />
                    <Testimonials />
                    <FAQ />
                </main>
                <Footer />
                <WhatsAppFloat />
                <ScrollToTop />
            </div>
        </PageTransition>
    )
}

export default App
