import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [mobileMenuPressed, setMobileMenuPressed] = useState(false);

  return (
    <div className="mx-auto flex content-between md:pl-12 p-2 sm:p-12">
      <div className="mr-auto">
        <Image src="/logo.png" height={78} width={206} />
      </div>

      <div className="hidden md:block m-auto space-x-20">
        <button>Home</button>
        <button>Product</button>
        <button>About</button>
        <button>Contact</button>
      </div>

      <div className="m-auto flex content-between items-center">
        <button className="bg-transparent py-2 px-4 text-primary border border-primary rounded-full mr-6">
          Login
        </button>

        <div className="md:hidden ml-auto">
          <a onClick={() => setMobileMenuPressed(!mobileMenuPressed)}>
            <Image src="/mobile-menu.png" width={40} height={32} />
          </a>
        </div>
        {mobileMenuPressed && (
          <div
            className="sm:hidden absolute right-16 top-8 bg-secondText rounded-lg"
            id="mobile-menu"
          >
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-secondary text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
