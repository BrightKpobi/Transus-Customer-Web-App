export default function FavoritesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add your favorites content here */}
                <p className="text-gray-600">No favorites yet. Start adding your favorite listings!</p>
            </div>
        </div>
    );
}