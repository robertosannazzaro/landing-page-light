import Image from "next/image";

function Footer() {
  return (
    <footer className="mx-auto flex flex-col lg:flex-row items-center p-12">
      <div className="m-6 sm:m-0">
        <Image src="/logo.png" height={78} width={206} />
      </div>

      <div className="hidden lg:block md:flex-col sm:flex-row mr-auto ml-auto space-x-16">
        <button>Home</button>
        <button>Product</button>
        <button>About</button>
        <button>Contact</button>
      </div>

      <div className="m-6 sm:m-0">
        <Image src="/social-media.png" height={50} width={210} />
      </div>
    </footer>
  );
}

export default Footer;
