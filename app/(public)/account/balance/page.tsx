'use client'

import Navbar from '@/components/layouts/navbar/Navbar'
import WalletOverview from '@/components/shared/balance/WalletOverview'
import QuickActions from '@/components/shared/balance/QuickActions'
import PaymentMethodDropdown from '@/components/shared/balance/PaymentMethodDropdown'

export default function BalancePage() {
    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
                <Navbar />
            </div>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div className="lg:col-span-7 space-y-8 lg:space-y-10">
                        <WalletOverview />
                        <QuickActions />
                    </div>

                    <div className="lg:col-span-5 space-y-8 lg:space-y-10">
                        <PaymentMethodDropdown />
                    </div>
                </div>
            </main>
        </div>
    )
}
