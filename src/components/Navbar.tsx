const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-1000 bg-white p-3 shadow flex justify-between font-[Arial] h-15">
      {/* Left Side */}
      <div className="font-bold cursor-pointer text-2xl ml-6 hover:bg-purple-950 hover:text-white pt-1 pb-1 pl-1 pr-1">
        HOTELIO
      </div>
      <div className="flex-1 cursor-pointer text-2xl font-semibold animate-sublogo pt-1 pb-1">
        .com
      </div>

      {/* Right Side */}
      <div className="flex gap-4">
        {["Home", "Help", "Be a Partner", "About Us"].map((item) => (
          <button

            key={item}
            className="relative cursor-pointer active:text-purple-950
            after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-950
            after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
          >
            {item}
          </button>
        ))}

        <button className="border-2 border-gray-950 pl-4 pr-4 rounded-[10px] ml-3 cursor-pointer hover:bg-black hover:text-white active:bg-purple-950">
          Login
        </button>
        <button className="border-2 border-gray-950 pl-3 pr-3 rounded-[10px] ml-1 mr-6 cursor-pointer hover:bg-black hover:text-white active:bg-purple-950">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
