
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-1000 bg-white p-3 shadow flex justify-between font-[Arial] h-15">
      <div className="font-bold cursor-pointer text-2xl ml-6 hover:bg-purple-950 hover:text-white pt-1 pb-1 pl-2 pr-2">HOTELIO</div>
      <div className="flex-1 cursor-pointer text-2xl font-semibold animate-sublogo pt-1 pb-1">.com</div>
      
      <div className="flex gap-4">
        <button className="hover:font-bold hover:underline cursor-pointer active:text-purple-950">Home</button>
        <button className="hover:font-bold hover:underline cursor-pointer active:text-purple-950">Help</button>
        <button className="hover:font-bold hover:underline cursor-pointer active:text-purple-950">Be a Partner</button>
        <button className="hover:font-bold hover:underline cursor-pointer active:text-purple-950">About Us</button>
        <button className="border-2 border-gray-950 pl-4 pr-4 rounded-[10px] ml-3 cursor-pointer hover:bg-black hover:text-white active:bg-purple-950">Login</button>
        <button className="border-2 border-gray-950 pl-3 pr-3 rounded-[10px] ml-1 mr-6 cursor-pointer hover:bg-black hover:text-white active:bg-purple-950">Register</button>
      </div>
    </div>
  )
}

export default Navbar