'use client'
import { Search } from 'lucide-react'

export default function SearchBar({ visible }: { visible: boolean }) {
    return (
        <div className={`transition-all duration-300 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
            <div className="flex items-center gap-4 rounded-full border border-gray-200 bg-white py-2 pl-6 pr-2 hover:shadow-md transition cursor-pointer">
                <span className="text-sm font-semibold text-gray-800">Anywhere</span>
                <div className="h-4 w-px bg-gray-200" />
                <span className="text-sm font-semibold text-gray-800">Any dates</span>
                <div className="ml-2 rounded-full bg-[#593CFB] p-2 text-white">
                    <Search size={16} strokeWidth={3} />
                </div>
            </div>
        </div>
    )
}