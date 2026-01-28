import { AccraCars, LegonCars, Car } from "@/data/CarsData";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layouts/navbar/Navbar";

export default async function LocationPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    // 1. Determine which data set to use based on the slug
    let filteredCars: Car[] = [];
    let displayLocation = "";

    if (slug === "accra") {
        filteredCars = AccraCars;
        displayLocation = "Accra";
    } else if (slug === "east-legon") {
        filteredCars = LegonCars;
        displayLocation = "East Legon";
    }

    // 2. Handle cases where the slug doesn't match our data
    if (filteredCars.length === 0) {
        return (
            <main className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold">No cars found for "{slug}"</h1>
                <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Return to home
                </Link>
            </main>
        );
    }

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 py-12">
                <header className="mb-10 space-y-4">
                <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition">
                    <ChevronLeft size={16} />
                    Back to home
                </Link>
                <div>
                    <h1 className="text-4xl font-bold capitalize">Available Cars in {displayLocation}</h1>
                    <p className="text-muted-foreground mt-2">
                        Showing {filteredCars.length} rentals available for your trip.
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredCars.map((car) => (
                    <Link key={car.id} href={`/checkout/${car.id}`} className="group space-y-3">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="space-y-1">
                            <h3 className="font-bold text-lg leading-tight group-hover:text-blue-600 transition">
                                {car.name} {car.year && car.year}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span className="font-bold text-foreground">{car.rating.toFixed(1)}</span>
                                <Star className="h-3 w-3 fill-primary text-primary" />
                                <span>({car.trips} trips)</span>
                            </div>
                            {car.price && (
                                <p className="text-sm font-semibold text-foreground pt-1">{car.price}</p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
        </>
    );
}