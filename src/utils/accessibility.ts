export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
        document.body.removeChild(announcement)
    }, 1000)
}

export const getAriaLabel = (key: string, context?: Record<string, string | number>): string => {
    const labels: Record<string, string> = {
        navigation: 'Main navigation',
        mobileMenu: 'Mobile menu',
        closeMenu: 'Close menu',
        languageSwitch: 'Switch language to {language}',
        bookNow: 'Book transfer now',
        whatsappFloat: 'Contact us on WhatsApp',
        scrollToTop: 'Scroll to top',
        bookingForm: 'Transfer booking form',
        vehicleSelect: 'Select vehicle type',
        passengerSelect: 'Select number of passengers',
        dateInput: 'Select transfer date',
        timeInput: 'Select transfer time',
        pickupSelect: 'Select pickup location',
        dropoffSelect: 'Select drop-off location',
        submitBooking: 'Submit booking request',
        faqToggle: 'Toggle answer for {question}',
        testimonialSlide: 'Testimonial {index} of {total}',
    }

    let label = labels[key] || key

    if (context) {
        Object.entries(context).forEach(([placeholder, value]) => {
            label = label.replace(`{${placeholder}}`, String(value))
        })
    }

    return label
}

export const generateUniqueId = (prefix: string): string => {
    return `${prefix}-${Math.random().toString(36).substring(2, 11)}`
}
