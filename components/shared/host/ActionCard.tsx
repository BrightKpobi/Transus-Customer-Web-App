interface ActionCardProps {
    icon: React.ReactNode
    title: string
    subtitle: string
    onClick?: () => void
}

export function ActionCard({
    icon,
    title,
    subtitle,
    onClick,
}: ActionCardProps) {
    return (
        <button
            onClick={onClick}
            className="p-6 bg-white border border-gray-100 rounded-3xl flex flex-col items-start gap-3 text-left transition-all hover:bg-gray-50"
        >
            <div className="p-3 bg-blue-50 rounded-2xl">
                {icon}
            </div>

            <div>
                <h4 className="font-bold text-gray-900 leading-tight">
                    {title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                    {subtitle}
                </p>
            </div>
        </button>
    )
}
