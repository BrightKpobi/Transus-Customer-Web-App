'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { VehicleFormData } from '@/app/(public)/host/add-vehicle/page'

interface PricingStepProps {
    formData: VehicleFormData
    updateFormData: (data: Partial<VehicleFormData>) => void
}

const currencies = ['GHS', 'USD', 'EUR', 'GBP']

export function PricingStep({ formData, updateFormData }: PricingStepProps) {
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)

    return (
        <div className="space-y-6">
            {/* Daily Rate */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Daily Rate
                </label>
                <div className="flex items-stretch border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800">
                    {/* Currency Selector */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                            className="h-full px-4 flex items-center gap-1 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <span className="font-medium text-gray-700 dark:text-gray-300">{formData.currency}</span>
                            <ChevronDown size={16} className="text-gray-400" />
                        </button>

                        {showCurrencyDropdown && (
                            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 min-w-[80px]">
                                {currencies.map((currency) => (
                                    <button
                                        key={currency}
                                        type="button"
                                        onClick={() => {
                                            updateFormData({ currency })
                                            setShowCurrencyDropdown(false)
                                        }}
                                        className={`
                                            w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                            ${formData.currency === currency ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-medium' : 'text-gray-700 dark:text-gray-300'}
                                        `}
                                    >
                                        {currency}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Amount Input */}
                    <input
                        type="number"
                        placeholder="Enter daily rate"
                        value={formData.dailyRate}
                        onChange={(e) => updateFormData({ dailyRate: e.target.value })}
                        className="flex-1 px-4 py-4 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                </div>
            </div>

            {/* Mileage Limit */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Mileage Limit (Optional)
                </label>
                <input
                    type="number"
                    placeholder="Daily mileage limit in km"
                    value={formData.mileageLimit}
                    onChange={(e) => updateFormData({ mileageLimit: e.target.value })}
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-amber-400 transition"
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Description (Optional)
                </label>
                <textarea
                    placeholder="Describe your vehicle..."
                    value={formData.description}
                    onChange={(e) => updateFormData({ description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-amber-400 transition resize-none"
                />
            </div>

            {/* Available for Booking Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div>
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                        Available for Booking
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Enable to make your vehicle visible to renters
                    </p>
                </div>

                {/* Custom Toggle Switch */}
                <button
                    type="button"
                    onClick={() => updateFormData({ availableForBooking: !formData.availableForBooking })}
                    className={`
                        relative w-14 h-8 rounded-full transition-colors
                        ${formData.availableForBooking ? 'bg-amber-400' : 'bg-gray-300'}
                    `}
                >
                    <span
                        className={`
                            absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform
                            ${formData.availableForBooking ? 'translate-x-7' : 'translate-x-1'}
                        `}
                    />
                </button>
            </div>
        </div>
    )
}
