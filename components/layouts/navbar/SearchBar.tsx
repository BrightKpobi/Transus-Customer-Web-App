'use client'

import { Search, MapPin } from 'lucide-react'

export default function SearchBar({ visible }: { visible: boolean }) {
    return (
        <div
            className={`transition-all duration-300 ease-out transform
        ${visible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                }`}
        >
            <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 ring-1 ring-black/10">

                {/* Icon */}
                <MapPin size={16} className="text-gray-400" />

                {/* Input */}
                <input
                    placeholder="Search location..."
                    className="w-40 md:w-56 bg-transparent outline-none text-sm font-semibold text-gray-900 placeholder:text-gray-400"
                />

                {/* Button */}
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-gray-900 transition">
                    <Search size={14} strokeWidth={3} />
                </button>
            </div>
        </div>
    )
}
