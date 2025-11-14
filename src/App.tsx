import { Hero } from '@/components/Hero'
import { Fleet } from '@/components/Fleet'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <Fleet />
            <Services />
            <About />
            <Footer />
            <WhatsAppFloat />
        </div>
    )
}

export default App
