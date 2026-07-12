import { useEffect, useState } from 'react'

const USER = 'gkommata'
const DOMAIN = 'gmail.com'

// The address is assembled in the browser after hydration so it never appears
// in the server-rendered HTML, keeping it away from email-harvesting bots.
// Without JS, a human-readable fallback is shown instead.
export const ObfuscatedEmail = ({ className }: { className?: string }) => {
    const [address, setAddress] = useState<string>()

    useEffect(() => {
        setAddress(`${USER}@${DOMAIN}`)
    }, [])

    if (!address) {
        return (
            <span className={className}>
                {USER} [at] {DOMAIN.replace('.', ' [dot] ')}
            </span>
        )
    }

    return (
        <a href={`mailto:${address}`} className={className}>
            {address}
        </a>
    )
}
