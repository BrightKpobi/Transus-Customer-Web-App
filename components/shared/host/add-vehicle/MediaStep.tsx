'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ImagePlus, FileText, ChevronRight, X } from 'lucide-react'
import { VehicleFormData } from '@/app/(public)/host/add-vehicle/page'

interface MediaStepProps {
    formData: VehicleFormData
    updateFormData: (data: Partial<VehicleFormData>) => void
}

export function MediaStep({ formData, updateFormData }: MediaStepProps) {
    const photoInputRef = useRef<HTMLInputElement>(null)
    const insuranceInputRef = useRef<HTMLInputElement>(null)
    const roadWorthyInputRef = useRef<HTMLInputElement>(null)

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const newPhotos = Array.from(files).slice(0, 10 - formData.photos.length)
            updateFormData({ photos: [...formData.photos, ...newPhotos] })
        }
    }

    const removePhoto = (index: number) => {
        updateFormData({
            photos: formData.photos.filter((_, i) => i !== index)
        })
    }

    const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            updateFormData({ insuranceDocument: file })
        }
    }

    const handleRoadWorthyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            updateFormData({ roadWorthyDocument: file })
        }
    }

    return (
        <div className="space-y-8">
            {/* Vehicle Photos Section */}
            <div>
                <h4 className="text-base font-bold text-gray-900">
                    Vehicle Photos (Max 10)
                </h4>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                    Add high-quality photos of your vehicle to attract more renters.
                </p>

                <div className="flex flex-wrap gap-3">
                    {/* Photo Preview Grid */}
                    {formData.photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative w-28 h-28 rounded-xl overflow-hidden border border-gray-200"
                        >
                            <Image
                                src={URL.createObjectURL(photo)}
                                alt={`Vehicle photo ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}

                    {/* Add Photo Button */}
                    {formData.photos.length < 10 && (
                        <button
                            type="button"
                            onClick={() => photoInputRef.current?.click()}
                            className="w-28 h-28 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-amber-400 hover:bg-amber-50 transition"
                        >
                            <ImagePlus size={28} className="text-amber-500" />
                            <span className="text-xs font-medium text-amber-500">Add Photo</span>
                        </button>
                    )}
                </div>

                <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                    className="hidden"
                />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Vehicle Documents Section */}
            <div>
                <h4 className="text-base font-bold text-gray-900">
                    Vehicle Documents
                </h4>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                    Upload required documents for your vehicle.
                </p>

                <div className="space-y-3">
                    {/* Insurance Document */}
                    <button
                        type="button"
                        onClick={() => insuranceInputRef.current?.click()}
                        className="w-full flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                    >
                        <div className="p-3 bg-gray-100 rounded-xl">
                            <FileText size={24} className="text-gray-400" />
                        </div>
                        <div className="flex-1 text-left">
                            <h5 className="font-semibold text-gray-900">
                                Insurance Document
                            </h5>
                            <p className="text-sm text-gray-500">
                                {formData.insuranceDocument
                                    ? formData.insuranceDocument.name
                                    : 'Upload valid insurance document (PDF or image)'
                                }
                            </p>
                        </div>
                        <ChevronRight size={20} className="text-gray-400" />
                    </button>

                    <input
                        ref={insuranceInputRef}
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleInsuranceChange}
                        className="hidden"
                    />

                    {/* Road Worthy Document */}
                    <button
                        type="button"
                        onClick={() => roadWorthyInputRef.current?.click()}
                        className="w-full flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                    >
                        <div className="p-3 bg-gray-100 rounded-xl">
                            <FileText size={24} className="text-gray-400" />
                        </div>
                        <div className="flex-1 text-left">
                            <h5 className="font-semibold text-gray-900">
                                Road Worthy Document
                            </h5>
                            <p className="text-sm text-gray-500 truncate">
                                {formData.roadWorthyDocument
                                    ? formData.roadWorthyDocument.name
                                    : 'Upload valid road worthy document (PDF or image)'
                                }
                            </p>
                        </div>
                        <ChevronRight size={20} className="text-gray-400" />
                    </button>

                    <input
                        ref={roadWorthyInputRef}
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleRoadWorthyChange}
                        className="hidden"
                    />
                </div>
            </div>
        </div>
    )
}
