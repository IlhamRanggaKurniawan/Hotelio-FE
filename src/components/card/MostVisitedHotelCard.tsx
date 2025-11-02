import { Star } from "lucide-react"

const MostVisitedHotelCard = () => {
    return (
        <div className={`w-full aspect-16/12 relative rounded-md bg-[url('/Image.jpg')] bg-cover bg-center overflow-hidden p-4 flex items-end sm:p-6 sm:aspect-square`}>
            <div className="relative z-30 text-white space-y-2">
                <p className="text-xl font-semibold sm:text-2xl">Great Ghifar Hotel</p>
                <p className="text-sm text-gray-200 sm:text-lg">Wonosobo st 41st 15689</p>
                <div className="flex gap-1">
                    <Star fill="white"/>
                    <Star fill="white"/>
                    <Star fill="white"/>
                    <Star fill="white"/>
                    <Star fill="white"/>
                </div>
            </div>

            <div className="bg-black/30 absolute w-full h-full inset-0" />
        </div>
    )
}

export default MostVisitedHotelCard