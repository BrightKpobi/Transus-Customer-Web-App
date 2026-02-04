'use client'

import { useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layouts/navbar/Navbar'
import { 
    ChevronRight, 
    Trash2, 
    Edit2, 
    Check, 
    ImagePlus,
    Plus,
    MapPin,
    MessageSquare,
    X,
    Calendar,
    Building2,
    Car,
    Boxes,
    Palette,
    Settings,
    Fuel,
    Users,
    Hash,
    CreditCard,
    Gauge,
    Search,
    Shield,
    FileText,
    Clock,
    Eye
} from 'lucide-react'
import { toast } from 'sonner'

interface VehicleDetails {
    id: string
    name: string
    code: string
    images: string[]
    isAvailable: boolean
    dailyRate: string
    currency: string
    year: string
    make: string
    model: string
    type: string
    color: string
    transmission: string
    fuelType: string
    seats: string
    vin: string
    licensePlate: string
    mileageLimit: string
    features: string[]
    documents: {
        roadWorthy: { status: 'verified' | 'pending' | 'none'; url?: string }
        insurance: { status: 'verified' | 'pending' | 'none'; url?: string }
    }
    pickupLocations: string[]
    reviews: any[]
}

// Mock data - replace with actual API call
const mockVehicle: VehicleDetails = {
    id: '1',
    name: 'Toyota Corolla',
    code: 'V-04E1080126',
    images: [
        '/img/cars/toyota-corolla.jpg',
        '/img/cars/toyota-corolla.jpg',
        '/img/cars/toyota-corolla.jpg',
    ],
    isAvailable: true,
    dailyRate: '1340.00',
    currency: 'GHS',
    year: '2010',
    make: 'Toyota',
    model: 'Corolla',
    type: 'cars',
    color: 'Red',
    transmission: 'automatic',
    fuelType: 'diesel',
    seats: '4 Or More',
    vin: '12345678991234567',
    licensePlate: 'GC - 2119 - 22',
    mileageLimit: '200 km',
    features: [
        'GPS',
        'Bluetooth',
        'Pet Friendly',
        'Wheelchair Accessible',
        'All Wheel Drive',
        'Backup Camera',
        'Bike Rack',
        'Blind Spot Monitor',
        'Child Seat',
        'USB Charger',
    ],
    documents: {
        roadWorthy: { status: 'verified' },
        insurance: { status: 'verified' },
    },
    pickupLocations: [],
    reviews: [],
}

export default function VehicleDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const [vehicle, setVehicle] = useState<VehicleDetails>(mockVehicle)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showEditRateModal, setShowEditRateModal] = useState(false)
    const [editedRate, setEditedRate] = useState(mockVehicle.dailyRate)
    const [showEditVehicleModal, setShowEditVehicleModal] = useState(false)
    const [editingField, setEditingField] = useState<{ label: string; key: keyof VehicleDetails; value: string } | null>(null)
    const [showSelectModal, setShowSelectModal] = useState<{ label: string; key: keyof VehicleDetails; options: string[] } | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [showEditFeaturesModal, setShowEditFeaturesModal] = useState(false)
    const [tempFeatures, setTempFeatures] = useState<string[]>([])
    const addImagesInputRef = useRef<HTMLInputElement>(null)
    const [showDocumentUploadModal, setShowDocumentUploadModal] = useState(false)
    const insuranceInputRef = useRef<HTMLInputElement>(null)
    const roadWorthyInputRef = useRef<HTMLInputElement>(null)

    const toggleAvailability = () => {
        setVehicle(prev => ({ ...prev, isAvailable: !prev.isAvailable }))
        toast.success(`Vehicle ${vehicle.isAvailable ? 'unavailable' : 'available'} for booking`)
    }

    const handleDeleteImage = (index: number) => {
        if (vehicle.images.length === 1) {
            toast.error('Cannot delete the last image')
            return
        }
        
        setVehicle(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }))
        
        // Adjust current image index if needed
        if (currentImageIndex >= vehicle.images.length - 1) {
            setCurrentImageIndex(Math.max(0, vehicle.images.length - 2))
        }
        
        toast.success('Image deleted successfully')
    }

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this vehicle?')) {
            toast.success('Vehicle deleted successfully')
            router.push('/host')
        }
    }

    const handleUpdateRate = () => {
        setVehicle(prev => ({ ...prev, dailyRate: editedRate }))
        setShowEditRateModal(false)
        toast.success('Daily rate updated successfully')
    }

    const handleCancelEdit = () => {
        setEditedRate(vehicle.dailyRate)
        setShowEditRateModal(false)
    }

    const handleEditField = (label: string, key: keyof VehicleDetails, value: string) => {
        setEditingField({ label, key, value })
    }

    const handleSaveField = () => {
        if (editingField) {
            setVehicle(prev => ({ ...prev, [editingField.key]: editingField.value }))
            toast.success(`${editingField.label} updated successfully`)
            setEditingField(null)
        }
    }

    const handleCancelFieldEdit = () => {
        setEditingField(null)
    }

    const handleSelectField = (label: string, key: keyof VehicleDetails, options: string[]) => {
        setShowSelectModal({ label, key, options })
        setSearchQuery('')
    }

    const handleSelectValue = (value: string) => {
        if (showSelectModal) {
            setVehicle(prev => ({ ...prev, [showSelectModal.key]: value }))
            toast.success(`${showSelectModal.label} updated successfully`)
            setShowSelectModal(null)
            setSearchQuery('')
        }
    }

    const getFilteredOptions = () => {
        if (!showSelectModal) return []
        return showSelectModal.options.filter(option =>
            option.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }

    // Options for select fields
    const makeOptions = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia', 'Mazda', 'Subaru', 'Lexus', 'Chevrolet', 'Dodge', 'Jeep', 'Tesla', 'Porsche', 'Jaguar', 'Land Rover', 'Volvo', 'Peugeot', 'Renault', 'Fiat', 'Holden', 'Mobius Motors', 'Kantanka Automobile', 'Innoson Vehicle Manufacturing', 'Maruti Suzuki', 'Mahindra', 'Tata Motors', 'Arcfox', 'BAIC', 'Bestune', 'Hongqi']
    const modelOptions = ['Corolla', 'Camry', 'RAV4', 'Civic', 'Accord', 'CR-V', 'F-150', 'Mustang', 'Explorer', '3 Series', '5 Series', 'X5', 'C-Class', 'E-Class', 'GLC', 'A4', 'A6', 'Q5', 'Golf', 'Passat', 'Tiguan', 'Altima', 'Sentra', 'Rogue', 'Elantra', 'Sonata', 'Tucson', 'Forte', 'Optima', 'Sportage']
    const vehicleTypeOptions = ['Sedan', 'SUV', 'Truck', 'Van', 'Coupe', 'Hatchback', 'Convertible', 'Wagon', 'Minivan', 'Crossover']
    const colorOptions = ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Brown', 'Beige', 'Gold', 'Orange', 'Yellow', 'Purple', 'Pink']
    const transmissionOptions = ['Automatic', 'Manual', 'CVT', 'Semi-Automatic', 'Dual-Clutch']
    const fuelTypeOptions = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid', 'LPG', 'CNG', 'Hydrogen']
    const seatsOptions = ['4 Or More', '5 Or More', '6 Or More', '7 Or More', '8 Or More']

    // All available features
    const allFeatures = [
        'Has Driver',
        'GPS',
        'Bluetooth',
        'Pet Friendly',
        'Wheelchair Accessible',
        'All Wheel Drive',
        'Android Auto',
        'Apple CarPlay',
        'AUX Input',
        'Backup Camera',
        'Bike Rack',
        'Blind Spot Monitor',
        'Child Seat',
        'Convertible',
        'Heated Seats',
        'Keyless Entry',
        'Roof Rack',
        'Sunroof',
        'Toll Pass',
        'Tow Hitch',
        'USB Charger',
        'USB Input',
    ]

    const handleOpenEditFeatures = () => {
        setTempFeatures([...vehicle.features])
        setShowEditFeaturesModal(true)
    }

    const toggleFeature = (feature: string) => {
        if (tempFeatures.includes(feature)) {
            setTempFeatures(tempFeatures.filter(f => f !== feature))
        } else {
            setTempFeatures([...tempFeatures, feature])
        }
    }

    const handleSaveFeatures = () => {
        setVehicle(prev => ({ ...prev, features: tempFeatures }))
        setShowEditFeaturesModal(false)
        toast.success('Features updated successfully')
    }

    const handleCancelFeatures = () => {
        setTempFeatures([])
        setShowEditFeaturesModal(false)
    }

    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files.length > 0) {
            const remainingSlots = 10 - vehicle.images.length
            if (remainingSlots === 0) {
                toast.error('Maximum of 10 images allowed')
                return
            }
            
            const newImages = Array.from(files).slice(0, remainingSlots).map(file => URL.createObjectURL(file))
            setVehicle(prev => ({
                ...prev,
                images: [...prev.images, ...newImages]
            }))
            toast.success(`${newImages.length} image(s) added successfully`)
        }
    }

    const handleDocumentUpload = (type: 'insurance' | 'roadWorthy') => {
        if (type === 'insurance') {
            insuranceInputRef.current?.click()
        } else {
            roadWorthyInputRef.current?.click()
        }
        setShowDocumentUploadModal(false)
    }

    const handleInsuranceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setVehicle(prev => ({
                ...prev,
                documents: {
                    ...prev.documents,
                    insurance: { status: 'pending', url: URL.createObjectURL(file) }
                }
            }))
            toast.success('Insurance document uploaded - pending approval')
        }
    }

    const handleRoadWorthyUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setVehicle(prev => ({
                ...prev,
                documents: {
                    ...prev.documents,
                    roadWorthy: { status: 'pending', url: URL.createObjectURL(file) }
                }
            }))
            toast.success('Road worthy document uploaded - pending approval')
        }
    }

    const handleViewDocument = (type: 'insurance' | 'roadWorthy') => {
        const doc = type === 'insurance' ? vehicle.documents.insurance : vehicle.documents.roadWorthy
        if (doc.url) {
            window.open(doc.url, '_blank')
        } else {
            toast.error('No document available to view')
        }
    }

    const handleDeleteDocument = (type: 'insurance' | 'roadWorthy') => {
        const documentName = type === 'insurance' ? 'Insurance' : 'Road Worthy'
        if (confirm(`Are you sure you want to delete the ${documentName} document?`)) {
            setVehicle(prev => ({
                ...prev,
                documents: {
                    ...prev.documents,
                    [type]: { status: 'none' }
                }
            }))
            toast.success(`${documentName} document deleted successfully`)
        }
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
            {/* Header with Back Button and Delete */}
            <div className="relative">
                {/* Image Carousel */}
                <div className="relative w-full h-80">
                    <Image
                        src={vehicle.images[currentImageIndex]}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                    />
                    
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="absolute top-4 left-4 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition"
                    >
                        <ChevronRight size={24} className="text-gray-900 rotate-180" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {vehicle.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentImageIndex 
                                        ? 'w-8 bg-white' 
                                        : 'w-2 bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Image Thumbnails */}
                <div className="px-4 py-4 flex gap-3">
                    {vehicle.images.slice(0, 3).map((img, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            <button
                                onClick={() => setCurrentImageIndex(index)}
                                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 ${
                                    index === currentImageIndex 
                                        ? 'border-amber-500' 
                                        : 'border-transparent'
                                }`}
                            >
                                <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                            </button>
                            
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDeleteImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 z-10"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 pb-20 space-y-4">
                {/* Vehicle Title */}
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{vehicle.name}</h1>
                        <p className="text-sm text-gray-500 mt-1">Code: {vehicle.code}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                        vehicle.isAvailable 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-600'
                    }`}>
                        {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                    
                    {/* Availability Toggle */}
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h4 className="font-semibold text-gray-900">Availability</h4>
                            <p className="text-sm text-gray-500">Vehicle is available for booking</p>
                        </div>
                        <button
                            onClick={toggleAvailability}
                            className={`relative w-14 h-8 rounded-full transition-colors ${
                                vehicle.isAvailable ? 'bg-amber-400' : 'bg-gray-300'
                            }`}
                        >
                            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                                vehicle.isAvailable ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                        </button>
                    </div>

                    {/* Edit Daily Rate */}
                    <button 
                        onClick={() => setShowEditRateModal(true)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <Edit2 size={18} className="text-amber-600" />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-gray-900">Edit Daily Rate</p>
                                <p className="text-sm text-gray-500">Current: {vehicle.currency} {vehicle.dailyRate}/day</p>
                            </div>
                        </div>
                        <ChevronRight size={20} className="text-gray-400" />
                    </button>
                </div>

                {/* Daily Rate Banner */}
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl">$</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Daily Rate</p>
                        <p className="text-2xl font-bold text-amber-600">
                            {vehicle.currency} {vehicle.dailyRate}/day
                        </p>
                    </div>
                </div>

                {/* Vehicle Information */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900">Vehicle Information</h3>
                        <button 
                            onClick={() => setShowEditVehicleModal(true)}
                            className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition"
                        >
                            <Edit2 size={18} className="text-amber-600" />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {[
                            { label: 'Year', value: vehicle.year },
                            { label: 'Make', value: vehicle.make },
                            { label: 'Model', value: vehicle.model },
                            { label: 'Type', value: vehicle.type },
                            { label: 'Color', value: vehicle.color },
                            { label: 'Transmission', value: vehicle.transmission },
                            { label: 'Fuel Type', value: vehicle.fuelType },
                            { label: 'Seats', value: vehicle.seats },
                            { label: 'VIN', value: vehicle.vin },
                            { label: 'License Plate', value: vehicle.licensePlate },
                            { label: 'Mileage Limit', value: vehicle.mileageLimit },
                        ].map((item) => (
                            <div key={item.label} className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">{item.label}</span>
                                <span className="font-medium text-gray-900 text-right">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900">Features</h3>
                        <button 
                            onClick={handleOpenEditFeatures}
                            className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition"
                        >
                            <Edit2 size={18} className="text-amber-600" />
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature) => (
                            <div
                                key={feature}
                                className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium flex items-center gap-2 border border-green-200"
                            >
                                <Check size={16} />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vehicle Images */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h3 className="font-bold text-gray-900">Vehicle Images</h3>
                            <p className="text-sm text-gray-500">{vehicle.images.length} of 10 images</p>
                        </div>
                        <button 
                            onClick={() => addImagesInputRef.current?.click()}
                            disabled={vehicle.images.length >= 10}
                            className={`px-4 py-2 rounded-full flex items-center gap-2 font-semibold transition ${
                                vehicle.images.length >= 10
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-amber-400 text-white hover:bg-amber-500'
                            }`}
                        >
                            <ImagePlus size={18} />
                            Add Images
                        </button>
                    </div>
                    <input
                        ref={addImagesInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleAddImages}
                        className="hidden"
                    />
                </div>

                {/* Vehicle Documents */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <span className="text-xl">📄</span>
                            </div>
                            <h3 className="font-bold text-gray-900">Vehicle Documents</h3>
                        </div>
                        <button 
                            onClick={() => setShowDocumentUploadModal(true)}
                            className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition"
                        >
                            <Plus size={18} className="text-amber-600" />
                        </button>
                    </div>
                    
                    {/* Hidden file inputs */}
                    <input
                        ref={insuranceInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleInsuranceUpload}
                        className="hidden"
                    />
                    <input
                        ref={roadWorthyInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleRoadWorthyUpload}
                        className="hidden"
                    />

                    <div className="space-y-3">
                        {/* Road Worthy */}
                        <div className={`flex items-center justify-between p-4 border-2 rounded-2xl ${
                            vehicle.documents.roadWorthy.status === 'verified' 
                                ? 'border-green-500 bg-green-50/30' 
                                : vehicle.documents.roadWorthy.status === 'pending'
                                ? 'border-amber-500 bg-amber-50/30'
                                : 'border-gray-300 bg-gray-50/30'
                        }`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                    vehicle.documents.roadWorthy.status === 'verified'
                                        ? 'bg-green-100'
                                        : vehicle.documents.roadWorthy.status === 'pending'
                                        ? 'bg-amber-100'
                                        : 'bg-gray-100'
                                }`}>
                                    {vehicle.documents.roadWorthy.status === 'verified' ? (
                                        <Check size={24} className="text-green-600" />
                                    ) : vehicle.documents.roadWorthy.status === 'pending' ? (
                                        <Clock size={24} className="text-amber-600" />
                                    ) : (
                                        <FileText size={24} className="text-gray-400" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Road Worthy</h4>
                                    <div className={`flex items-center gap-1 text-sm ${
                                        vehicle.documents.roadWorthy.status === 'verified'
                                            ? 'text-green-600'
                                            : vehicle.documents.roadWorthy.status === 'pending'
                                            ? 'text-amber-600'
                                            : 'text-gray-500'
                                    }`}>
                                        {vehicle.documents.roadWorthy.status === 'verified' ? (
                                            <><Check size={14} /><span>Verified</span></>
                                        ) : vehicle.documents.roadWorthy.status === 'pending' ? (
                                            <><Clock size={14} /><span>Pending Approval</span></>
                                        ) : (
                                            <span>Not uploaded</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => handleDeleteDocument('roadWorthy')}
                                    disabled={vehicle.documents.roadWorthy.status === 'none'}
                                    className="w-10 h-10 hover:bg-red-100 rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Trash2 size={18} className="text-red-500" />
                                </button>
                                <button 
                                    onClick={() => handleViewDocument('roadWorthy')}
                                    disabled={vehicle.documents.roadWorthy.status === 'none'}
                                    className="w-10 h-10 hover:bg-blue-100 rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Eye size={18} className="text-blue-600" />
                                </button>
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className={`flex items-center justify-between p-4 border-2 rounded-2xl ${
                            vehicle.documents.insurance.status === 'verified' 
                                ? 'border-green-500 bg-green-50/30' 
                                : vehicle.documents.insurance.status === 'pending'
                                ? 'border-amber-500 bg-amber-50/30'
                                : 'border-gray-300 bg-gray-50/30'
                        }`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                    vehicle.documents.insurance.status === 'verified'
                                        ? 'bg-green-100'
                                        : vehicle.documents.insurance.status === 'pending'
                                        ? 'bg-amber-100'
                                        : 'bg-gray-100'
                                }`}>
                                    {vehicle.documents.insurance.status === 'verified' ? (
                                        <Check size={24} className="text-green-600" />
                                    ) : vehicle.documents.insurance.status === 'pending' ? (
                                        <Clock size={24} className="text-amber-600" />
                                    ) : (
                                        <Shield size={24} className="text-gray-400" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Insurance</h4>
                                    <div className={`flex items-center gap-1 text-sm ${
                                        vehicle.documents.insurance.status === 'verified'
                                            ? 'text-green-600'
                                            : vehicle.documents.insurance.status === 'pending'
                                            ? 'text-amber-600'
                                            : 'text-gray-500'
                                    }`}>
                                        {vehicle.documents.insurance.status === 'verified' ? (
                                            <><Check size={14} /><span>Verified</span></>
                                        ) : vehicle.documents.insurance.status === 'pending' ? (
                                            <><Clock size={14} /><span>Pending Approval</span></>
                                        ) : (
                                            <span>Not uploaded</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => handleDeleteDocument('insurance')}
                                    disabled={vehicle.documents.insurance.status === 'none'}
                                    className="w-10 h-10 hover:bg-red-100 rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Trash2 size={18} className="text-red-500" />
                                </button>
                                <button 
                                    onClick={() => handleViewDocument('insurance')}
                                    disabled={vehicle.documents.insurance.status === 'none'}
                                    className="w-10 h-10 hover:bg-blue-100 rounded-full flex items-center justify-center transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Eye size={18} className="text-blue-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pickup Locations */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <MapPin size={20} className="text-amber-500" />
                            <h3 className="font-bold text-gray-900">Pickup Locations</h3>
                        </div>
                        <button 
                            onClick={() => router.push(`/host/vehicles/${params.id}/pickup-locations`)}
                            className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition"
                        >
                            <Edit2 size={18} className="text-amber-600" />
                        </button>
                    </div>

                    {vehicle.pickupLocations.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <MapPin size={28} className="text-amber-500" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">No pickup locations yet</h4>
                            <p className="text-sm text-gray-500">
                                Tap to add locations where customers can pick up this vehicle
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {vehicle.pickupLocations.map((location, index) => (
                                <div key={index} className="p-3 bg-gray-50 rounded-xl">
                                    {location}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Reviews */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">Reviews</h3>

                    {vehicle.reviews.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <MessageSquare size={28} className="text-gray-400" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">No reviews yet</h4>
                            <p className="text-sm text-gray-500">Be the first to review!</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {vehicle.reviews.map((review, index) => (
                                <div key={index} className="p-3 bg-gray-50 rounded-xl">
                                    {/* Review content here */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Edit Daily Rate Modal */}
            {showEditRateModal && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={handleCancelEdit}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl z-50 p-6 max-w-md mx-auto shadow-2xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Quick Edit</h2>
                        <p className="text-sm text-gray-600 mb-6">Daily Rate</p>
                        
                        <input
                            type="number"
                            value={editedRate}
                            onChange={(e) => setEditedRate(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-medium text-gray-900 outline-none focus:border-amber-400 transition mb-6"
                            placeholder="Enter daily rate"
                            step="0.01"
                        />
                        
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleCancelEdit}
                                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdateRate}
                                className="flex-1 px-6 py-3 bg-amber-400 text-white rounded-full font-semibold hover:bg-amber-500 transition"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </>
            )}
            
            {/* Edit Vehicle Information Modal */}
            {showEditVehicleModal && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setShowEditVehicleModal(false)}
                    />
                    
                    {/* Bottom Sheet Modal */}
                    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-bold text-gray-900">Edit Vehicle Information</h2>
                                <button 
                                    onClick={() => setShowEditVehicleModal(false)}
                                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">Tap on a field to edit</p>
                            
                            {/* Editable Fields */}
                            <div className="space-y-3">
                                {/* Year */}
                                <button 
                                    onClick={() => handleEditField('Year', 'year', vehicle.year)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Calendar size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Year</p>
                                        <p className="font-bold text-gray-900">{vehicle.year}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Make */}
                                <button 
                                    onClick={() => handleSelectField('Make', 'make', makeOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Building2 size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Make</p>
                                        <p className="font-bold text-gray-900">{vehicle.make}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Model */}
                                <button 
                                    onClick={() => handleSelectField('Model', 'model', modelOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Car size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Model</p>
                                        <p className="font-bold text-gray-900">{vehicle.model}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Vehicle Type */}
                                <button 
                                    onClick={() => handleSelectField('Vehicle Type', 'type', vehicleTypeOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Boxes size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Vehicle Type</p>
                                        <p className="font-bold text-gray-900">{vehicle.type}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Color */}
                                <button 
                                    onClick={() => handleSelectField('Color', 'color', colorOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Palette size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Color</p>
                                        <p className="font-bold text-gray-900">{vehicle.color}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Transmission */}
                                <button 
                                    onClick={() => handleSelectField('Transmission', 'transmission', transmissionOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Settings size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Transmission</p>
                                        <p className="font-bold text-gray-900">{vehicle.transmission}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Fuel Type */}
                                <button 
                                    onClick={() => handleSelectField('Fuel Type', 'fuelType', fuelTypeOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Fuel size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Fuel Type</p>
                                        <p className="font-bold text-gray-900">{vehicle.fuelType}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Seats */}
                                <button 
                                    onClick={() => handleSelectField('Seats', 'seats', seatsOptions)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Users size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Seats</p>
                                        <p className="font-bold text-gray-900">{vehicle.seats}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* VIN */}
                                <button 
                                    onClick={() => handleEditField('VIN', 'vin', vehicle.vin)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Hash size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">VIN</p>
                                        <p className="font-bold text-gray-900">{vehicle.vin}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* License Plate */}
                                <button 
                                    onClick={() => handleEditField('License Plate', 'licensePlate', vehicle.licensePlate)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <CreditCard size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">License Plate</p>
                                        <p className="font-bold text-gray-900">{vehicle.licensePlate}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                                
                                {/* Mileage Limit */}
                                <button 
                                    onClick={() => handleEditField('Mileage Limit', 'mileageLimit', vehicle.mileageLimit)}
                                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition text-left"
                                >
                                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Gauge size={20} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-0.5">Mileage Limit</p>
                                        <p className="font-bold text-gray-900">{vehicle.mileageLimit}</p>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
            {/* Edit Features Modal */}
            {showEditFeaturesModal && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={handleCancelFeatures}
                    />
                    
                    {/* Bottom Sheet Modal */}
                    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-bold text-gray-900">Edit Features</h2>
                                <button 
                                    onClick={handleCancelFeatures}
                                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-6">Toggle features on or off</p>
                            
                            {/* Features List */}
                            <div className="space-y-4 mb-6">
                                {allFeatures.map((feature) => {
                                    const isActive = tempFeatures.includes(feature)
                                    return (
                                        <div key={feature} className="flex items-center justify-between">
                                            <span className="text-gray-900 font-medium">{feature}</span>
                                            <button
                                                onClick={() => toggleFeature(feature)}
                                                className={`relative w-14 h-8 rounded-full transition-colors ${
                                                    isActive ? 'bg-amber-400' : 'bg-gray-300'
                                                }`}
                                            >
                                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                                                    isActive ? 'translate-x-7' : 'translate-x-1'
                                                }`} />
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            {/* Save Button */}
                            <button
                                onClick={handleSaveFeatures}
                                className="w-full px-6 py-4 bg-amber-400 text-white rounded-full font-bold hover:bg-amber-500 transition text-lg"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </>
            )}
            
            {/* Select Modal with Search */}
            {showSelectModal && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <button
                            onClick={() => {
                                setShowSelectModal(null)
                                setSearchQuery('')
                            }}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                        >
                            <ChevronRight size={24} className="text-gray-900 rotate-180" />
                        </button>
                        <h2 className="text-lg font-bold text-gray-900">Select {showSelectModal.label}</h2>
                        <div className="w-10" />
                    </div>

                    {/* Search Bar */}
                    <div className="p-4">
                        <div className="relative">
                            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`Search ${showSelectModal.label.toLowerCase()}...`}
                                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-400 transition"
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="flex-1 overflow-y-auto px-4 pb-4">
                        {getFilteredOptions().length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No results found</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {getFilteredOptions().map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelectValue(option)}
                                        className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-left font-medium text-gray-900 hover:bg-gray-50 hover:border-amber-400 transition"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {/* Field Edit Modal */}
            {editingField && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={handleCancelFieldEdit}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-3xl z-50 p-6 max-w-md mx-auto shadow-2xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Quick Edit</h2>
                        <p className="text-sm text-gray-600 mb-6">{editingField.label}</p>
                        
                        <input
                            type="text"
                            value={editingField.value}
                            onChange={(e) => setEditingField({ ...editingField, value: e.target.value })}
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-medium text-gray-900 outline-none focus:border-amber-400 transition mb-6"
                            placeholder={`Enter ${editingField.label.toLowerCase()}`}
                        />
                        
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleCancelFieldEdit}
                                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveField}
                                className="flex-1 px-6 py-3 bg-amber-400 text-white rounded-full font-semibold hover:bg-amber-500 transition"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Upload Document Modal */}
            {showDocumentUploadModal && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={() => setShowDocumentUploadModal(false)}
                    />
                    
                    {/* Bottom Sheet Modal */}
                    <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-50 p-6 max-w-md mx-auto shadow-2xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Document</h2>
                        <p className="text-sm text-gray-500 mb-6">Select the type of document to upload</p>
                        
                        <div className="space-y-3 mb-6">
                            {/* Insurance Option */}
                            <button
                                onClick={() => handleDocumentUpload('insurance')}
                                className="w-full flex items-center gap-4 p-4 bg-blue-50 border-2 border-blue-500 rounded-2xl hover:bg-blue-100 transition"
                            >
                                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Shield size={28} className="text-white" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="font-bold text-gray-900 mb-0.5">Insurance</h3>
                                    <p className="text-sm text-gray-600">Vehicle insurance document</p>
                                </div>
                            </button>

                            {/* Road Worthy Option */}
                            <button
                                onClick={() => handleDocumentUpload('roadWorthy')}
                                className="w-full flex items-center gap-4 p-4 bg-green-50 border-2 border-green-500 rounded-2xl hover:bg-green-100 transition"
                            >
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <FileText size={28} className="text-white" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="font-bold text-gray-900 mb-0.5">Road Worthy</h3>
                                    <p className="text-sm text-gray-600">Road worthiness certificate</p>
                                </div>
                            </button>
                        </div>

                        <button
                            onClick={() => setShowDocumentUploadModal(false)}
                            className="w-full px-6 py-4 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </div>
        </>
    )
}
