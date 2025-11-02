import { Star } from "lucide-react"
import { Button } from "../ui/button"

const BestHotelCard = () => {
    return (
        <div className='w-full h-fit group transition-all duration-300'>
            <img className='w-full aspect-16/12 rounded-xl group-hover:aspect-video transition-all duration-300 bg-cover' src='/Image.jpg' />
            <div className="p-2">
                <p className="text-xl font-semibold">Hotel Dafam</p>
                <p className="text-gray-500">Wonosobo, Indonesia</p>
                <div className="flex gap-1">
                    <Star fill="black" size={20} />
                    <Star fill="black" size={20} />
                    <Star fill="black" size={20} />
                    <Star fill="black" size={20} />
                    <Star fill="black" size={20} />
                </div>
            </div>
            <Button className="hidden w-full opacity-0 sm:block group-hover:opacity-100">Baca Sekarang</Button>
        </div>
    )
}

export default BestHotelCard