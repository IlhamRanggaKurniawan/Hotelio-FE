import ReviewCard from "./card/ReviewCard"

const ReviewSection = () => {
    return (
        <div className='max-w-screen h-full bg-[#1f1f1f] space-y-12 py-12 px-2 -mx-2 sm:px-4 sm:-mx-4 md:px-6 md:-mx-6 lg:px-8 lg:-mx-8 xl:px-12 xl:-mx-12 '>
            <h3 className="text-2xl w-full font-bold text-center text-white md:text-xl xl:text-3xl">Let’s Hear How Their Experiences Use Our Platforms</h3>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}

export default ReviewSection