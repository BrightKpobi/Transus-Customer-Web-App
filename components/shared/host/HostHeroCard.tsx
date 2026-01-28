import { Car } from 'lucide-react'

export function HostHeroCard() {
    return (
        <div className="bg-[#1a2b4b] rounded-3xl p-8 text-white flex justify-between items-center relative overflow-hidden">
            <div className="z-10">
                <h2 className="text-2xl font-bold mb-2">Welcome, Host!</h2>
                <p className="text-gray-300 text-sm tracking-wide">
                    Manage your vehicles and track your earnings
                </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <Car size={32} className="text-white/80" />
            </div>
        </div>
    )
}
