import { Pencil, User } from 'lucide-react'

export function AccountHeader() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0a0a0a] via-[#5c440b] to-[#eab308] p-8 text-white flex items-center justify-between mb-8 rounded-2xl">
            {/* Left Section: Avatar and Info */}
            <div className="flex items-center gap-6">
                {/* Avatar with specific smooth rounding and glass effect */}
                <div className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-white/20">
                    <User size={36} className="text-white" />
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Username
                    </h1>
                    <p className="text-white/70 text-sm font-medium">
                        username@gmail.com
                    </p>
                </div>
            </div>

            {/* Right Section: Edit Button */}
            <button className="p-3 bg-white/20 backdrop-blur-lg rounded-2xl hover:bg-white/30 transition-all active:scale-95">
                <Pencil size={20} className="text-white" />
            </button>
        </div>
    )
}