import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import { LanguageProvider } from './i18n'

import './styles.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('Root element not found')
}

createRoot(rootElement).render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </ErrorBoundary>
)
