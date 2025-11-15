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

const App = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background scroll-smooth">
                <Navigation />
                <Hero />
                <BookingForm />
                <Fleet />
                <Services />
                <About />
                <Testimonials />
                <FAQ />
                <Footer />
                <WhatsAppFloat />
                <ScrollToTop />
            </div>
        </PageTransition>
    )
}

export default App
