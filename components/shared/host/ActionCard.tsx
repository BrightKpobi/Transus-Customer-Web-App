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
            className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl flex flex-col items-start gap-3 text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
        >
            <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-2xl">
                {icon}
            </div>

            <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 leading-tight">
                    {title}
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {subtitle}
                </p>
            </div>
        </button>
    )
}
