import React from "react";
import Image from "next/image";
import Link from "next/link";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="pt-[20px] bg-[#0a1625] text-white overflow-hidden z-40 relative pb-[120px]">
      <div className="flex items-center justify-between max-w-[1000px] mx-auto">
        <div><Image src={"/images/logo.png"} alt="" width={70} height={30}/></div>
        <div>
          <Link href="" className="border-r-2 border-r-stone-300 px-[10px] hover:text-blue-800">License</Link>
          <Link href="" className="border-r-2 border-r-stone-300 px-[10px] hover:text-blue-800">Terms of Service Privacy</Link>
          <Link href="" className="border-r-2 border-r-stone-300 px-[10px] hover:text-blue-800"> Policy</Link>
        </div>
      </div>
      <h1 className="text-center">@2024</h1>
      <div></div>
    </div>
  );
};

export default Footer;
