'use client'

import Logo from "@/components/layouts/navbar/Logo"
import ListingsSearchBar from "@/components/layouts/listings-navbar/ListingsSearchBar"
import UserMenu from "@/components/layouts/navbar/UserMenu"

export default function ListingsNavbar() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo */}
                    <Logo />

                    {/* Center: Listings Search Bar */}
                    <div className="flex-1 mx-6">
                        <ListingsSearchBar />
                    </div>

                    {/* Right: User Menu */}
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}
