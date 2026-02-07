import Link from "next/link";

type Car = {
    id: string;
    name: string;
    pricePerDay: number;
    image: string;
    location: string;
};

export default function CarCard({ car }: { car: Car }) {
    return (
        <Link
            href={`/car/${car.id}`}
            className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition"
        >
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>

            <div className="p-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {car.name}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {car.location}
                </p>

                <p className="mt-2 font-semibold text-gray-900 dark:text-gray-100">
                    ${car.pricePerDay}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        / day
                    </span>
                </p>
            </div>
        </Link>
    );
}
