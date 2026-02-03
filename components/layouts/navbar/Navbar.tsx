'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bell } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Logo from "@/components/layouts/navbar/Logo"
import SearchBar from "@/components/layouts/navbar/SearchBar"
// import NavLinks from "@/components/layouts/navbar/NavLinks" 
import UserMenu from "@/components/layouts/navbar/UserMenu"


export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const onScroll = () => {
            setShowSearch(window.scrollY > 20) // Trigger earlier for better feel
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-all duration-200 border-b ${showSearch
                ? 'border-gray-200 ' // Visible border
                : 'border-transparent'
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
                        {/* <NavLinks />  */}
                        <button
                            onClick={() => router.push('/notifications')}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Bell size={18} className="text-gray-700 dark:text-gray-300" />
                        </button>
                        <UserMenu />

                    </div>
                </div>
            </div>
        </header>
    )
}