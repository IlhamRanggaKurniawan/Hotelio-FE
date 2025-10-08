import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className="p-3 flex justify-between">
      <div className="font-bold cursor-pointer">HOTELIO</div>
      <div className="flex gap-4">
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Help</Button>
        <Button variant={"ghost"}>Be Partner</Button>
        <Button variant={"ghost"}>About us</Button>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  )
}

export default Navbar