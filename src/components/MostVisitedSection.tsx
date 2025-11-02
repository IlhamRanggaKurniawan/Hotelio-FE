import MostVisitedHotelCard from "./card/MostVisitedHotelCard"

const MostVisitedSection = () => {
    return (
        <div className="space-y-2 lg:space-y-6">
            <div className="sm:flex sm:justify-between sm:gap-4">
                <h3 className="text-2xl w-full font-bold md:text-3xl xl:text-5xl">OUR MOST AMAZING VISITED HOTEL ON 2025</h3>
                <p className="text-sm text-gray-500 sm:text-end md:text-base xl:text-lg">Take a look our best choice for the hotels of the year, we pick the hotels from our amazing visitor</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:grid-rows-2 lg:gap-6">
                <div className="sm:col-span-2 sm:row-span-2">
                    <MostVisitedHotelCard />
                </div>
                <MostVisitedHotelCard />
                <MostVisitedHotelCard />
            </div>
        </div>
    )
}

export default MostVisitedSection