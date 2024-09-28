import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-stone-950 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center  h-[80px]">
          <div>
            <h1><Link href={"/"} className="text-[32px]">Audio</Link></h1>
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
