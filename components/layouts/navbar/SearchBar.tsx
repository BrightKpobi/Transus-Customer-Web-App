'use client'

import { Search, Car } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar({ visible }: { visible: boolean }) {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()

        if (searchQuery.trim()) {
            // Navigate to search results page with query
            router.push(`/cars?search=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch(e as any)
        }
    }

    return (
        <div
            className={`transition-all duration-300 ease-out transform
        ${visible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                }`}
        >
            <form onSubmit={handleSearch}>
                <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 ring-1 ring-black/10">

                    {/* Icon */}
                    <Car size={16} className="text-gray-400" />

                    {/* Input */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Search cars..."
                        className="w-40 md:w-56 bg-transparent outline-none text-sm font-semibold text-gray-900 placeholder:text-gray-400"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!searchQuery.trim()}
                    >
                        <Search size={14} strokeWidth={3} />
                    </button>
                </div>
            </form>
        </div>
    )
}