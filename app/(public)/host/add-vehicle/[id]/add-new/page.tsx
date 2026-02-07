'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/layouts/navbar/Navbar'

export default function AddNewPickupLocationPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        addressName: '',
        addressLine2: '',
        city: '',
        stateRegion: '',
        country: 'Ghana'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddLocation = () => {
        // Validate required fields
        if (!formData.addressName.trim()) {
            toast.error('Please enter an address name')
            return
        }
        if (!formData.city.trim()) {
            toast.error('Please enter a city')
            return
        }
        if (!formData.stateRegion.trim()) {
            toast.error('Please enter a state/region')
            return
        }
        if (!formData.country.trim()) {
            toast.error('Please enter a country')
            return
        }

        // Create the new location object
        const newLocation = {
            id: Date.now().toString(),
            name: formData.addressName,
            address: formData.addressLine2 || formData.addressName,
            city: formData.city,
            region: formData.stateRegion,
            country: formData.country,
            fullAddress: `${formData.addressName}, ${formData.city}, ${formData.stateRegion}`
        }

        // Get existing locations from localStorage
        const existingLocations = localStorage.getItem('selectedPickupLocations')
        const locations = existingLocations ? JSON.parse(existingLocations) : []
        
        // Add new location
        locations.push(newLocation)
        localStorage.setItem('selectedPickupLocations', JSON.stringify(locations))

        toast.success('Location added successfully')
        router.back()
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-4 flex items-center gap-3">
                <button
                    onClick={() => router.back()}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                >
                    <ChevronRight size={24} className="text-gray-900 dark:text-gray-100 rotate-180" />
                </button>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Add Pickup Location</h1>
            </div>

            <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Enter the details for this pickup location</p>

                <div className="space-y-4">
                    {/* Address Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Address Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="addressName"
                            value={formData.addressName}
                            onChange={handleInputChange}
                            placeholder="e.g., Accra Mall, Tema Station"
                            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-400 transition"
                        />
                    </div>

                    {/* Address Line 2 */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Address Line 2
                        </label>
                        <input
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleInputChange}
                            placeholder="Additional details (optional)"
                            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-400 transition"
                        />
                    </div>

                    {/* City and State/Region - Side by side */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* City */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="e.g., Accra"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-400 transition"
                            />
                        </div>

                        {/* State/Region */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                State/Region <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="stateRegion"
                                value={formData.stateRegion}
                                onChange={handleInputChange}
                                placeholder="e.g., Greater Accra"
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-400 transition"
                            />
                        </div>
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Ghana"
                            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-0 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-amber-400 transition"
                        />
                    </div>

                    {/* Add Location Button */}
                    <button
                        onClick={handleAddLocation}
                        className="w-full py-4 bg-amber-400 text-white rounded-full font-semibold hover:bg-amber-500 transition mt-6"
                    >
                        Add Location
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
