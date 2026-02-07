'use client'

import React from 'react'
import Image from 'next/image'
import { MoreVertical, Calendar, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Trip {
    id: number;
    car: string;
    reg: string;
    date: string;
    owner: string;
    price: string;
    status: string;
    image: string;
}

// Mock Data from your screenshot
const trips: Trip[] = [
    {
        id: 1,
        car: 'Hyundai Kona',
        reg: 'B-6Q00220126',
        date: '31/1/2026 - 7/2/2026',
        owner: 'Teddy Agudogo',
        price: 'GHS 991.20',
        status: 'PENDING',
        image: '/cars/hyundai-kona.jpg'
    },
    {
        id: 2,
        car: 'Honda HR-V',
        reg: 'B-9WMU210126',
        date: '21/1/2026 - 27/1/2026',
        owner: 'Teddy Mawuli Agudogo',
        price: 'GHS 6408.00',
        status: 'CANCELLED',
        image: '/cars/honda-hrv.jpg'
    },
    {
        id: 3,
        car: 'Toyota Corolla',
        reg: 'B-AMA4180126',
        date: '21/1/2026 - 25/1/2026',
        owner: 'Kofi Mawuli Teddy',
        price: 'GHS 1224.00',
        status: 'PENDING',
        image: '/cars/toyota-corolla.jpg'
    }
];

export default function TripPage() {
    const router = useRouter();

    const BackButton = () => (
        <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition mb-4"
            aria-label="Back"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-gray-100"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
    );
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <BackButton />
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-10">
                        {trips.map((trip) => (
                            <TripCard key={trip.id} trip={trip} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function TripCard({ trip }: { trip: Trip }) {
    const isCancelled = trip.status === 'CANCELLED';

    return (
        <div className="flex gap-4 items-start group">
            {/* Next.js Optimized Image */}
            <div className="relative h-24 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <Image
                    src={trip.image}
                    alt={trip.car}
                    fill
                    className="object-cover"
                    sizes="112px"
                />
            </div>

            {/* Info Content */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div className="truncate">
                        <h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 truncate leading-tight">
                            {trip.car}
                        </h3>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium mt-0.5 uppercase tracking-tighter">
                            {trip.reg}
                        </p>
                    </div>

                    {/* Status Badge */}
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${isCancelled
                        ? 'bg-[#FF4C4C] text-white'
                        : 'bg-[#FFA500] text-white'
                        }`}>
                        {trip.status}
                    </span>
                </div>

                {/* Date Section */}
                <div className="flex items-center gap-2 mt-2.5 text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="text-gray-400 dark:text-gray-500" />
                    <span className="text-[12px] font-medium tracking-tight">{trip.date}</span>
                </div>

                {/* Footer: Owner and Price */}
                <div className="flex justify-between items-end mt-2">
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 truncate pr-2">
                        {trip.owner}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold text-[#4285F4] whitespace-nowrap">
                            {trip.price}
                        </span>
                        <button className="text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}