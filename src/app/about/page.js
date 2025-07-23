export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Delicious</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Our story of bringing amazing food to your doorstep</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Our Story Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Founded in 2024, Delicious started with a simple mission: to bring the finest food from local restaurants 
              directly to your doorstep. We believe that great food should be accessible to everyone, anytime.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              What began as a small startup has now grown into the city's most loved food delivery service, 
              partnering with hundreds of restaurants to serve thousands of happy customers daily.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">30-minute delivery guaranteed for local orders</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400">We partner only with the best restaurants in town</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Customer Love</h3>
              <p className="text-gray-600 dark:text-gray-400">Rated 4.9/5 by our happy customers</p>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Shouvik</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Founder & CEO</p>
                <div className="text-sky-500">
                  <a href="mailto:Rajchand358@gmail.com">user@gmail.com</a>
                </div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Hayagriva (Abhra)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">CTO</p>
                <div className="text-sky-500">
                  <a href="mailto:lucifer069am@gmail.com">user@gmail.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}