'use client'

import { VehicleFormData } from '@/app/host/add-vehicle/page'
import { SelectField } from './SelectField'
import { InputField } from './InputField'

interface BasicInfoStepProps {
    formData: VehicleFormData
    updateFormData: (data: Partial<VehicleFormData>) => void
}

const vehicleTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Truck', 'Van', 'Convertible', 'Wagon']
const carMakes = ['Toyota', 'Honda', 'Mercedes-Benz', 'BMW', 'Audi', 'Ford', 'Hyundai', 'Kia', 'Nissan', 'Mazda', 'Volkswagen', 'Lexus']

// Model options based on make
const modelsByMake: Record<string, string[]> = {
    'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tundra', 'Tacoma', 'Land Cruiser'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V', 'Odyssey', 'Fit'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLE', 'GLC', 'A-Class', 'CLA'],
    'BMW': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M5'],
    'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'e-tron'],
    'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Bronco', 'Edge'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Kona'],
    'Kia': ['Optima', 'Sorento', 'Sportage', 'Telluride', 'Soul', 'Forte'],
    'Nissan': ['Altima', 'Maxima', 'Rogue', 'Pathfinder', 'Sentra', 'Murano'],
    'Mazda': ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata'],
    'Volkswagen': ['Golf', 'Jetta', 'Passat', 'Tiguan', 'Atlas', 'ID.4'],
    'Lexus': ['ES', 'IS', 'RX', 'NX', 'GX', 'LX', 'LS'],
}

export function BasicInfoStep({ formData, updateFormData }: BasicInfoStepProps) {
    const availableModels = formData.make ? modelsByMake[formData.make] || [] : []

    return (
        <div className="space-y-5">
            <SelectField
                label="Vehicle Type"
                placeholder="Select vehicle type"
                value={formData.vehicleType}
                options={vehicleTypes}
                onChange={(value: string) => updateFormData({ vehicleType: value })}
            />

            <SelectField
                label="Make (Brand)"
                placeholder="Select make"
                value={formData.make}
                options={carMakes}
                onChange={(value: string) => updateFormData({ make: value, model: '' })}
            />

            <SelectField
                label="Model"
                placeholder={formData.make ? 'Select model' : 'Select make first'}
                value={formData.model}
                options={availableModels}
                onChange={(value: string) => updateFormData({ model: value })}
                disabled={!formData.make}
            />

            <InputField
                label="Year"
                placeholder="e.g., 2023"
                value={formData.year}
                onChange={(value: string) => updateFormData({ year: value })}
                type="number"
            />

            <InputField
                label="VIN"
                placeholder="Vehicle Identification Number (17 characters)"
                value={formData.vin}
                onChange={(value: string) => updateFormData({ vin: value })}
                maxLength={17}
            />

            <InputField
                label="License Plate"
                placeholder="License plate number"
                value={formData.licensePlate}
                onChange={(value: string) => updateFormData({ licensePlate: value })}
            />
        </div>
    )
}
