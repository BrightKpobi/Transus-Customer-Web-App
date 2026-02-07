'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { StepIndicator } from '@/components/shared/host/add-vehicle/StepIndicator'
import { BasicInfoStep } from '@/components/shared/host/add-vehicle/BasicInfoStep'
import { DetailsStep } from '@/components/shared/host/add-vehicle/DetailsStep'
import { FeaturesStep } from '@/components/shared/host/add-vehicle/FeaturesStep'
import { MediaStep } from '@/components/shared/host/add-vehicle/MediaStep'
import { PricingStep } from '@/components/shared/host/add-vehicle/PricingStep'

export interface VehicleFormData {
    // Basic Info
    vehicleType: string
    make: string
    model: string
    year: string
    vin: string
    licensePlate: string
    // Details
    seats: string
    color: string
    transmission: string
    fuelType: string
    experienceLevel: string
    pickupLocations: string[]
    // Features
    features: string[]
    // Media
    photos: File[]
    insuranceDocument: File | null
    roadWorthyDocument: File | null
    // Pricing
    currency: string
    dailyRate: string
    mileageLimit: string
    description: string
    availableForBooking: boolean
}

const initialFormData: VehicleFormData = {
    vehicleType: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    licensePlate: '',
    seats: '',
    color: '',
    transmission: '',
    fuelType: '',
    experienceLevel: '',
    pickupLocations: [],
    features: [],
    photos: [],
    insuranceDocument: null,
    roadWorthyDocument: null,
    currency: 'GHS',
    dailyRate: '',
    mileageLimit: '',
    description: '',
    availableForBooking: true,
}

const steps = ['Basic', 'Details', 'Features', 'Media', 'Pricing']

export default function AddVehiclePage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState<VehicleFormData>(initialFormData)
    const BackButton = () => (
        <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition mb-4"
            aria-label="Back"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-gray-100"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
    );

    const updateFormData = (data: Partial<VehicleFormData>) => {
        setFormData(prev => ({ ...prev, ...data }))
    }

    const validateCurrentStep = (): boolean => {
        switch (currentStep) {
            case 1: // Basic Info
                if (!formData.vehicleType) {
                    toast.error('Please select a vehicle type')
                    return false
                }
                if (!formData.make) {
                    toast.error('Please select a make')
                    return false
                }
                if (!formData.model) {
                    toast.error('Please select a model')
                    return false
                }
                if (!formData.year) {
                    toast.error('Please enter the year')
                    return false
                }
                if (!formData.vin || formData.vin.length !== 17) {
                    toast.error('Please enter a valid VIN (17 characters)')
                    return false
                }
                if (!formData.licensePlate) {
                    toast.error('Please enter the license plate')
                    return false
                }
                return true

            case 2: // Details
                if (!formData.seats) {
                    toast.error('Please select number of seats')
                    return false
                }
                if (!formData.color) {
                    toast.error('Please select a color')
                    return false
                }
                if (!formData.transmission) {
                    toast.error('Please select transmission type')
                    return false
                }
                if (!formData.fuelType) {
                    toast.error('Please select fuel type')
                    return false
                }
                if (!formData.experienceLevel) {
                    toast.error('Please select experience level')
                    return false
                }
                if (formData.pickupLocations.length === 0) {
                    toast.error('Please select at least one pickup location')
                    return false
                }
                return true

            case 3: // Features (optional, no validation needed)
                return true

            case 4: // Media
                if (formData.photos.length === 0) {
                    toast.error('Please add at least one photo of your vehicle')
                    return false
                }
                if (!formData.insuranceDocument) {
                    toast.error('Please upload insurance document')
                    return false
                }
                if (!formData.roadWorthyDocument) {
                    toast.error('Please upload road worthy certificate')
                    return false
                }
                return true

            case 5: // Pricing
                if (!formData.dailyRate || parseFloat(formData.dailyRate) <= 0) {
                    toast.error('Please enter a valid daily rate')
                    return false
                }
                return true

            default:
                return true
        }
    }

    const handleNext = () => {
        if (validateCurrentStep() && currentStep < 5) {
            setCurrentStep(prev => prev + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    const handleSubmit = () => {
        if (!validateCurrentStep()) {
            return
        }

        // TODO: Submit form data to API
        console.log('Submitting:', formData)
        router.push('/host')
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <BasicInfoStep formData={formData} updateFormData={updateFormData} />
            case 2:
                return <DetailsStep formData={formData} updateFormData={updateFormData} />
            case 3:
                return <FeaturesStep formData={formData} updateFormData={updateFormData} />
            case 4:
                return <MediaStep formData={formData} updateFormData={updateFormData} />
            case 5:
                return <PricingStep formData={formData} updateFormData={updateFormData} />
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">

            <div className="mx-auto w-full max-w-7xl px-4 flex-1 flex flex-col">
                {/* Back Button below header */}
                <div className="pt-4 pb-2">
                    <BackButton />
                </div>
                {/* Step Indicator */}
                <div className="py-6">
                    <StepIndicator steps={steps} currentStep={currentStep} />
                </div>
                {/* Form Content */}
                <div className="flex-1 overflow-y-auto pb-32">
                    {renderStep()}
                </div>
                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 py-4">
                    <div className="mx-auto max-w-7xl flex items-center justify-between">
                        {currentStep > 1 ? (
                            <button
                                onClick={handleBack}
                                className="text-amber-500 font-semibold hover:text-amber-600 transition"
                            >
                                Back
                            </button>
                        ) : (
                            <div />
                        )}
                        <button
                            onClick={currentStep === 5 ? handleSubmit : handleNext}
                            className="bg-amber-400 hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full transition"
                        >
                            {currentStep === 5 ? 'Submit' : 'Continue'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
