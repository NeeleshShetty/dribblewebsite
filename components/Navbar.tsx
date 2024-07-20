import { MobileNav } from "./MobileNav";
import { Button } from "./ui/button";


function Navbar() {
  const navItems = [
    { name: "Emotions" },
    { name: "Manifesto" },
    { name: "Self-awareness test" },
    { name: "Work with us" },
  ];
  return (
    <div className="flex justify-between items-center p-3 mx-auto">
      {/* Logo */}
      <div className="">
        <img src="/logo.png" alt="logo" className="w-24 h-20" />
      </div>
      {/* nav items desktop view */}
      <div className="hidden md:block">
        <ul className="flex gap-7   ">
          {navItems.map((nav) => (
            <li key={nav.name} className="cursor-pointer hover:scale-105 transition-all duration-150">{nav.name}</li>
          ))}
        </ul>
      </div>
      {/* navitems mobile */}
      <div className="sm:hidden mr-20">
        <MobileNav />
      </div>
      {/* button */}
      <div className="hidden sm:block">
        <Button className="rounded-full p-4">Download App</Button>
      </div>
    </div>
  );
}

export default Navbar;
