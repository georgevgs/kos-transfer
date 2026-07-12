import type { ComponentType } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { LanguageProvider } from '@/i18n'

export interface IslandProps {
    lang: 'en' | 'el'
}

// Each Astro island hydrates on its own schedule, so every section gets its
// own language context and the lazy-loaded framer-motion feature bundle
// (domAnimation covers all animations and gestures used on this site).
// One island per file keeps each section in its own deferred chunk.
export const asIsland = (Section: ComponentType) => {
    const Island = ({ lang }: IslandProps) => (
        <LanguageProvider initialLanguage={lang}>
            <LazyMotion features={domAnimation}>
                <Section />
            </LazyMotion>
        </LanguageProvider>
    )
    return Island
}
