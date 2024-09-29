import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-[#2b2d42] text-white drop-shadow-sm sticky top-0 left-0 overflow-hidden z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center  h-[80px]">
          <div>
          <Link href={"/"} className="text-[32px]"><Image src={'/images/logo.png'} alt="" width={100} height={50} /></Link>
          </div>
          <div>
            <Link href={"/login"} className="hover:text-blue-800">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
