import { Divide } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <header className="container flex justify-between gap-5 py-8 z-10 items-center">
        <img
          src="/newlogo.webp"
          className="bg-black h-7 p-1 hover:-rotate-6 md:h-10"
        />
        <div className="hover:rotate-12 md:scale-[125%]">
          <ThemeToggle />
        </div>
      </header>
    </>
  );
};

export default Navbar;
