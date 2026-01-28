import { Pencil, User } from 'lucide-react'

export function AccountHeader() {
    return (
        <div className="bg-[#1a2b4b] rounded-2xl p-6 text-white flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                    <User size={32} className="text-white/90" />
                </div>

                <div>
                    <h1 className="text-xl font-bold">User Name</h1>
                    <p className="text-white/60 text-sm">useremail@gmail.com</p>
                </div>
            </div>

            <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                <Pencil size={18} />
            </button>
        </div>
    )
}
