export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
      <div className="flex items-center space-x-3 flex-1">
        <span className="text-2xl">{item.image}</span>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 dark:text-white">{item.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ${item.price} each
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-1">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="text-orange-600 hover:text-orange-700 font-bold w-6 h-6 flex items-center justify-center rounded hover:bg-orange-100 dark:hover:bg-orange-900"
          >
            −
          </button>
          <span className="font-medium text-gray-800 dark:text-white min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="text-orange-600 hover:text-orange-700 font-bold w-6 h-6 flex items-center justify-center rounded hover:bg-orange-100 dark:hover:bg-orange-900"
          >
            +
          </button>
        </div>
        
        <div className="text-right">
          <p className="font-bold text-orange-600 dark:text-orange-400">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 ml-2 p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-colors duration-200"
          title="Remove from cart"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
