import { AccraCars, LegonCars, Car } from "@/data/CarsData";
import Image from "next/image";
import Link from "next/link";
import {
    Star,
    ShieldCheck,
    MapPin,
    Calendar,
    Info,
    UserCircle2,
    Fuel,
    Settings2,
    DoorOpen,
    ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function CheckoutPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // Unwrapping the async params for Next.js 16 compatibility
    const { id } = await params;

    // Combining data sets and finding the specific car
    const allCars = [...AccraCars, ...LegonCars];
    const car = allCars.find((c) => String(c.id) === id);

    // Error handling for invalid IDs
    if (!car) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">Vehicle not found</h1>
                <Button variant="outline" asChild>
                    <Link href="/">Back to listings</Link>
                </Button>
            </div>
        );
    }

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            {/* Navigation Breadcrumb */}
            <div className="mb-8">
                <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition">
                    <ChevronLeft size={16} className="mr-1" />
                    Back to search
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEFT COLUMN: Vehicle Details & Specs */}
                <div className="lg:col-span-2 space-y-8">

                    <section className="space-y-6">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg border border-gray-100">
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-black tracking-tight text-gray-900">
                                {car.name} {car.year}
                            </h1>
                            <div className="flex items-center gap-3 text-lg font-medium">
                                <div className="flex items-center gap-1">
                                    <span>{car.rating.toFixed(1)}</span>
                                    <Star className="fill-black text-black h-4 w-4" />
                                </div>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-600 underline underline-offset-4 cursor-pointer">
                                    {car.trips} trips
                                </span>
                            </div>
                        </div>
                    </section>

                    <Separator className="bg-gray-100" />

                    {/* Technical Specs Grid */}
                    <section className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <Fuel className="text-gray-400 mb-2" size={20} />
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Fuel</span>
                            <span className="text-sm font-semibold italic">Petrol</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <Settings2 className="text-gray-400 mb-2" size={20} />
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Gear</span>
                            <span className="text-sm font-semibold italic">Automatic</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <DoorOpen className="text-gray-400 mb-2" size={20} />
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Doors</span>
                            <span className="text-sm font-semibold italic">4 Doors</span>
                        </div>
                    </section>

                    {/* Host Information Section */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold tracking-tight">Hosted by</h2>
                        <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-300 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                                <UserCircle2 className="text-gray-400" size={32} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">TransUs Verified Partner</p>
                                <p className="text-xs text-gray-500 italic">Member since Jan 2026 • Fast Responder</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety & Guidelines */}
                    <section className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                        <h2 className="text-sm font-bold flex items-center gap-2">
                            <Info size={16} className="text-gray-600" /> Important Guidelines
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs text-gray-500 leading-relaxed">
                            <p>• Minimum age requirement: 21 years</p>
                            <p>• Valid driver's license must be presented</p>
                            <p>• No smoking or pets allowed in the cabin</p>
                            <p>• Return with fuel levels matched at pickup</p>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN: Sticky Checkout Card */}
                <div className="lg:col-span-1">
                    <div className="border border-gray-100 rounded-3xl p-8 shadow-2xl h-fit space-y-6 bg-white sticky top-24">
                        <div className="flex justify-between items-baseline">
                            <h2 className="text-lg font-bold text-gray-900">Rental Price</h2>
                            <div className="text-right">
                                <p className="text-2xl font-black text-black">{car.price || "$45 / day"}</p>
                                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Net total inclusive of tax</p>
                            </div>
                        </div>

                        <Separator className="bg-gray-100" />

                        {/* Trip Configuration Fields */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest ml-1">Trip Settings</label>

                            <div className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-transparent hover:border-black hover:bg-white transition-all cursor-pointer">
                                <Calendar className="text-gray-400 group-hover:text-black" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-[9px] uppercase font-bold text-gray-400">Duration</span>
                                    <span className="text-sm font-semibold">Jan 22 - Jan 25</span>
                                </div>
                            </div>

                            <div className="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-transparent hover:border-black hover:bg-white transition-all cursor-pointer">
                                <MapPin className="text-gray-400 group-hover:text-black" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-[9px] uppercase font-bold text-gray-400">Pickup Location</span>
                                    <span className="text-sm font-semibold">Accra Central Mall</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            {/* Premium Black Button */}
                            <Button className="w-full h-12 text-sm font-bold rounded-xl bg-black text-white hover:bg-gray-800 transition-all active:scale-[0.97] shadow-xl shadow-gray-200">
                                Confirm Booking
                            </Button>
                        </div>

                        <div className="space-y-4 text-center">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 justify-center uppercase tracking-wide">
                                <ShieldCheck size={14} />
                                <span>Insurance Coverage Included</span>
                            </div>
                            <p className="text-[10px] text-gray-400 leading-relaxed italic">
                                You won't be charged until the host accepts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}