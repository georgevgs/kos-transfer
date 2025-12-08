import { useEffect } from 'react'
import { getAllStructuredData } from '@/seo/structuredData'

export const StructuredDataInjector = () => {
    useEffect(() => {
        const schemas = getAllStructuredData()
        
        schemas.forEach((schema, index) => {
            const scriptId = `structured-data-${index}`
            
            const existingScript = document.getElementById(scriptId)
            if (existingScript) {
                existingScript.remove()
            }

            const script = document.createElement('script')
            script.id = scriptId
            script.type = 'application/ld+json'
            script.textContent = JSON.stringify(schema)
            document.head.appendChild(script)
        })

        return () => {
            const schemas = getAllStructuredData()
            schemas.forEach((_schema, index) => {
                const scriptId = `structured-data-${index}`
                const script = document.getElementById(scriptId)
                if (script) {
                    script.remove()
                }
            })
        }
    }, [])

    return null
}
