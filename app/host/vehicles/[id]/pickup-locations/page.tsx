'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, ChevronRight, Trash2, Plus, List } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/layouts/navbar/Navbar'

interface PickupLocation {
    id: string
    name: string
    address: string
}

export default function PickupLocationsPage() {
    const router = useRouter()
    const [locations, setLocations] = useState<PickupLocation[]>([])
    const [showAddModal, setShowAddModal] = useState(false)
    
    // Load saved locations from localStorage on mount
    useEffect(() => {
        const savedLocations = localStorage.getItem('selectedPickupLocations')
        if (savedLocations) {
            const parsedLocations = JSON.parse(savedLocations)
            setLocations(parsedLocations)
            localStorage.removeItem('selectedPickupLocations') // Clear after loading
        }
    }, [])

    const handleDeleteLocation = (id: string) => {
        if (confirm('Are you sure you want to remove this pickup location?')) {
            setLocations(locations.filter(loc => loc.id !== id))
            toast.success('Pickup location removed successfully')
        }
    }

    const handleAddLocation = () => {
        setShowAddModal(true)
    }

    const handleSelectExisting = () => {
        setShowAddModal(false)
        router.push(window.location.pathname + '/select')
    }

    const handleAddNew = () => {
        setShowAddModal(false)
        router.push(window.location.pathname + '/add-new')
    }

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
                    <h1 className="text-xl font-bold text-gray-900">Pickup Locations</h1>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 pb-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Current Locations</h2>

                {/* Locations List */}
                <div className="space-y-3">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center gap-4"
                        >
                            {/* Location Icon */}
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} className="text-amber-500" />
                            </div>

                            {/* Location Details */}
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900">{location.name}</h3>
                                <p className="text-sm text-gray-500">{location.address}</p>
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDeleteLocation(location.id)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-red-50 rounded-full transition"
                            >
                                <Trash2 size={20} className="text-red-500" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {locations.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-2xl">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <MapPin size={28} className="text-amber-500" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">No pickup locations yet</h3>
                        <p className="text-sm text-gray-500">
                            Add locations where customers can pick up this vehicle
                        </p>
                    </div>
                )}
            </div>

            {/* Add Location Button - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                <button
                    onClick={handleAddLocation}
                    className="w-full py-4 bg-amber-400 text-white rounded-full font-bold hover:bg-amber-500 transition flex items-center justify-center gap-2"
                >
                    <Plus size={20} />
                    Add Location
                </button>
            </div>

            {/* Add Location Modal */}
            {showAddModal && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={() => setShowAddModal(false)}
                    />
                    
                    {/* Centered Modal */}
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl z-50 p-6 max-w-md mx-auto shadow-2xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Add Pickup Location</h2>
                        <p className="text-sm text-gray-500 mb-6">Choose how to add a new pickup location</p>
                        
                        <div className="space-y-3">
                            {/* Select Existing Locations */}
                            <button
                                onClick={handleSelectExisting}
                                className="w-full flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl hover:bg-blue-100 transition text-left"
                            >
                                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <List size={28} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-0.5">Select Locations</h3>
                                    <p className="text-sm text-gray-600">Choose from existing locations</p>
                                </div>
                            </button>

                            {/* Add New Location */}
                            <button
                                onClick={handleAddNew}
                                className="w-full flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-2xl hover:bg-green-100 transition text-left"
                            >
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={28} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-0.5">Add New Location</h3>
                                    <p className="text-sm text-gray-600">Create a new pickup location</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
        </>
    )
}
