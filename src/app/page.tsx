import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import AudioPlayList from "./components/AudioPlayList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex ">
          <div className="flex-none w-[300px] border-r-2 border-r-stone-500 h-[100vh- 80px]">
            <SideBar />
          </div>
          <div className="flex-1 px-[32px] py-[20px]">
            <AudioPlayList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
