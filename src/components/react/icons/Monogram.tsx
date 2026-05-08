import type { SVGProps } from 'react'

export const Monogram = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-20 -20 215 150"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <rect x="0" y="0" width="96" height="24" />
            <rect x="0" y="0" width="24" height="110" />
            <rect x="0" y="86" width="96" height="24" />
            <rect x="38" y="43" width="58" height="24" />
            <rect x="72" y="67" width="24" height="19" />
            <polygon points="150,0 170,0 116,55 96,55" />
            <polygon points="96,55 116,55 170,110 150,110" />
        </svg>
    )
}
