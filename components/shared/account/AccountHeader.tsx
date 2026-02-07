import { Pencil, User } from 'lucide-react'

export function AccountHeader() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-amber-100 to-amber-300 dark:from-[#0a0a0a] dark:via-[#5c440b] dark:to-[#eab308] p-8 flex items-center justify-between mb-8 rounded-2xl">
            {/* Left Section: Avatar and Info */}
            <div className="flex items-center gap-6">
                {/* Avatar with specific smooth rounding and glass effect */}
                <div className="h-20 w-20 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-black/10 dark:border-white/20">
                    <User size={36} className="text-gray-800 dark:text-white" />
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Username
                    </h1>
                    <p className="text-gray-600 dark:text-white/70 text-sm font-medium">
                        username@gmail.com
                    </p>
                </div>
            </div>

            {/* Right Section: Edit Button */}
            <button className="p-3 bg-black/10 dark:bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-black/20 dark:hover:bg-white/30 transition-all active:scale-95">
                <Pencil size={20} className="text-gray-800 dark:text-white" />
            </button>
        </div>
    )
}