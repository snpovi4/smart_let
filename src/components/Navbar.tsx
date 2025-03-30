"use client";

import { useState, useEffect} from "react";
import { Menu, X, UserCircle, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Find Properties", hasDropdown: true, key: "findProperties" },
    { name: "Add a property", hasDropdown: false },
    { name: "How it Works", hasDropdown: false },
    { name: "Learn More", hasDropdown: true, key: "learnMore" },
    { name: "Contact us", hasDropdown: false },
  ];

  const learnmoredropdownItems = [
    { name: "About Us", href: "#" },
    { name: "Why choose smartLET", href: "#" },
    { name: "FAQ", href: "#" },
  ];
  const findpropertiesdropdownItems = [
    { name: "Residential", href: "#" },
    { name: "Commercial", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".relative")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white/15 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile: Hamburger */}
          <button
            className="md:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setActiveDropdown(null);
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-0.75">
            <img src="/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="text-lg font-normal text-white">smartLET</span>
          </div>

          {/* Mobile: User Icon */}
          <button className="md:hidden">
            <UserCircle size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 items-center">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative">
                <a
                  href="#"
                  className="text-sm text-white hover:text-red-400 flex items-center gap-1"
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === link.key ? null : link.key ?? null);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown &&
                    (activeDropdown === link.key ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </a>
                {/* Desktop Dropdown */}
                {link.hasDropdown && activeDropdown === link.key && (
                  <div className="absolute top-full mt-2 bg-white rounded-md shadow-lg py-2 w-48">
                    {(link.key === "findProperties"
                      ? findpropertiesdropdownItems
                      : learnmoredropdownItems
                    ).map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-normal text-gray-400 hover:text-red-400 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <button className="border border-white text-white rounded-md px-4 py-1 text-sm hover:bg-white/70 hover:text-red-400 hover:border-red-400 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-1 pb-4">
            {navLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col">
                <button
                  className={`text-left text-sm px-4 py-2 font-medium ${
                    activeDropdown === link.key ? "bg-red-400 text-white" : "text-black"
                  }`}
                  onClick={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(activeDropdown === link.key ? null : link.key ?? null);
                    } else {
                      setMenuOpen(false);
                      setActiveDropdown(null);
                      // navigate or handle logic here
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    {link.name}
                    {link.hasDropdown &&
                      (activeDropdown === link.key ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </button>

                {/* Mobile Dropdown Submenu */}
                {link.hasDropdown && activeDropdown === link.key && (
                  <div className="bg-red-10 pl-6 py-1">
                    {(link.key === "findProperties"
                      ? findpropertiesdropdownItems
                      : learnmoredropdownItems
                    ).map((item, subIdx) => (
                      <a
                        key={subIdx}
                        href={item.href}
                        className="block py-2 text-sm text-black hover:text-red-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="border text-black border-black rounded-md px-4 py-1 w-fit mx-4 mt-2">
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
