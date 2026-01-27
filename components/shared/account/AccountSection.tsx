interface AccountSectionProps {
    title: string
    children: React.ReactNode
    variant?: 'list' | 'grid'
}

export function AccountSection({
    title,
    children,
    variant = 'list',
}: AccountSectionProps) {
    return (
        <section className="space-y-3">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
                {title}
            </h2>

            <div
                className={
                    variant === 'list'
                        ? 'bg-white rounded-2xl overflow-hidden'
                        : 'grid grid-cols-3 gap-3'
                }
            >
                {children}
            </div>
        </section>
    )
}
