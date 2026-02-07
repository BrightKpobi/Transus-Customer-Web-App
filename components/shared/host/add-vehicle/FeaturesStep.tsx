'use client'

import { VehicleFormData } from '@/app/(public)/host/add-vehicle/page'

interface FeaturesStepProps {
    formData: VehicleFormData
    updateFormData: (data: Partial<VehicleFormData>) => void
}

interface FeatureCategory {
    title: string
    features: string[]
}

const featureCategories: FeatureCategory[] = [
    {
        title: 'Comfort & Convenience',
        features: [
            'Apple CarPlay',
            'Aux Input',
            'USB Input',
            'USB Charger',
            'Keyless Entry',
            'Heated Seats',
            'Sunroof',
        ],
    },
    {
        title: 'Safety Features',
        features: [
            'Backup Camera',
            'Blind Spot Monitor',
            'All-Wheel Drive',
        ],
    },
    {
        title: 'Special Features',
        features: [
            'Has Driver',
            'Pet Friendly',
            'Wheelchair Accessible',
            'Child Seat',
            'Convertible',
            'Toll Pass',
        ],
    },
    {
        title: 'Outdoor Features',
        features: [
            'Bike Rack',
            'Roof Rack',
            'Tow Hitch',
        ],
    },
]

export function FeaturesStep({ formData, updateFormData }: FeaturesStepProps) {
    const toggleFeature = (feature: string) => {
        if (formData.features.includes(feature)) {
            updateFormData({
                features: formData.features.filter(f => f !== feature)
            })
        } else {
            updateFormData({
                features: [...formData.features, feature]
            })
        }
    }

    return (
        <div className="space-y-8">
            {featureCategories.map((category) => (
                <div key={category.title}>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {category.features.map((feature) => {
                            const isSelected = formData.features.includes(feature)
                            return (
                                <button
                                    key={feature}
                                    type="button"
                                    onClick={() => toggleFeature(feature)}
                                    className={`
                                        px-4 py-2.5 rounded-full text-sm font-medium border transition
                                        ${isSelected
                                            ? 'bg-amber-400 border-amber-400 text-white'
                                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400'
                                        }
                                    `}
                                >
                                    {feature}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}
