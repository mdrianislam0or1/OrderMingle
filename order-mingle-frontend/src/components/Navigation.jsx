import { Link } from "react-router-dom";

const Navigation = () => {
  const navLinks = [
    { to: "/all-users", label: "All Users" },
    { to: "/users/add", label: "+ Add User" },
  ];

  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <Link to="/">
              <strong className="text-xl font-bold text-indigo-600">
                Order Mingle
              </strong>
            </Link>
          </div>

          {/* Navigation links for larger screens */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Burger menu for smaller screens */}
          <div className="md:hidden flex items-center -mr-2">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive menu for smaller screens */}
      <div className="md:hidden" role="menu" aria-hidden="true">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
