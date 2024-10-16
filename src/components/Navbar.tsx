import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full md:hidden items-center flex justify-between">
        <Link href="/" className="text-2xl tracking-wide">
          AWSTORE
        </Link>
        <Menu />
      </div>
      {/* Bigger */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo-image" width={24} height={24} />
            <div className="text-2xl tracking-wide">AWSTORE</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">HomePage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
