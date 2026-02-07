import CarCard from "./CarCard";

type Car = {
    id: string;
    name: string;
    pricePerDay: number;
    image: string;
    location: string;
};

export default function CarGrid({ cars }: { cars: Car[] }) {
    if (!cars.length) {
        return (
            <p className="text-gray-500 dark:text-gray-400">
                No cars available.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}
