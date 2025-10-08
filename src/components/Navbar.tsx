import { Button } from "./ui/button"


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow p-3 flex justify-between">
      <div className="font-bold cursor-pointer text-2xl">HOTELIO</div>
      <div className="flex-1 ml-1 cursor-pointer text-2xl font-semibold animate-sublogo">.com</div>
      <div className="flex gap-4">
        <Button className="text-base p-1 mr-1" variant={"link"}>Home</Button>
        <Button className="text-base p-1 mr-1" variant={"link"}>Help</Button>
        <Button className="text-base p-1 mr-1" variant={"link"}>Be a Partner</Button>
        <Button className="text-base p-1 mr-1" variant={"link"}>About us</Button>
        <Button className="text-base">Login</Button>
        <Button className="text-base">Register</Button>
      </div>
    </div>
  )
}

export default Navbar