import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md py-3 shadow-sm transition-colors">
      <div className="container mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-8 md:px-8">
        <Link to="/" className="flex items-center gap-2 group justify-center md:justify-start">
          <h1 className="text-3xl mb-1 font-bold tracking-tight text-primary transition-colors group-hover:text-blue-600">
            DotSkyNow
          </h1>
        </Link>

        <div className="flex px-4 gap-2 sm:flex-row sm:gap-4 items-center justify-center md:justify-end">
          <CitySearch />

          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center justify-center border rounded-full p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500 transition-transform" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
