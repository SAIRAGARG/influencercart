import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });

const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hover:opacity-75 transition gap-x-6 hidden md:flex">
        <Image
          src="/logo1.png"
          alt="logo"
          width={100}  // Increased width
          height={100} // Increased height
          className="-translate-y-0.5"
        />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          <span></span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
