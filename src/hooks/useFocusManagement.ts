import { useEffect, useRef } from 'react'

export const useFocusTrap = (isActive: boolean) => {
    const containerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isActive || !containerRef.current) {
            return
        }

        const container = containerRef.current
        const focusableElements = container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== 'Tab') {
                return
            }

            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault()
                    lastElement.focus()
                }
                return
            }

            if (document.activeElement === lastElement) {
                event.preventDefault()
                firstElement.focus()
            }
        }

        container.addEventListener('keydown', handleKeyDown)
        firstElement?.focus()

        return () => {
            container.removeEventListener('keydown', handleKeyDown)
        }
    }, [isActive])

    return containerRef
}

export const useRestoreFocus = (isOpen: boolean) => {
    const previousActiveElement = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (isOpen) {
            previousActiveElement.current = document.activeElement as HTMLElement
            return
        }

        if (previousActiveElement.current) {
            previousActiveElement.current.focus()
            previousActiveElement.current = null
        }
    }, [isOpen])
}
