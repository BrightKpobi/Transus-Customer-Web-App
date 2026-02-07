'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
    CheckCircle2,
    PlayCircle,
    XCircle,
    Plus,
    Calendar,
} from 'lucide-react'


import { HostHeroCard } from '@/components/shared/host/HostHeroCard'
import { StatCard } from '@/components/shared/host/StatCard'
import { ActionCard } from '@/components/shared/host/ActionCard'

export default function BecomeAHostPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">

            <div className="p-4">
                <button
                    onClick={() => router.push('/')}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                    aria-label="Back to Home"
                    type="button"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-gray-100"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
            </div>
            <div className="mx-auto max-w-7xl px-4 space-y-10 mt-3">

                <HostHeroCard />

                {/* Booking Overview */}
                <section>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Booking Overview
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <StatCard icon={<CheckCircle2 className="text-amber-500" />} label="Confirmed" value="0" />
                        <StatCard icon={<PlayCircle className="text-orange-400" />} label="In Progress" value="0" />
                        <StatCard icon={<CheckCircle2 className="text-green-500" />} label="Completed" value="0" />
                        <StatCard icon={<XCircle className="text-red-500" />} label="Cancelled" value="0" />
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Quick Actions
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <ActionCard
                            icon={<Plus className="text-amber-600" />}
                            title="Add Vehicle"
                            subtitle="List a new car"
                            onClick={() => router.push('/host/add-vehicle')}
                        />
                        <ActionCard
                            icon={<Calendar className="text-amber-600" />}
                            title="Bookings"
                            subtitle="View all requests"
                            onClick={() => router.push('/host/bookings')}
                        />
                    </div>
                </section>

                {/* My Vehicles */}
                <section className="pb-20">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            My Vehicles
                        </h3>
                        <button className="text-amber-600 font-bold text-sm hover:underline">
                            See All
                        </button>
                    </div>

                    <div className="relative group">
                        <div
                            onClick={() => router.push('/host/vehicles/1')}
                            className="flex gap-4 p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl cursor-pointer hover:shadow-md dark:hover:shadow-gray-900/50 transition"
                        >
                            <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src="/img/cars/toyota-corolla.jpg"
                                    alt="Toyota Corolla"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100">Toyota Corolla</h4>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">2010</p>

                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold rounded-md">
                                        Available
                                    </span>
                                    <span className="text-sm font-bold text-amber-600">
                                        GHS 255.00/day
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                router.push('/host/add-vehicle')
                            }}
                            className="absolute -right-2 -bottom-2 p-3 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-200 hover:bg-amber-600 transition-colors"
                        >
                            <Plus size={24} />
                        </button>
                    </div>
                </section>

            </div>
        </div>
    )
}
