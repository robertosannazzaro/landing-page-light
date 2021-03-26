import Image from "next/image";

function Navbar() {
  return (
    <div className="mx-auto flex content-between items-center md:pl-12 p-2 sm:p-12">
      <div>
        <Image src="/logo.png" height={78} width={206} />
      </div>

      <div className="hidden md:block sm:m-auto sm:space-x-20">
        <button>Home</button>
        <button>Product</button>
        <button>About</button>
        <button>Contact</button>
      </div>

      <div className="ml-auto flex content-between items-center">
        <button className="bg-transparent py-2 px-4 text-primary border border-primary rounded-full mr-6">
          Login
        </button>

        <div className="md:hidden">
          <Image src="/mobile-menu.png" width={40} height={32} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
