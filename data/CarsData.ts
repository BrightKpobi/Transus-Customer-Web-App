export interface Car {
    id: string | number;
    name: string;
    image: string;
    rating: number;
    trips: number;
    year?: number;   // Optional since some objects don't have it
    price?: string;  // Optional for cars that include pricing
}

// Cars in Accra
export const AccraCars: Car[] = [
    {
        id: "accra-1",
        name: "Hyundai Palisade",
        year: 2026,
        rating: 5.0,
        trips: 8,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "2",
        name: "Mercedes-Benz E-Class",
        year: 2021,
        rating: 4.96,
        trips: 30,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "3",
        name: "MINI Countryman",
        year: 2025,
        rating: 5.0,
        trips: 38,
        image: "https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=1965&auto=format&fit=crop",
    },
    {
        id: "4",
        name: "Toyota Tundra",
        year: 2024,
        rating: 5.0,
        trips: 4,
        image: "/img/cars/2024-Toyota-Tundra.png",
    },
    {
        id: "5",
        name: "Mazda CX 5",
        year: 2024,
        rating: 5.0,
        trips: 4,
        image: "/img/cars/2024-Mazda-CX-5.png",
    },
];

// Cars in East Legon
export const LegonCars: Car[] = [
    {
        id: "5",
        image: "/img/cars/2013-Toyota-Camry.png",
        name: "Toyota Camry 2013",
        rating: 5.0,
        trips: 14,
        price: "$134 for 3 days",
    },
    {
        id: " 6",
        image: "/img/cars/2013-Toyota-Camry.png",
        name: "Toyota Camry 2013",
        rating: 5.0,
        trips: 5,
        price: "$181 for 3 days",
    },
    {
        id: "7",
        image: "/img/cars/2013-Toyota-Camry.png",
        name: "Toyota Camry 2013",
        rating: 5.0,
        trips: 5,
        price: "$181 for 3 days",
    },
    {
        id: " 8",
        image: "/img/cars/2013-Toyota-Camry.png",
        name: "Toyota Camry 2013",
        rating: 5.0,
        trips: 5,
        price: "$181 for 3 days",
    },
];