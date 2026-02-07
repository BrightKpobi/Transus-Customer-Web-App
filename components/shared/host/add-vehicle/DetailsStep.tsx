'use client'

import { MapPin } from 'lucide-react'
import { VehicleFormData } from '@/app/(public)/host/add-vehicle/page'
import { SelectField } from './SelectField'

interface DetailsStepProps {
    formData: VehicleFormData
    updateFormData: (data: Partial<VehicleFormData>) => void
}

const seatOptions = ['2', '4', '5', '6', '7', '8', '9+']
const colorOptions = ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Brown', 'Beige', 'Gold', 'Orange', 'Yellow']
const transmissionOptions = ['Automatic', 'Manual', 'CVT', 'Semi-Automatic']
const fuelTypeOptions = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG']
const experienceOptions = ['Beginner Friendly', 'Some Experience Required', 'Experienced Drivers Only']
const locationOptions = ['Accra Central', 'East Legon', 'Airport Residential', 'Osu', 'Labone', 'Cantonments', 'Tema', 'Spintex', 'Madina', 'Achimota']

export function DetailsStep({ formData, updateFormData }: DetailsStepProps) {
    return (
        <div className="space-y-5">
            <SelectField
                label="Number of Seats"
                placeholder="Select seats"
                value={formData.seats}
                options={seatOptions}
                onChange={(value) => updateFormData({ seats: value })}
            />

            <SelectField
                label="Color"
                placeholder="Select color"
                value={formData.color}
                options={colorOptions}
                onChange={(value) => updateFormData({ color: value })}
            />

            <SelectField
                label="Transmission"
                placeholder="Select transmission"
                value={formData.transmission}
                options={transmissionOptions}
                onChange={(value) => updateFormData({ transmission: value })}
            />

            <SelectField
                label="Fuel Type"
                placeholder="Select fuel type"
                value={formData.fuelType}
                options={fuelTypeOptions}
                onChange={(value) => updateFormData({ fuelType: value })}
            />

            <SelectField
                label="Experience Level"
                placeholder="Select experience"
                value={formData.experienceLevel}
                options={experienceOptions}
                onChange={(value) => updateFormData({ experienceLevel: value })}
            />

            {/* Pickup Locations - Special styling with icon */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Pickup Locations
                </label>
                <button
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                    <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-gray-400" />
                        <span className={formData.pickupLocations.length > 0 ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}>
                            {formData.pickupLocations.length > 0
                                ? formData.pickupLocations.join(', ')
                                : 'Select pickup locations'
                            }
                        </span>
                    </div>
                </button>

                {/* Location Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {locationOptions.map((location) => {
                        const isSelected = formData.pickupLocations.includes(location)
                        return (
                            <button
                                key={location}
                                type="button"
                                onClick={() => {
                                    if (isSelected) {
                                        updateFormData({
                                            pickupLocations: formData.pickupLocations.filter(l => l !== location)
                                        })
                                    } else {
                                        updateFormData({
                                            pickupLocations: [...formData.pickupLocations, location]
                                        })
                                    }
                                }}
                                className={`
                                    px-3 py-2 rounded-full text-sm font-medium border transition
                                    ${isSelected
                                        ? 'bg-amber-400 border-amber-400 text-white'
                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400'
                                    }
                                `}
                            >
                                {location}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
