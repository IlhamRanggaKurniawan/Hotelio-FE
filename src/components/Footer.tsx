import { Instagram, Linkedin, X, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className='flex flex-col justify-between w-full gap-12 p-4 sm:p-6 sm:flex-row h-96'>
            <div className="flex gap-2">
                <X className="w-5 h-5 cursor-pointer" />
                <Instagram className="w-5 h-5 cursor-pointer" />
                <Youtube className="w-5 h-5 cursor-pointer" />
                <Linkedin className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="text-gray-500 flex flex-col gap-12 sm:flex-row">
                <div>
                    <h4 className="text-black font-semibold mb-3">Page</h4>
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Search</p>
                    <p className="cursor-pointer">Blog</p>
                    <p className="cursor-pointer">About Us</p>
                </div>

                <div>
                    <h4 className="text-black font-semibold mb-3">Feature</h4>
                    <p className="cursor-pointer">Find Hotels</p>
                    <p className="cursor-pointer">Book Hotels</p>
                    <p className="cursor-pointer">Reviews</p>
                </div>

                <div>
                    <h4 className="text-black font-semibold mb-3">Cookies</h4>
                    <p className="cursor-pointer">Data Collect</p>
                    <p className="cursor-pointer">Terms</p>
                    <p className="cursor-pointer">Privacy</p>
                    <p className="cursor-pointer">Laws</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer