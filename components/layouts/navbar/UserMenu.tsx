// 'use client'

// import ProfileDropdown from '@/components/shared/profile-dropdown/ProfileDropdown'
// import { Menu, UserCircle } from 'lucide-react'

// export default function UserMenu() {
//     return (<button className="flex items-center gap-2 rounded-full border px-3 py-1.5 hover:shadow-md transition" >
//         <Menu size={18} />
//         <UserCircle size={22} />
//           <ProfileDropdown />
//     </button>)
// }


'use client'

import ProfileDropdown from '@/components/shared/profile-dropdown/ProfileDropdown'

export default function UserMenu() {
    return (
        <div className="flex items-center">
            <ProfileDropdown />
        </div>
    )
}