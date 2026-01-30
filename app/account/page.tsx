'use client'

import { useTheme } from 'next-themes' // 🔑 import this
import { User, ShieldCheck, CreditCard, Car, Wallet, Info, Sun, Moon, Monitor, } from 'lucide-react'

import { AccountHeader } from '@/components/shared/account/AccountHeader'
import { AccountSection } from '@/components/shared/account/AccountSection'
import { AccountItem } from '@/components/shared/account/AccountItem'
import Navbar from '@/components/layouts/navbar/Navbar'

export default function AccountPage() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="min-h-screen bg-gray-50 ">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-6 space-y-8">

                <AccountHeader />

                <AccountSection title="Account">
                    <AccountItem
                        icon={<User size={22} />}
                        title="Personal Information"
                        href="/account/personal-information"
                    />
                    <AccountItem
                        icon={<ShieldCheck size={22} />}
                        title="KYC Verification"
                        href="/account/kyc-verification"
                    />
                    <AccountItem
                        icon={<CreditCard size={22} />}
                        title="License Verification"
                        href="/account/license-verification"
                    />
                </AccountSection>

                <AccountSection title="Hosting">
                    <AccountItem
                        icon={<Car size={22} />}
                        title="List Your Car"
                        subtitle="Earn money by sharing your car"
                        href="/host"
                    />
                </AccountSection>

                <AccountSection title="Wallet">
                    <AccountItem
                        icon={<Wallet size={22} />}
                        title="My Balance"
                        subtitle="Manage payments & withdrawals"
                        href="/account/balance"
                    />
                </AccountSection>

                <AccountSection title="Support">
                    <AccountItem
                        icon={<Info size={22} />}
                        title="About"
                        href="/account/about"
                    />
                </AccountSection>

                <AccountSection title="Appearance" variant="grid">
                    <AccountItem
                        icon={<Sun size={20} />}
                        title="Light"
                        variant="grid"
                        isSelected={theme === 'light'}
                        onClick={() => setTheme('light')}
                    />

                    <AccountItem
                        icon={<Moon size={20} />}
                        title="Dark"
                        variant="grid"
                        isSelected={theme === 'dark'}
                        onClick={() => setTheme('dark')}
                    />

                    <AccountItem
                        icon={<Monitor size={20} />}
                        title="System"
                        variant="grid"
                        isSelected={theme === 'system'}
                        onClick={() => setTheme('system')}
                    />
                </AccountSection>

            </div>
        </div>
    )
}
