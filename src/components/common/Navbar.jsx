import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08111F]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
        <ul className="flex items-center gap-8 text-sm font-medium md:gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 transition-all duration-300 hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-slate-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ${
                        isActive ? "w-6" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;