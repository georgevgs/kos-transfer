import { LanguageProvider } from '@/i18n'
import { Navigation } from './Navigation'
import { Hero } from './Hero'
import { BookingForm } from './BookingForm'
import { Fleet } from './Fleet'
import { Services } from './Services'
import { About } from './About'
import { Testimonials } from './Testimonials'
import { FAQ } from './FAQ'
import { Footer } from './Footer'
import { WhatsAppFloat } from './WhatsAppFloat'
import { ScrollToTop } from './ScrollToTop'

interface AppProps {
  initialLanguage: 'en' | 'el'
}

export const App = ({ initialLanguage }: AppProps) => {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <div className="relative min-h-screen bg-background scroll-smooth">
        {/* Skip links for accessibility */}
        <a
          href="#booking"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {initialLanguage === 'el' ? 'Μετάβαση στη φόρμα κράτησης' : 'Skip to booking form'}
        </a>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {initialLanguage === 'el' ? 'Μετάβαση στο κύριο περιεχόμενο' : 'Skip to main content'}
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
    </LanguageProvider>
  )
}
