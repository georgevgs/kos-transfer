import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Translations } from './types'
import { en } from './en'
import { el } from './el'

type Language = 'en' | 'el'

const translations: Record<Language, Translations> = {
    en,
    el,
}

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type LanguageProviderProps = {
    children: ReactNode
    initialLanguage?: Language
}

export const LanguageProvider = ({ children, initialLanguage = 'en' }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>(initialLanguage)

    const value = {
        language,
        setLanguage,
        t: translations[language],
    }

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
