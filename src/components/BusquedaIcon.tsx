interface IconoLupaProps {
    className?: string
}


export const BusquedaIcon = ({ className = "w-6 h-6 text-gray-600 hover:text-gray-800" }: IconoLupaProps) => {
    return (
        <>
            <svg
                className={className}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
            </svg>

        </>
    )
}


