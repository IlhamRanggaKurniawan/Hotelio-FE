
const ReviewCard = () => {
    return (
        <div className='w-full h-full bg-[#2b2b2b] space-y-4 text-white p-6 rounded-xl'>
            <p>"Comfortable room and friendly staff. The breakfast was fantastic!"</p>
            <div className="flex h-fit gap-4">
                <div>
                    <img src="/Image.jpg" className="rounded-full aspect-square w-10" />
                </div>
                <div>
                    <p className="text-sm font-semibold">Jonathan</p>
                    <p className="text-gray-400 text-sm">London</p>
                </div>
            </div>
            <img src='/Image.jpg' className='w-full aspect-video rounded-xl' />
        </div>
    )
}

export default ReviewCard