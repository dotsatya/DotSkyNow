import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./CitySearch";



const Header = () => {

const { theme, setTheme } =  useTheme();
const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4">
        {" "}
        <Link to="/">
          <h1>DotSkyNow</h1>
        </Link>

        <div className="flex items-center gap-40">
          {/* search */}
        <CitySearch />

          {/* theme toggle manu with dark and light and system */}
          <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`flex border rounded-full p-1.5 bg-gray-600  items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0" }`}>
            {isDark? <Sun className="w-4 h-4 text-white rotate-0 transition-all" /> : <Moon className="w-4 h-4 text-white rotate-90 transition-all" />}
          </div>
          {}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
