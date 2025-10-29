import { useRef } from 'react';

const ReviewPage = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const reviews = [
        {
            id: 1,
            name: "Jonathan",
            location: "London",
            comment: "I had a pleasant stay at this hotel. The room was clean and comfortable, and the staff were friendly and helpful. The location was ideal—close to attractions and transit.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
            hotel: "Great Ghifar Hotel",
            address: "Wonosobo st 41st 15689",
            rating: "⭐ 5 stars rating",
        },
        {
            id: 2,
            name: "Anna Grey",
            location: "Europe",
            comment: "Amazing service and beautiful view. I’ll definitely come back again!",
            image: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            hotel: "Sunrise Resort",
            address: "Bandung st 52nd 23455",
            rating: "⭐ 5 stars rating",
        },
        {
            id: 3,
            name: "John Doe",
            location: "Asia",
            comment: "Comfortable room and friendly staff. The breakfast was fantastic!",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
            hotel: "Cozy Hills Hotel",
            address: "Jakarta st 88th 15600",
            rating: "⭐ 4.8 stars rating",
        },
        {
            id: 4,
            name: "Maria Lopez",
            location: "South America",
            comment: "The hotel exceeded my expectations. Great amenities and the pool was refreshing after a long day of exploring.",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
            hotel: "Ocean Breeze Inn",
            address: "Rio st 12th 78901",
            rating: "⭐ 4.9 stars rating",
        },
        {
            id: 5,
            name: "Ahmed Khalil",
            location: "Middle East",
            comment: "Excellent hospitality and modern facilities. The rooftop view was breathtaking!",
            image: "https://media.istockphoto.com/id/2132093423/photo/swimming-pool-in-modern-hotel-spa-and-wellness-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=B3HIA291C7ouyahvLiubtWo9YwRbHpwDBz8l1qxgJoU=",
            hotel: "Desert Palace Hotel",
            address: "Dubai st 99th 44567",
            rating: "⭐ 5 stars rating",
        },
        {
            id: 6,
            name: "Sophie Laurent",
            location: "France",
            comment: "Charming boutique hotel with authentic local cuisine. Staff made us feel like family.",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
            hotel: "Parisian Charm Suites",
            address: "Eiffel Ave 23rd 75001",
            rating: "⭐ 4.7 stars rating",
        },
        {
            id: 7,
            name: "Raj Patel",
            location: "India",
            comment: "Value for money with spacious rooms and quick service. Highly recommended for business travelers.",
            image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            hotel: "Mumbai Grand Hotel",
            address: "Mumbai st 45th 400001",
            rating: "⭐ 4.6 stars rating",
        },
        {
            id: 8,
            name: "Emily Chen",
            location: "Australia",
            comment: "Stunning beachfront location and eco-friendly practices. A perfect getaway!",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
            hotel: "Sydney Harbor Retreat",
            address: "Bondi Beach Rd 101 2026",
            rating: "⭐ 5 stars rating",
        },
    ];

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };



    return (
        <div className="bg-[#1f1f1f] py-12 text-white relative">
            {/* Header */}
            <h2 className="text-center text-3xl font-semibold mb-8">
                Let’s Hear How Their Experiences <br /> Use Our Platforms
            </h2>

            {/* Navigation Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-yellow-300 text-black p-2 rounded-full transition-colors cursor-pointer"
            >
                ←
            </button>
            
            <button
                onClick={scrollRight}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-yellow-300 text-black p-2 rounded-full transition-colors cursor-pointer"
            >
                →
            </button>

            {/* Scrollable container*/}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-8 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >

                {/* Scrollbar none */}
                <style>
                    {`
                        div::-webkit-scrollbar {
                        display: none;
                        }
                    `}
                </style>

                {reviews.map((r) => (
                    <div
                        key={r.id}
                        className="bg-[#2b2b2b] text-white p-4 rounded-2xl w-[350px] flex flex-col flex-shrink-0 snap-center"
                    >
                        {/* Komentar */}
                        <p className="text-sm mb-3">
                            "{r.comment}"
                        </p>

                        {/* Profil */}
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={`https://i.pravatar.cc/100?img=${r.id + 3}`}
                                alt={r.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-sm">{r.name}</p>
                                <p className="text-xs text-gray-400">{r.location}</p>
                            </div>
                        </div>

                        {/* Hotel Image */}
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src={r.image}
                                alt={r.hotel}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h3 className="font-semibold text-lg">{r.hotel}</h3>
                                <p className="text-xs text-gray-300">{r.address}</p>
                                <p className="text-xs mt-1">{r.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewPage;