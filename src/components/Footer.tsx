import { Instagram, Youtube, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-black py-10 h-60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-10 px-6">
        {/* Logo + Socials */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          {/* Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Logo"
            className="w-8 h-8"
          />

          {/* Social icons */}
          <div className="flex gap-3">
            <X className="w-5 h-5 cursor-pointer hover:opacity-60 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:opacity-60 transition" />
            <Youtube className="w-5 h-5 cursor-pointer hover:opacity-60 transition" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-60 transition" />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Page</h4>
            <p className="text-gray-600 hover:text-black cursor-pointer">Home</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Search</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Blog</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">About Us</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Feature</h4>
            <p className="text-gray-600 hover:text-black cursor-pointer">Find Hotels</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Book Hotels</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Reviews</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Cookies</h4>
            <p className="text-gray-600 hover:text-black cursor-pointer">Data Collect</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Terms</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Privacy</p>
            <p className="text-gray-600 hover:text-black cursor-pointer">Laws</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
