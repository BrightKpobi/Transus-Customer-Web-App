'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

type TitlePosition = 'left' | 'center' | 'right'

interface PageNavbarProps {
    title?: string
    titlePosition?: TitlePosition
    showBack?: boolean
    onBack?: () => void
    rightSlot?: React.ReactNode
}

export function PageNavbar({
    title,
    titlePosition = 'left',
    showBack = true,
    onBack,
    rightSlot,
}: PageNavbarProps) {
    const router = useRouter()

    const handleBack = () => {
        if (onBack) return onBack()
        router.back()
    }

    return (
        <div className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 ">
            <div className="mx-auto max-w-7xl px-4 py-4">

                <div className="grid grid-cols-3 items-center">

                    {/* LEFT */}
                    <div className="flex items-center gap-3 justify-start ">
                        {showBack && (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group cursor-pointer"
                            >
                                <ChevronLeft
                                    size={20}
                                    className="group-hover:-translate-x-1 transition-transform"
                                />
                                <span className="font-medium">Back</span>
                            </button>
                        )}

                        {title && titlePosition === 'left' && (
                            <span className="text-sm font-semibold text-gray-800">
                                {title}
                            </span>
                        )}
                    </div>

                    {/* CENTER */}
                    <div className="flex justify-center">
                        {title && titlePosition === 'center' && (
                            <span className="text-sm font-semibold text-gray-800">
                                {title}
                            </span>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center justify-end gap-2">
                        {title && titlePosition === 'right' && (
                            <span className="text-sm font-semibold text-gray-800 mr-2">
                                {title}
                            </span>
                        )}

                        {rightSlot}
                    </div>

                </div>

            </div>
        </div>
    )
}
