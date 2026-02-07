'use client'

import { Car, Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSearch() {
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
        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSearch}>
                <div className="flex items-center gap-3 rounded-full bg-white dark:bg-gray-900 px-5 py-3 ring-1 ring-black/5 dark:ring-white/10">
                    <Car size={20} className="text-gray-400 dark:text-gray-500\" />

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Search by car brand, model, or type..."
                        className="flex-1 bg-transparent outline-none text-sm font-semibold text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />

                    <button
                        type="submit"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!searchQuery.trim()}
                    >
                        <Search size={18} strokeWidth={2.5} />
                    </button>
                </div>
            </form>
        </div>
    )
}