import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-24 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-8 text-sm font-bold ml-8 flex-grow"> {/* Increased space between links and flex-grow */}
          <Link href="/men">MEN</Link>
          <Link href="/women">WOMEN</Link>
          <Link href="/kids">KIDS</Link>
          <Link href="/home-living">HOME & LIVING</Link>
          <Link href="/beauty">BEAUTY</Link>
        </div>
        <div className="md:mx-4 flex-grow"> {/* Adjusted width of the search bar and flex-grow */}
          <input 
            type="text" 
            placeholder="Search for products, brands and more" 
            className="w-full h-12 px-4 border rounded-md text-sm" 
          />
        </div>
        <div className="items-end-center space-x-4 text-sm font-bold ml-auto"> {/* Aligns items to the extreme right */}
          <Link href="/profile">Profile</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/bag">Bag</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
