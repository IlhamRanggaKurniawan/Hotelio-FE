import BestHotelCard from "./card/BestHotelCard"

const BestHotelSection = () => {
    return (
        <div className="space-y-2 lg:space-y-6">
            <div className="sm:flex sm:justify-between sm:gap-4">
                <h3 className="text-2xl w-full font-bold md:text-3xl xl:text-5xl">EXPLORE OUR BEST LIST 5-STARS HOTEL</h3>
                <p className="text-sm text-gray-500 sm:text-end md:text-base xl:text-lg">We understand that very important has different preferences. That’s why our platform’s good.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <BestHotelCard />
                <BestHotelCard />
                <BestHotelCard />
                <BestHotelCard />
                <BestHotelCard />
                <BestHotelCard />
            </div>
        </div >)
}

export default BestHotelSection