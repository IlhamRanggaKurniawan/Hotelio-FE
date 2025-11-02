
const HeroSection = () => {
    return (
        <div className="w-full rounded-md space-y-2 overflow-hidden sm:aspect-video sm:rounded-lg md:rounded-xl sm:relative sm:p-12 lg:max-h-[640px]">
            <div className="z-40 relative space-y-2 sm:h-full flex justify-center flex-col sm:space-y-6">
                <h2 className='text-2xl w-full font-bold sm:text-white sm:text-4xl lg:text-5xl'>Find The Best Hotel <br /> With HOTELIO</h2>
                <p className="text-sm text-gray-500 sm:text-gray-200 sm:text-lg lg:max-w-[70%] lg:text-xl">Discover comfortable stays, exclusive deals, and unforgettable experiences at top hotels only with HOTELIO.</p>
            </div>
            <img src='/Image4.jpg' className='w-full aspect-video rounded-md sm:absolute sm:inset-0 z-10'></img>
            <div className="bg-black/40 hidden sm:block sm:absolute w-full h-full sm:inset-0 sm:z-20" />
        </div>
    )
}

export default HeroSection