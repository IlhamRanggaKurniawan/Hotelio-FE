const TopRecommendations = () => {
  return (
    <section className="w-full px-6 md:px-16 my-16 mt-30">
      {/* Header */}

      <div className="flex justify-between mb-10 max-w-x1">
        <h2 className="text-4xl font-bold hover:bg-red-900 hover:text-white">
          OUR MOST VISITED HOTEL IN 2025
        </h2>
        <p className="text-gray-600 max-w-md hover:text-black">
          Take a look at our best choice for the hotels of the year, we pick the hotels from our amazing visitor
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Big card (col-span-2) */}
        <a
          href="#"
          className="relative col-span-2 rounded-xl overflow-hidden group h-[829px] w-[900px]"
        >
          <img
            src="https://images.unsplash.com/photo-1479502806991-251c94be6b15?q=80&w=1170&auto=format&fit=crop"
            alt="Grand Ghifar Hotel"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
            <h3 className="text-xl font-bold hover:bg-yellow-300 hover:text-black">Grand Ghifar Hotel</h3>
            <span className="block text-sm">Kertek, Indonesia</span>
            <div className="text-sm"><span className="text-yellow-400">★★★★★</span> 5.0 stars rating</div>
          </div>
        </a>

        {/* Small cards*/}
        <div className="flex flex-col gap-6">

          {/* Small cards top*/}
          <a
            href="#"
            className="relative rounded-xl overflow-hidden group h-[400px] w-[450px]"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop"
              alt="Ghifar Ocean View Resort"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 text-white drop-shadow-lg">
              <h3 className="text-lg font-bold hover:bg-yellow-300 hover:text-black">Ghifar Ocean View Resort</h3>
              <span className="block text-sm">Garung, Indonesia</span>
              <div className=" text-xs"><span className="text-yellow-400">★★★★★</span> 4.8 stars rating</div>
            </div>
          </a>

          {/* Small cards bottom*/}
          <a
            href="#"
            className="relative rounded-xl overflow-hidden group h-[400px] w-[450px]"
          >
            <img
              src="https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?w=600&auto=format&fit=crop"
              alt="Ghifar Blue Lagoon Hotel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 text-white drop-shadow-lg">
              <h3 className="text-lg font-bold hover:bg-yellow-300 hover:text-black">Ghifar Blue Lagoon Hotel</h3>
              <span className="block text-sm">Sawangan, Indonesia</span>
              <div className=" text-xs"><span className="text-yellow-400">★★★★★</span> 4.9 stars rating</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopRecommendations;
