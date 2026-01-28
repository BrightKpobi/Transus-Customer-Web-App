'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, ChevronRight, Search, Info, Plus } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/layouts/navbar/Navbar'

interface Location {
    id: string
    name: string
    address: string
}

// Mock data - replace with actual API call
const availableLocations: Location[] = [
    {
        id: '1',
        name: 'Storm',
        address: 'Storm, Accra, Greater Accra'
    },
    {
        id: '2',
        name: 'Sogakope',
        address: 'Sogakope, Ho, Volta region'
    },
    {
        id: '3',
        name: 'Accra Mall',
        address: 'Accra Mall, Accra, Greater Accra'
    },
    {
        id: '4',
        name: 'King Jesus',
        address: 'King Jesus, Koforidua, Eastern'
    },
    {
        id: '5',
        name: 'Klagon',
        address: 'Klagon, Accra, Greater Accra'
    },
    {
        id: '6',
        name: 'Site B',
        address: 'Site B, Tema, Greater Accra'
    },
    {
        id: '7',
        name: 'KTU',
        address: 'KTU, Koforidua, Eastern Region'
    }
]

export default function SelectPickupLocationsPage() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLocations, setSelectedLocations] = useState<string[]>([])

    const handleToggleLocation = (locationId: string) => {
        if (selectedLocations.includes(locationId)) {
            setSelectedLocations(selectedLocations.filter(id => id !== locationId))
        } else {
            setSelectedLocations([...selectedLocations, locationId])
        }
    }

    const handleAddNew = () => {
        // TODO: Navigate to add new location page
        toast.info('Add new location - coming soon')
    }

    const handleSaveSelections = () => {
        if (selectedLocations.length === 0) {
            toast.error('Please select at least one location')
            return
        }
        
        // Get the selected location details
        const selectedLocationDetails = availableLocations.filter(loc => 
            selectedLocations.includes(loc.id)
        )
        
        // Save to localStorage temporarily
        localStorage.setItem('selectedPickupLocations', JSON.stringify(selectedLocationDetails))
        
        toast.success(`${selectedLocations.length} location(s) added successfully`)
        router.back()
    }

    const filteredLocations = availableLocations.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.address.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="flex items-center gap-4 p-4">
                    <button
                        onClick={() => router.back()}
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                    >
                        <ChevronRight size={24} className="text-gray-900 rotate-180" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Select Pickup Locations</h1>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 pb-24">
                {/* Search Bar */}
                <div className="relative mb-4">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search locations..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-400 transition"
                    />
                </div>

                {/* Info Banner */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl mb-4">
                    <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-600">
                        Select existing locations or add new ones for this vehicle.
                    </p>
                </div>

                {/* Locations List */}
                <div className="space-y-3">
                    {filteredLocations.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-2xl">
                            <p className="text-gray-500">No locations found</p>
                        </div>
                    ) : (
                        filteredLocations.map((location) => (
                            <button
                                key={location.id}
                                onClick={() => handleToggleLocation(location.id)}
                                className="w-full bg-white rounded-2xl p-4 border border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition text-left"
                            >
                                {/* Location Icon */}
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} className="text-gray-500" />
                                </div>

                                {/* Location Details */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">{location.name}</h3>
                                    <p className="text-sm text-gray-500">{location.address}</p>
                                </div>

                                {/* Checkbox */}
                                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                                    selectedLocations.includes(location.id)
                                        ? 'bg-amber-400 border-amber-400'
                                        : 'bg-white border-gray-300'
                                }`}>
                                    {selectedLocations.includes(location.id) && (
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Add New Floating Button */}
            <button
                onClick={handleAddNew}
                className="fixed bottom-20 right-6 w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition shadow-lg"
            >
                <Plus size={28} />
            </button>

            {/* Save Button - Fixed at bottom */}
            {selectedLocations.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                    <button
                        onClick={handleSaveSelections}
                        className="w-full py-4 bg-amber-400 text-white rounded-full font-bold hover:bg-amber-500 transition"
                    >
                        Add {selectedLocations.length} Location{selectedLocations.length !== 1 ? 's' : ''}
                    </button>
                </div>
            )}
        </div>
        </>
    )
}
