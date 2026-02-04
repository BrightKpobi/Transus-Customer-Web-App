'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Phone, Mail, MapPin, User, Receipt, Wallet } from 'lucide-react'
import Navbar from '@/components/layouts/navbar/Navbar'

interface BookingDetails {
    id: string
    vehicleName: string
    vehicleImage: string
    vehicleYear: string
    vehicleRegistration: string
    licensePlate: string
    bookingStatus: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
    paymentStatus: 'pending' | 'paid' | 'refunded'
    customerName: string
    customerEmail: string
    customerPhone: string
    startDate: string
    startTime: string
    endDate: string
    endTime: string
    duration: string
    isDriveType: boolean
    isPickup: boolean
    dailyRate: string
    numberOfDays: number
    baseFee: string
    subtotal: string
    platformFeePercent: number
    platformFee: string
    yourSharePercent: number
    yourShare: string
    totalEarnings: string
    currency: string
}

// Mock data - replace with actual API call
const mockBookingDetails: BookingDetails = {
    id: '1',
    vehicleName: 'Toyota Corolla',
    vehicleImage: '/img/cars/toyota-corolla.jpg',
    vehicleYear: '2010',
    vehicleRegistration: 'V-04E1080126',
    licensePlate: 'GC - 2119 - 22',
    bookingStatus: 'pending',
    paymentStatus: 'pending',
    customerName: 'Kelvin Asare Baffour',
    customerEmail: 'asarekelvin593@gmail.com',
    customerPhone: '+233558556726',
    startDate: 'Thu, Jan 15, 2026',
    startTime: '12:00 AM',
    endDate: 'Thu, Jan 22, 2026',
    endTime: '12:00 AM',
    duration: '7 days',
    isDriveType: true,
    isPickup: true,
    dailyRate: '255.00',
    numberOfDays: 7,
    baseFee: '1785.00',
    subtotal: '1785.00',
    platformFeePercent: 25,
    platformFee: '446.25',
    yourSharePercent: 75,
    yourShare: '1338.75',
    totalEarnings: '1338.75',
    currency: 'GHS'
}

const statusStyles = {
    pending: 'bg-orange-50 text-orange-600 border-orange-200',
    confirmed: 'bg-blue-50 text-blue-600 border-blue-200',
    'in-progress': 'bg-purple-50 text-purple-600 border-purple-200',
    completed: 'bg-green-50 text-green-600 border-green-200',
    cancelled: 'bg-red-50 text-red-600 border-red-200',
    paid: 'bg-green-50 text-green-600 border-green-200',
    refunded: 'bg-gray-50 text-gray-600 border-gray-200'
}

const statusLabels = {
    pending: 'Pending',
    confirmed: 'Confirmed',
    'in-progress': 'In Progress',
    completed: 'Completed',
    cancelled: 'Cancelled',
    paid: 'Paid',
    refunded: 'Refunded'
}

export default function BookingDetailsPage() {
    const params = useParams()
    const booking = mockBookingDetails // Replace with actual fetch based on params.id

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-auto max-w-7xl px-4 py-6 space-y-4">
                {/* Vehicle Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative w-full h-48">
                        <Image
                            src={booking.vehicleImage}
                            alt={booking.vehicleName}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {booking.vehicleName}
                        </h2>
                        <p className="text-gray-600 mb-1">
                            {booking.vehicleYear} • {booking.vehicleRegistration}
                        </p>
                        <p className="text-sm text-gray-500">
                            License: {booking.licensePlate}
                        </p>
                    </div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Booking Status</p>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${statusStyles[booking.bookingStatus]}`}>
                            {statusLabels[booking.bookingStatus]}
                        </span>
                    </div>
                    <div className="bg-white rounded-2xl p-4 border border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Payment Status</p>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${statusStyles[booking.paymentStatus]}`}>
                            {statusLabels[booking.paymentStatus]}
                        </span>
                    </div>
                </div>

                {/* Guest Information */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <User size={20} className="text-amber-500" />
                        <h3 className="font-bold text-gray-900">Guest Information</h3>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-semibold text-gray-600">
                                {booking.customerName.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{booking.customerName}</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                <Mail size={14} />
                                <span>{booking.customerEmail}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 pl-1">
                        <Phone size={16} className="text-gray-400" />
                        <span className="text-sm">{booking.customerPhone}</span>
                    </div>
                </div>

                {/* Booking Period */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar size={20} className="text-amber-500" />
                        <h3 className="font-bold text-gray-900">Booking Period</h3>
                    </div>

                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Start Date</p>
                            <p className="font-bold text-gray-900">{booking.startDate}</p>
                            <p className="text-sm text-gray-600">{booking.startTime}</p>
                        </div>

                        <div className="px-4 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold">
                            {booking.duration}
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-500 mb-1">End Date</p>
                            <p className="font-bold text-gray-900">{booking.endDate}</p>
                            <p className="text-sm text-gray-600">{booking.endTime}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {booking.isDriveType && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
                                <User size={16} />
                                <span>Self-Drive</span>
                            </div>
                        )}
                        {booking.isPickup && (
                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
                                <MapPin size={16} />
                                <span>Pickup</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Receipt size={20} className="text-amber-500" />
                        <h3 className="font-bold text-gray-900">Pricing Breakdown</h3>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-700">
                            <span className="text-sm">Daily Rate</span>
                            <span className="font-medium">{booking.currency} {booking.dailyRate}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span className="text-sm">Number of Days</span>
                            <span className="font-medium">{booking.numberOfDays} days</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span className="text-sm">Base Fee</span>
                            <span className="font-medium">{booking.currency} {booking.baseFee}</span>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3 mt-3">
                            <div className="flex justify-between text-gray-900 font-semibold">
                                <span>Subtotal</span>
                                <span>{booking.currency} {booking.subtotal}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Your Earnings */}
                <div className="bg-gradient-to-br from-gray-900 via-amber-900 to-amber-600 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center gap-2 text-white mb-4">
                        <Wallet size={20} />
                        <h3 className="font-bold text-lg">Your Earnings</h3>
                    </div>

                    <div className="flex justify-between items-start mb-6">
                        <div className="text-white">
                            <p className="text-sm opacity-90 mb-1">Platform Fee ({booking.platformFeePercent}.00%)</p>
                            <p className="text-lg font-semibold">-{booking.currency} {booking.platformFee}</p>
                        </div>
                        <div className="text-white text-right">
                            <p className="text-sm opacity-90 mb-1">Your Share ({booking.yourSharePercent}.00%)</p>
                            <p className="text-lg font-semibold">{booking.currency} {booking.yourShare}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4">
                        <p className="text-center text-xs text-gray-600 mb-2">Total Earnings</p>
                        <p className="text-center text-3xl font-bold text-amber-500">
                            {booking.currency} {booking.totalEarnings}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
