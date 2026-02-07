interface StatCardProps {
    icon: React.ReactNode
    label: string
    value: string | number
}

export function StatCard({ icon, label, value }: StatCardProps) {
    return (
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl flex flex-col items-start gap-4 transition-all hover:border-amber-200 dark:hover:border-amber-700">
            <div className="flex justify-between w-full items-start">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl">{icon}</div>
                <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {value}
                </span>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        </div>
    )
}
