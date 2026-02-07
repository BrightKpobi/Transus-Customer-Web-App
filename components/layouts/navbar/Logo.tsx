import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <Link href="/" className="text-xl font-bold tracking-tight">
            <Image
                src="/img/logos/transus-yellow-logo-dark.svg"
                alt="TransUs Logo"
                width={120}
                height={40}
                className="object-contain"
            />
        </Link>
    )
}
