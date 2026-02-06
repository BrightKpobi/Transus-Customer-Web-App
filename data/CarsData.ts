export interface Car {
  price: string;
  id: string | number;
  name: string;
  image: string;
  rating: number;
  trips: number;

  year?: number;
  pricePerDay: number;
  currency?: string;

  host: string;
  seats: string;
  fuel: string;
  transmission: string;

  available: boolean;
  isFavorite?: boolean;
}

export const AllCars: Car[] = [
  {
    id: "car-1",
    name: "Hyundai Palisade",
    year: 2026,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    trips: 8,
    price: "120",
    pricePerDay: 120,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: false,
  },
  {
    id: "car-2",
    name: "Mercedes-Benz E-Class",
    year: 2021,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    trips: 12,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-3",
    name: "MINI Countryman",
    year: 2025,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=1965&auto=format&fit=crop",
    trips: 12,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-4",
    name: "Toyota Tundra",
    year: 2024,
    image: "/img/cars/2024-Toyota-Tundra.png",
    rating: 4.9,
    trips: 12,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-5",
    name: "Mazda CX 5",
    year: 2024,
    image: "/img/cars/2024-Mazda-CX-5.png",
    rating: 4.9,
    trips: 12,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-6",
    image: "/img/cars/2013-Toyota-Camry.png",
    name: "Toyota Camry",
    year: 2013,
    rating: 5.0,
    trips: 14,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-7",
    image: "/img/cars/2015-Toyota-CorrolaS.png",
    name: "Toyota Camry",
    year: 2015,
    rating: 5.0,
    trips: 5,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-8",
    image: "/img/cars/2016-Honda-Civic-EX.png",
    name: "Honda Civic EX",
    year: 2016,
    rating: 5.0,
    trips: 5,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
  {
    id: "car-9",
    image: "/img/cars/2016-Kia-Sorento.png",
    name: "Kia Sorento",
    year: 2016,
    rating: 5.0,
    trips: 5,
    price: "118",
    pricePerDay: 118,
    currency: "GHS",
    host: "Teddy Agudogo",
    seats: "6 or More",
    fuel: "Hybrid",
    transmission: "Automatic",
    available: true,
    isFavorite: true,
  },
];
