import Link from 'next/link'

export default function NavLinks() {
    return (
        <nav className="hidden lg:flex items-center gap-4">
            <Link href="/host" className="text-sm font-medium hover:underline">
                Become a host
            </Link>

            <Link href="/trips" className="text-sm font-medium hover:underline">
                Trips
            </Link>
        </nav>
    )
}
