'use client'

import { useEffect, useState } from 'react'
import Logo from "@/components/layouts/navbar/Logo"
import SearchBar from "@/components/layouts/navbar/SearchBar"
import NavLinks from "@/components/layouts/navbar/NavLinks"
import UserMenu from "@/components/layouts/navbar/UserMenu"

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setShowSearch(window.scrollY > 80)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-all duration-300 ${showSearch ? 'border-b shadow-sm' : ''
                }`}
        >
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Left */}
                    <Logo />

                    {/* Center (only on scroll) */}
                    <div className="flex-1 flex justify-center">
                        <SearchBar visible={showSearch} />
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <NavLinks />
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}