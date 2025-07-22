"use client";

import { useState } from "react";
import FoodCard from "../components/FoodCard";
import CartItem from "../components/CartItem";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: 14.99,
    category: "Pizza",
    image: "🍕"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella and tomato sauce",
    price: 16.99,
    category: "Pizza",
    image: "🍕"
  },
  {
    id: 3,
    name: "Chicken Burger",
    description: "Grilled chicken, lettuce, tomato, mayo",
    price: 12.99,
    category: "Burgers",
    image: "🍔"
  },
  {
    id: 4,
    name: "Cheeseburger",
    description: "Beef patty, cheddar cheese, pickles, onions",
    price: 11.99,
    category: "Burgers",
    image: "🍔"
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, caesar dressing",
    price: 9.99,
    category: "Salads",
    image: "🥗"
  },
  {
    id: 6,
    name: "Greek Salad",
    description: "Mixed greens, olives, feta cheese, tomatoes, cucumber",
    price: 10.99,
    category: "Salads",
    image: "🥗"
  },
  {
    id: 7,
    name: "Pasta Carbonara",
    description: "Spaghetti with eggs, cheese, pancetta, black pepper",
    price: 16.99,
    category: "Pasta",
    image: "🍝"
  },
  {
    id: 8,
    name: "Penne Arrabiata",
    description: "Spicy tomato sauce with garlic, herbs, and chili",
    price: 14.99,
    category: "Pasta",
    image: "🍝"
  },
  {
    id: 9,
    name: "Fish Tacos",
    description: "Grilled fish, cabbage slaw, lime crema, corn tortillas",
    price: 13.99,
    category: "Mexican",
    image: "🌮"
  },
  {
    id: 10,
    name: "Chicken Quesadilla",
    description: "Grilled chicken, cheese, peppers, served with salsa",
    price: 11.99,
    category: "Mexican",
    image: "🌯"
  },
  {
    id: 11,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with chocolate frosting",
    price: 6.99,
    category: "Desserts",
    image: "🍰"
  },
  {
    id: 12,
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream with chocolate sauce and cherry",
    price: 5.99,
    category: "Desserts",
    image: "🍨"
  }
];

const categories = ["All", "Pizza", "Burgers", "Salads", "Pasta", "Mexican", "Desserts"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🍽️</span>
              <h1 className="text-2xl font-bold text-orange-600 dark:text-orange-400">Delicious</h1>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>🛒</span>
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Hungry? We've Got You!</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Fresh food delivered fast to your door</p>
          <div className="flex justify-center space-x-4 text-lg">
            <span className="flex items-center space-x-2">
              <span>⚡</span>
              <span>30 min delivery</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🔥</span>
              <span>Hot & Fresh</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>💯</span>
              <span>100% Quality</span>
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Section */}
          <div className="flex-1">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Browse Menu</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          {showCart && (
            <div className="lg:w-96">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Order</h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-4">
                      {cart.map(item => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onRemove={removeFromCart}
                          onUpdateQuantity={updateQuantity}
                        />
                      ))}
                    </div>
                    
                    <div className="border-t dark:border-gray-600 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg text-gray-800 dark:text-white">Total:</span>
                        <span className="font-bold text-2xl text-orange-600 dark:text-orange-400">${getTotalPrice()}</span>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                        Checkout 🚀
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🍽️</span>
                <h3 className="text-xl font-bold">Delicious</h3>
              </div>
              <p className="text-gray-400">The best food delivery service in town. Fresh, fast, and delicious!</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>hello@delicious.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>123 Food Street, City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Delicious. All rights reserved. Made with ❤️ for food lovers!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
