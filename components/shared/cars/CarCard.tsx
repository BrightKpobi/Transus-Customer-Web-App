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
            className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
        >
            <div className="aspect-[4/3] bg-gray-100">
                <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>

            <div className="p-4">
                <h3 className="font-medium text-gray-900">
                    {car.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {car.location}
                </p>

                <p className="mt-2 font-semibold">
                    ${car.pricePerDay}
                    <span className="text-sm font-normal text-gray-500">
                        {" "}
                        / day
                    </span>
                </p>
            </div>
        </Link>
    );
}
