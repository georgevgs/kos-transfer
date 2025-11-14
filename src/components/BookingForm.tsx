import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Car } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useWhatsApp } from '@/hooks/useWhatsApp'
import { useLanguage } from '@/i18n'

type BookingFormData = {
    pickupLocation: string
    dropoffLocation: string
    date: string
    time: string
    passengers: string
    vehicle: string
}

const VEHICLE_OPTIONS = [
    { value: 'sedan', label: 'Luxury Sedan (1-4 passengers)', capacity: 4 },
    { value: 'van', label: 'Mercedes Van (1-8 passengers)', capacity: 8 },
]

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
    const { t } = useLanguage()
    const [formData, setFormData] = useState<BookingFormData>({
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        passengers: '1',
        vehicle: 'sedan',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const message = buildWhatsAppMessage(formData)
        openWhatsApp(message)
    }

    const handleInputChange = (field: keyof BookingFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    return (
        <section id="booking" className="py-20 sm:py-24 md:py-32 px-5 sm:px-6 bg-muted/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

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
                    >
                        <span className="text-accent font-semibold tracking-[0.15em] text-xs uppercase">
                            {t.booking.badge}
                        </span>
                    </motion.div>
                    <h2 className="text-[2.25rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-5 tracking-tight">
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
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <MapPin size={18} weight="fill" className="text-accent" />
                                        {t.booking.pickupLocation}
                                    </label>
                                    <select
                                        value={formData.pickupLocation}
                                        onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    >
                                        <option value="">{t.booking.selectPickup}</option>
                                        {POPULAR_LOCATIONS.map((location) => (
                                            <option key={location} value={location}>
                                                {location}
                                            </option>
                                        ))}
                                        <option value="other">{t.booking.other}</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <MapPin size={18} weight="fill" className="text-accent" />
                                        {t.booking.dropoffLocation}
                                    </label>
                                    <select
                                        value={formData.dropoffLocation}
                                        onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    >
                                        <option value="">{t.booking.selectDropoff}</option>
                                        {POPULAR_LOCATIONS.map((location) => (
                                            <option key={location} value={location}>
                                                {location}
                                            </option>
                                        ))}
                                        <option value="other">{t.booking.other}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <Calendar size={18} weight="fill" className="text-accent" />
                                        {t.booking.date}
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => handleInputChange('date', e.target.value)}
                                        required
                                        min={getTodayDate()}
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <Clock size={18} weight="fill" className="text-accent" />
                                        {t.booking.time}
                                    </label>
                                    <input
                                        type="time"
                                        value={formData.time}
                                        onChange={(e) => handleInputChange('time', e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <Users size={18} weight="fill" className="text-accent" />
                                        {t.booking.passengers}
                                    </label>
                                    <select
                                        value={formData.passengers}
                                        onChange={(e) => handleInputChange('passengers', e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                            <option key={num} value={num}>
                                                {num} {num === 1 ? t.booking.passenger : `${t.booking.passenger}s`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                        <Car size={18} weight="fill" className="text-accent" />
                                        {t.booking.vehicle}
                                    </label>
                                    <select
                                        value={formData.vehicle}
                                        onChange={(e) => handleInputChange('vehicle', e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    >
                                        {VEHICLE_OPTIONS.map((option) => (
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
                                    className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg py-6 sm:py-7 rounded-xl shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 relative overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative z-10">{t.booking.submitButton}</span>
                                </Button>
                            </motion.div>

                            <p className="text-center text-sm text-muted-foreground">{t.booking.noteText}</p>
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

const buildWhatsAppMessage = (data: BookingFormData): string => {
    const lines = [
        '🚗 *TRANSFER BOOKING REQUEST*',
        '',
        `📍 *Pickup:* ${data.pickupLocation}`,
        `📍 *Drop-off:* ${data.dropoffLocation}`,
        `📅 *Date:* ${formatDate(data.date)}`,
        `🕐 *Time:* ${data.time}`,
        `👥 *Passengers:* ${data.passengers}`,
        `🚙 *Vehicle:* ${getVehicleName(data.vehicle)}`,
        '',
        'Please confirm availability and pricing. Thank you!',
    ]

    return lines.join('\n')
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

const getVehicleName = (vehicleValue: string): string => {
    const vehicle = VEHICLE_OPTIONS.find((v) => v.value === vehicleValue)
    return vehicle ? vehicle.label : vehicleValue
}
