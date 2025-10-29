import { useState } from "react";

const MainDashboard = () => {
    const [showGuestBox, setShowGuestBox] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const toggleGuestBox = () => setShowGuestBox(!showGuestBox);
    const handleDone = () => setShowGuestBox(false);

    return (
        <div className="relative mt-[9vh] w-[99%] h-[90vh] mx-auto rounded-3xl overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text + Search */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
                {/* Headline */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Find The Best Hotel <br />
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        With <span className="text-yellow-400">HOTELIO</span>
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Discover comfortable stays, exclusive deals, and unforgettable
                        experiences at top hotels only with HOTELIO.
                    </p>
                </div>

                {/* Search box */}
                <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-3 w-full max-w-fit text-black mt-9 relative">
                    {/* Location */}
                    <div className="flex flex-col flex-1">
                        <label className="text-xs text-gray-500 mb-1">Location</label>
                        <input
                            type="search"
                            placeholder="Enter location"
                            className="flex-1 border rounded-lg p-3"
                        />
                    </div>

                    {/* Check-in / Check-out */}
                    <div className="flex flex-1 gap-2">
                        <div className="flex flex-col flex-1">
                            <label className="text-xs text-gray-500 mb-1">Check-in</label>
                            <input type="date" className="flex-1 border rounded-lg p-3" />
                        </div>

                        <div className="flex flex-col flex-1">
                            <label className="text-xs text-gray-500 mb-1">Check-out</label>
                            <input type="date" className="flex-1 border rounded-lg p-3" />
                        </div>
                    </div>

                    {/* Guests / Room selector */}
                    <div className="flex flex-col flex-1 relative">
                        <label className="text-xs text-gray-500 mb-1">Guest & Room</label>
                        <button
                            onClick={toggleGuestBox}
                            className="w-full border rounded-lg p-3 text-left whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                            {adults} adults · {children} children · {rooms} rooms
                        </button>


                        {showGuestBox && (
                            <div className="absolute left-full mt-2 left-0 w-full bg-white border rounded-2xl shadow-lg p-4 z-20">
                                {/* Adults */}
                                <div className="flex justify-between items-center mb-3">
                                    <span>Adults</span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setAdults(Math.max(1, adults - 1))}
                                            className="border px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{adults}</span>
                                        <button
                                            onClick={() => setAdults(adults + 1)}
                                            className="border px-2 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Children */}
                                <div className="flex justify-between items-center mb-3">
                                    <span>Children</span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setChildren(Math.max(0, children - 1))}
                                            className="border px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{children}</span>
                                        <button
                                            onClick={() => setChildren(children + 1)}
                                            className="border px-2 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Rooms */}
                                <div className="flex justify-between items-center mb-4">
                                    <span>Rooms</span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setRooms(Math.max(1, rooms - 1))}
                                            className="border px-2 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{rooms}</span>
                                        <button
                                            onClick={() => setRooms(rooms + 1)}
                                            className="border px-2 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleDone}
                                    className="w-full border rounded-lg py-2 hover:bg-black hover:text-white transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <div className="flex flex-col justify-end">
                        <button className="text-black border border-black hover:bg-black hover:text-white active:bg-purple-950 transition-colors px-6 py-3 rounded-lg cursor-pointer">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
