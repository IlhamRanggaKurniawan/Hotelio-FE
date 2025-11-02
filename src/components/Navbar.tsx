import { Menu } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between h-16 bg-white z-50 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            {/* left side */}
            <div>
                <h1 className="text-xl font-bold">Hotelio</h1>
            </div>

            {/* right full */}
            <div className="hidden md:flex gap-2">
                <Button variant={"ghost"}>Beranda</Button>
                <Button variant={"ghost"}>Bantuan</Button>
                <Button variant={"ghost"}>Jadi Mitra</Button>
                <Button variant={"ghost"}>Tentang Kami</Button>
                <Button>Login</Button>
                <Button variant={"outline"}>Register</Button>
            </div>

            {/* right mobile  */}
            <Menu className="text-xl font-bold md:hidden" />
        </nav>
    )
}

export default Navbar