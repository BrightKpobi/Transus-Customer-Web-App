'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Calendar, MapPin, MoreVertical } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/layouts/navbar/Navbar'

interface Booking {
    id: string
    vehicleName: string
    vehicleImage: string
    vehicleYear: string
    vehicleRegistration: string
    customerName: string
    bookingId: string
    startDate: string
    endDate: string
    duration: string
    earnings: string
    currency: string
    status: 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
    pickupType: string
}

// Mock data - replace with actual API call
const mockBookings: Booking[] = [
    {
        id: '1',
        vehicleName: 'Toyota Corolla',
        vehicleImage: '/img/cars/toyota-corolla.jpg',
        vehicleYear: '2010',
        vehicleRegistration: 'V-04E1080126',
        customerName: 'Kelvin Asare Baffour',
        bookingId: 'B-ULB8150126',
        startDate: 'Jan 15, 2026',
        endDate: 'Jan 22, 2026',
        duration: '7 days',
        earnings: '1338.75',
        currency: 'GHS',
        status: 'cancelled',
        pickupType: 'Pickup'
    },
]

const statusStyles = {
    confirmed: 'bg-blue-50 text-blue-600',
    'in-progress': 'bg-orange-50 text-orange-600',
    completed: 'bg-green-50 text-green-600',
    cancelled: 'bg-red-50 text-red-600'
}

const statusLabels = {
    confirmed: 'Confirmed',
    'in-progress': 'In Progress',
    completed: 'Completed',
    cancelled: 'Cancelled'
}

export default function AllBookingsPage() {
    const router = useRouter()
    const [bookings, setBookings] = useState<Booking[]>(mockBookings)
    const [openMenuId, setOpenMenuId] = useState<string | null>(null)

    const updateBookingStatus = (bookingId: string, newStatus: Booking['status']) => {
        setBookings(prev => prev.map(booking => 
            booking.id === bookingId 
                ? { ...booking, status: newStatus }
                : booking
        ))
        setOpenMenuId(null)
        toast.success(`Booking status updated to ${statusLabels[newStatus]}`)
    }

    const toggleMenu = (bookingId: string) => {
        setOpenMenuId(openMenuId === bookingId ? null : bookingId)
    }

    const BackButton = () => (
        <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition mb-4"
            aria-label="Back"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
    );
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-6 space-y-4">
                <BackButton />
                {mockBookings.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No bookings yet</p>
                    </div>
                ) : (
                    bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative cursor-pointer hover:shadow-md transition"
                            onClick={() => router.push(`/host/bookings/${booking.id}`)}
                        >
                            {/* Vehicle Info with Status */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={booking.vehicleImage}
                                        alt={booking.vehicleName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-lg">
                                        {booking.vehicleName}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {booking.vehicleYear} • {booking.vehicleRegistration}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[booking.status]}`}>
                                        {statusLabels[booking.status]}
                                    </span>

                                    {/* Three Dots Menu */}
                                    <div className="relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                toggleMenu(booking.id)
                                            }}
                                            className="p-2 hover:bg-gray-100 rounded-full transition"
                                        >
                                            <MoreVertical size={20} className="text-gray-600" />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openMenuId === booking.id && (
                                            <>
                                                <div 
                                                    className="fixed inset-0 z-10"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setOpenMenuId(null)
                                                    }}
                                                />
                                                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            updateBookingStatus(booking.id, 'confirmed')
                                                        }}
                                                        className="w-full px-4 py-2 text-left text-sm hover:bg-blue-50 transition flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                                                        <span>Set as Confirmed</span>
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            updateBookingStatus(booking.id, 'in-progress')
                                                        }}
                                                        className="w-full px-4 py-2 text-left text-sm hover:bg-orange-50 transition flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-orange-600" />
                                                        <span>Set as In Progress</span>
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            updateBookingStatus(booking.id, 'completed')
                                                        }}
                                                        className="w-full px-4 py-2 text-left text-sm hover:bg-green-50 transition flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-green-600" />
                                                        <span>Set as Completed</span>
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            updateBookingStatus(booking.id, 'cancelled')
                                                        }}
                                                        className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 transition flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-red-600" />
                                                        <span>Set as Cancelled</span>
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="flex items-center gap-2 mb-3 text-gray-700">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">
                                        {booking.customerName.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{booking.customerName}</p>
                                    <p className="text-xs text-gray-500">{booking.bookingId}</p>
                                </div>
                            </div>

                            {/* Booking Dates */}
                            <div className="flex items-center justify-between mb-4 py-3 px-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-gray-400" />
                                    <span className="text-sm text-gray-700">
                                        {booking.startDate} - {booking.endDate}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                    {booking.duration}
                                </span>
                            </div>

                            {/* Earnings and Pickup */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Your Earnings</p>
                                    <p className="text-xl font-bold text-amber-500">
                                        {booking.currency} {booking.earnings}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-1 text-gray-500">
                                    <MapPin size={16} />
                                    <span className="text-sm">{booking.pickupType}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
