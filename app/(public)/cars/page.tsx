

import CarGrid from "@/components/shared/cars/CarGrid";
import CarFilterBar from "@/components/shared/cars/CarFilter";

type SearchParams = {
    location?: string;
    startDate?: string;
    endDate?: string;
};

export default async function CarsPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    // Later this will be replaced with DB/API logic
    const cars = [
        {
            id: "1",
            name: "Toyota Corolla",
            pricePerDay: 45,
            image: "/cars/car-1.jpg",
            location: "Accra",
        },
        {
            id: "2",
            name: "Hyundai Elantra",
            pricePerDay: 55,
            image: "/cars/car-2.jpg",
            location: "Kumasi",
        },
        {
            id: "3",
            name: "Honda Civic",
            pricePerDay: 60,
            image: "/cars/car-3.jpg",
            location: "Accra",
        },
    ];

    return (
        <main >
            <CarFilterBar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold mb-6">
                    Available cars
                </h1>

                <CarGrid cars={cars} />
            </div>



        </main>
    );
}
