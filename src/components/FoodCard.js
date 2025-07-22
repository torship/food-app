export default function FoodCard({ item, onAddToCart }) {
  return (
    <div className="food-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="p-6">
        <div className="text-6xl mb-4 text-center transform transition-transform duration-300 hover:scale-110">
          {item.image}
        </div>
        <div className="text-center mb-2">
          <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded-full font-medium">
            {item.category}
          </span>
        </div>
        <h4 className="font-bold text-xl mb-2 text-gray-800 dark:text-white text-center">
          {item.name}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm text-center leading-relaxed">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            ${item.price}
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 font-medium shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <span>+</span>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
