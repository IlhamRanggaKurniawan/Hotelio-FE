const GeneralRecomendations = () => {
    const hotels = [
        {
            name: "Valeriia Bugaiova",
            location: "Garung, Indonesia",
            img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Christian Lambert",
            location: "Selomerto, Indonesia",
            img: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Vojtech Bruzek",
            location: "Sidojoyo, Indonesia",
            img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Ciudad Maderas",
            location: "Bugangan, Indonesia",
            img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Jorg Angeli",
            location: "Sapen, Indonesia",
            img: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Jennifer Latuperisa",
            location: "Kertek, Indonesia",
            img: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
        },
    ];

    return (
        <section className="w-full px-6 md:px-16 my-16 mt-30">
            {/* Header */}
            <div className="flex justify-between mb-10 flex-col md:flex-row md:items-end">
                <h2 className="text-4xl font-bold leading-tight">
                    EXPLORE OUR BEST LIST <br /> 5-STARS HOTEL
                </h2>
                <p className="text-gray-600 max-w-md mt-4 md:mt-0">
                    We understand that very important has different preferences. That’s why we provide lots of choice.
                </p>
            </div>

            {/* Card Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hotels.map((hotel, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden transition-all duration-300"
                    >
                        <div className="overflow-hidden rounded-t-2xl">
                            <a href="#">
                                <img
                                    src={hotel.img}
                                    alt={hotel.name}
                                    className="w-full h-[220px] rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </a>
                        </div>

                        <div className="p-4">
                            <a href="#">
                                <h3 className="text-2xl font-semibold hover:bg-yellow-300 inline-block">
                                    {hotel.name}
                                </h3>
                            </a>
                            <a href="#">
                                <p className="text-lg text-gray-500">{hotel.location}</p>
                            </a>
                            <a href="#">
                                <div className="text-lg mt-1">
                                    <span className="text-yellow-400">★★★★★</span> 4.8 stars rating
                                </div>
                            </a>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                                <a
                                    href="#"
                                    className="inline-block border border-black bg-white text-black text-sm px-4 py-2 rounded-full hover:bg-black hover:text-white transition active:text-purple-950"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="col-span-full flex justify-center mt-8">
                    <a
                        href="#"
                        className="inline-block border border-black bg-white text-black text-sm px-4 py-2 rounded-full hover:bg-black hover:text-white transition active:text-purple-950"
                    >
                        View More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GeneralRecomendations;
