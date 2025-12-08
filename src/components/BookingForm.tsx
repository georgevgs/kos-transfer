import { useState, FormEvent, useId } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Car } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { useLanguage } from '@/i18n'
import { announceToScreenReader } from '@/utils/accessibility'

type BookingFormData = {
    pickupLocation: string
    dropoffLocation: string
    date: string
    time: string
    passengers: string
    vehicle: string
}

const POPULAR_LOCATIONS = [
    'Kos Airport (KGS)',
    'Kos Port',
    'Kos Town',
    'Kardamena',
    'Kefalos',
    'Tigaki',
    'Mastichari',
    'Paradise Beach',
]

export const BookingForm = () => {
    const { openWhatsApp } = useWhatsApp()
    const { t, language } = useLanguage()
    const formId = useId()
    const [formData, setFormData] = useState<BookingFormData>({
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        passengers: '1',
        vehicle: 'peugeot308',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        announceToScreenReader('Preparing your booking request', 'polite')

        const message = buildWhatsAppMessage(formData, t, language)
        
        setTimeout(() => {
            openWhatsApp(message)
            announceToScreenReader('Opening WhatsApp to complete your booking', 'assertive')
            setIsSubmitting(false)
        }, 500)
    }

    const handleInputChange = (field: keyof BookingFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const getPassengerLabel = (count: number): string => {
        if (count === 1) {
            return `1 ${t.booking.passenger}`
        }
        return `${count} ${t.booking.passengersPlural}`
    }

    const getVehicleOptions = () => {
        return [
            { 
                value: 'peugeot308', 
                label: `${t.fleet.vehicles.peugeot308.name} (1-4 ${t.booking.passengersPlural.toLowerCase()})`,
                capacity: 4 
            },
            { 
                value: 'fordTransit', 
                label: `${t.fleet.vehicles.fordTransit.name} (1-8 ${t.booking.passengersPlural.toLowerCase()})`,
                capacity: 8 
            },
        ]
    }

    const pickupId = `${formId}-pickup`
    const dropoffId = `${formId}-dropoff`
    const dateId = `${formId}-date`
    const timeId = `${formId}-time`
    const passengersId = `${formId}-passengers`
    const vehicleId = `${formId}-vehicle`

    return (
        <section 
            id="booking" 
            className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-muted/20 relative overflow-hidden"
            aria-labelledby="booking-heading"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" aria-hidden="true" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12 sm:mb-14"
                >
                    <motion.div
                        className="inline-block mb-5 sm:mb-6 px-6 sm:px-7 py-2.5 border border-accent/40 rounded-full bg-accent/8 backdrop-blur-xl shadow-lg shadow-accent/10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        aria-hidden="true"
                    >
                        <span className="text-accent font-semibold tracking-wide text-xs sm:text-sm">
                            {t.booking.badge}
                        </span>
                    </motion.div>
                    <h2 
                        id="booking-heading"
                        className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 tracking-tight text-center px-4"
                    >
                        {t.booking.title} <span className="text-accent italic font-light">{t.booking.titleAccent}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                        {t.booking.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Card className="p-6 sm:p-8 md:p-10 border border-border/60 shadow-2xl bg-card/80 backdrop-blur-sm">
                        <form 
                            onSubmit={handleSubmit} 
                            className="space-y-6 sm:space-y-7"
                            aria-label="Transfer booking form"
                            noValidate
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label 
                                        htmlFor={pickupId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <MapPin size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.pickupLocation}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <select
                                        id={pickupId}
                                        value={formData.pickupLocation}
                                        onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                                        required
                                        aria-required="true"
                                        aria-describedby={formData.pickupLocation ? undefined : `${pickupId}-hint`}
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    >
                                        <option value="">{t.booking.selectPickup}</option>
                                        {POPULAR_LOCATIONS.map((location) => (
                                            <option key={location} value={location}>
                                                {location}
                                            </option>
                                        ))}
                                        <option value="other">{t.booking.other}</option>
                                    </select>
                                    {!formData.pickupLocation && (
                                        <p id={`${pickupId}-hint`} className="sr-only">
                                            Please select a pickup location
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label 
                                        htmlFor={dropoffId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <MapPin size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.dropoffLocation}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <select
                                        id={dropoffId}
                                        value={formData.dropoffLocation}
                                        onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                                        required
                                        aria-required="true"
                                        aria-describedby={formData.dropoffLocation ? undefined : `${dropoffId}-hint`}
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    >
                                        <option value="">{t.booking.selectDropoff}</option>
                                        {POPULAR_LOCATIONS.map((location) => (
                                            <option key={location} value={location}>
                                                {location}
                                            </option>
                                        ))}
                                        <option value="other">{t.booking.other}</option>
                                    </select>
                                    {!formData.dropoffLocation && (
                                        <p id={`${dropoffId}-hint`} className="sr-only">
                                            Please select a drop-off location
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label 
                                        htmlFor={dateId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <Calendar size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.date}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <input
                                        id={dateId}
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => handleInputChange('date', e.target.value)}
                                        required
                                        aria-required="true"
                                        min={getTodayDate()}
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label 
                                        htmlFor={timeId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <Clock size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.time}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <input
                                        id={timeId}
                                        type="time"
                                        value={formData.time}
                                        onChange={(e) => handleInputChange('time', e.target.value)}
                                        required
                                        aria-required="true"
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label 
                                        htmlFor={passengersId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <Users size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.passengers}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <select
                                        id={passengersId}
                                        value={formData.passengers}
                                        onChange={(e) => handleInputChange('passengers', e.target.value)}
                                        required
                                        aria-required="true"
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                            <option key={num} value={num}>
                                                {getPassengerLabel(num)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label 
                                        htmlFor={vehicleId}
                                        className="flex items-center gap-2 text-sm font-semibold text-foreground"
                                    >
                                        <Car size={18} weight="fill" className="text-accent" aria-hidden="true" />
                                        {t.booking.vehicle}
                                        <span className="sr-only">(required)</span>
                                    </label>
                                    <select
                                        id={vehicleId}
                                        value={formData.vehicle}
                                        onChange={(e) => handleInputChange('vehicle', e.target.value)}
                                        required
                                        aria-required="true"
                                        className="w-full px-4 py-3.5 sm:py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none text-base"
                                    >
                                        {getVehicleOptions().map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-label="Submit booking request and continue on WhatsApp"
                                    className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg py-6 sm:py-7 rounded-xl shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 relative overflow-hidden group min-h-[56px] sm:min-h-[64px] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true" />
                                    <span className="relative z-10 whitespace-normal text-center leading-tight px-2">
                                        {isSubmitting ? 'Preparing...' : t.booking.submitButton}
                                    </span>
                                </Button>
                            </motion.div>

                            <p className="text-center text-sm text-muted-foreground" role="note">
                                {t.booking.noteText}
                            </p>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

const getTodayDate = (): string => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

const buildWhatsAppMessage = (data: BookingFormData, t: any, language: string): string => {
    const lines = [
        '🚗 *TRANSFER BOOKING REQUEST*',
        '',
        `📍 *Pickup:* ${data.pickupLocation}`,
        `📍 *Drop-off:* ${data.dropoffLocation}`,
        `📅 *Date:* ${formatDate(data.date, language)}`,
        `🕐 *Time:* ${data.time}`,
        `👥 *Passengers:* ${data.passengers}`,
        `🚙 *Vehicle:* ${getVehicleName(data.vehicle, t)}`,
        '',
        'Please confirm availability and pricing. Thank you!',
    ]

    return lines.join('\n')
}

const formatDate = (dateString: string, language: string): string => {
    const date = new Date(dateString)
    const locale = language === 'el' ? 'el-GR' : 'en-US'
    return date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

const getVehicleName = (vehicleValue: string, t: any): string => {
    if (vehicleValue === 'peugeot308') {
        return t.fleet.vehicles.peugeot308.name
    }
    if (vehicleValue === 'fordTransit') {
        return t.fleet.vehicles.fordTransit.name
    }
    return vehicleValue
}
