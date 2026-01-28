'use client'

import Image from 'next/image'
import {
    CheckCircle2,
    PlayCircle,
    XCircle,
    Plus,
    Calendar,
} from 'lucide-react'

import { PageNavbar } from '@/components/layouts/page-navbar/PageNavbar'
import { HostHeroCard } from '@/components/shared/host/HostHeroCard'
import { StatCard } from '@/components/shared/host/StatCard'
import { ActionCard } from '@/components/shared/host/ActionCard'

export default function BecomeAHostPage() {
    return (
        <div className="min-h-screen bg-white">

            <PageNavbar title="Host Dashboard" titlePosition="center" />


            <div className="mx-auto max-w-7xl px-4 space-y-10 mt-3">

                <HostHeroCard />

                {/* Booking Overview */}
                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Booking Overview
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <StatCard icon={<CheckCircle2 className="text-blue-500" />} label="Confirmed" value="0" />
                        <StatCard icon={<PlayCircle className="text-orange-400" />} label="In Progress" value="0" />
                        <StatCard icon={<CheckCircle2 className="text-green-500" />} label="Completed" value="0" />
                        <StatCard icon={<XCircle className="text-red-500" />} label="Cancelled" value="0" />
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Quick Actions
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                        <ActionCard
                            icon={<Plus className="text-blue-600" />}
                            title="Add Vehicle"
                            subtitle="List a new car"
                        />
                        <ActionCard
                            icon={<Calendar className="text-blue-600" />}
                            title="Bookings"
                            subtitle="View all requests"
                        />
                    </div>
                </section>

                {/* My Vehicles */}
                <section className="pb-20">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">
                            My Vehicles
                        </h3>
                        <button className="text-blue-600 font-bold text-sm hover:underline">
                            See All
                        </button>
                    </div>

                    <div className="relative group">
                        <div className="flex gap-4 p-3 bg-white border border-gray-100 rounded-2xl">
                            <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    src="/cars/toyota-corolla.jpg"
                                    alt="Toyota Corolla"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900">Toyota Corolla</h4>
                                <p className="text-xs text-gray-400 mb-2">2010</p>

                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-md">
                                        Available
                                    </span>
                                    <span className="text-sm font-bold text-blue-600">
                                        GHS 255.00/day
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button className="absolute -right-2 -bottom-2 p-3 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-600 transition-colors">
                            <Plus size={24} />
                        </button>
                    </div>
                </section>

            </div>
        </div>
    )
}
