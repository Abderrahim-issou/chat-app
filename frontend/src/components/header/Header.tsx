import { Home, MessageSquare, Settings } from "lucide-react";
import { LogoWhite } from "../../assets";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border- bg-gradient-to-t from-[#04020f] to-[#a880f3]">
      
      <div className="text-xl font-semibold tracking-tight">
        <img src={LogoWhite} alt="" className="h-8 text-black"/>
      </div>

      <nav className="flex items-center gap-8">
        
        <button className="flex items-center gap-2 text-white hover:text-black transition">
          <Home size={18} />
          <span>Home</span>
        </button>

        <button className="flex items-center gap-2 text-white hover:text-black transition">
          <MessageSquare size={18} />
          <span>Messages</span>
        </button>

        <button className="flex items-center gap-2 text-white hover:text-black transition">
          <Settings size={18} />
          <span>Settings</span>
        </button>

      </nav>

    </header>
  );
}

export default Header;