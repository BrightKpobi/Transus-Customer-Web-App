'use client'

import { MapPin, Search } from 'lucide-react'

export default function HeroSearch() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 ring-1 ring-black/5">
                <MapPin size={20} className="text-gray-400" />

                <input
                    placeholder="Search city, location, or place..."
                    className="flex-1 bg-transparent outline-none text-sm font-semibold text-gray-900 placeholder:text-gray-400"
                />

                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                    <Search size={18} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    )
}
