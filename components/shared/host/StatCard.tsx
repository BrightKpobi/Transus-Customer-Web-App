interface StatCardProps {
    icon: React.ReactNode
    label: string
    value: string | number
}

export function StatCard({ icon, label, value }: StatCardProps) {
    return (
        <div className="p-6 bg-white border border-gray-100 rounded-3xl flex flex-col items-start gap-4 transition-all hover:border-blue-100">
            <div className="flex justify-between w-full items-start">
                <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
                <span className="text-3xl font-bold text-gray-900">
                    {value}
                </span>
            </div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
        </div>
    )
}
