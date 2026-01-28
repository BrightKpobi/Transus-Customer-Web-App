interface AccountSectionProps {
    title: string
    children: React.ReactNode
}

export function AccountSection({ title, children }: AccountSectionProps) {
    return (
        <section>
            <h2 className="text-sm font-bold text-gray-400 mb-3 px-1 uppercase tracking-wider">
                {title}
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {children}
            </div>
        </section>
    )
}
