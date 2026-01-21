import HeroSearch from "@/components/hero/HeroSearch";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="mx-auto mt-6 max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    src="/img/hero-banner.jpg"
                    alt="Luxury car background"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                />

                <div className="absolute inset-0 bg-black/35" />

                {/* Added z-30 here to help the child modal layer correctly */}
                <div className="relative z-30 flex min-h-[420px] flex-col items-center justify-center px-6 text-center text-white md:min-h-[480px]">
                    <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                        Find the perfect car for your next trip
                    </h1>

                    <p className="mt-3 max-w-lg text-base text-white/90 md:text-lg">
                        Book cars from trusted local hosts wherever you’re headed.
                    </p>

                    <div className="mt-8 w-full max-w-4xl">
                        <HeroSearch />
                    </div>
                </div>
            </div>
        </section>
    )
}