const MainDashboard = () => {
    return (
        <div className="relative mt-[9vh] w-[99%] h-[90vh] mx-auto rounded-3xl overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            />

            {/* Opacity */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[]">
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
                <div className="bg-white rounded-xl p-6 flex flex-row md:flex-row gap-3 w-full max-w-4xl text-black mt-9">
                    <input
                        type="search"
                        placeholder="Location"
                        className="flex-1 border rounded-lg p-3"
                    />
                    <input
                        type="search"
                        placeholder="Person"
                        className="flex-1 border rounded-lg p-3"
                    />
                    <input
                        type="search"
                        placeholder="Type"
                        className="flex-1 border rounded-lg p-3"
                    />
                    <button className="text-black border border-black hover:bg-black hover:text-white active:bg-purple-950 transition-colors pl-4 pr-4 rounded-lg cursor-pointer">Search</button>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
