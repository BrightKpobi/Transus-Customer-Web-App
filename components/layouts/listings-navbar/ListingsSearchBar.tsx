'use client'

import { ChevronDown, Calendar, Users, MapPin } from 'lucide-react'

export default function ListingsSearchBar() {
    return (
        <div className="flex flex-wrap items-center gap-2 rounded-full border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

            {/* Location */}
            <div className="flex items-center px-4 py-2 hover:bg-gray-50 rounded-full">
                <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-800">Dallas, TX, USA</span>
                <ChevronDown className="ml-1 h-3 w-3 text-gray-500" />
            </div>

            {/* Dates */}
            <div className="flex items-center px-4 py-2 hover:bg-gray-50 rounded-full">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-800">From 2/4/2026</span>
                <span className="mx-1 text-gray-400">–</span>
                <span className="text-sm font-medium text-gray-800">Until 5/4/2026</span>
                <ChevronDown className="ml-1 h-3 w-3 text-gray-500" />
            </div>

            {/* Age / Guests */}
            <div className="flex items-center px-4 py-2 hover:bg-gray-50 rounded-full">
                <Users className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-800">30</span>
                <ChevronDown className="ml-1 h-3 w-3 text-gray-500" />
            </div>

            {/* Filters Button */}
            <div className="ml-auto flex items-center px-4 py-2 rounded-full bg-black text-white hover:bg-black/80 transition">
                <span className="text-sm font-semibold">All filters</span>
                <ChevronDown className="ml-1 h-3 w-3 text-white" />
            </div>
        </div>
    )
}
