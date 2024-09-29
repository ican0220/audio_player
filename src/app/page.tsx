"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import AudioPlayList from "./components/AudioPlayList";
import FilterList from "./components/FilterList";

const audioPlayList = [
  {
    img_url: "/images/img1.png",
    song_url: "/audios/test.mp3",
    song_title: "Like An Animal",
    song_artist: "Alaina Cross",
    type: "Pop",
  },
  {
    img_url: "/images/img2.png",
    song_url: "/audios/test.mp3",
    song_title: "Kings Gambit",
    song_artist: "Nick Kingswell",
    type: "Classical",
  },
  {
    img_url: "/images/img3.png",
    song_url: "/audios/test.mp3",
    song_title: "Right Here",
    song_artist: "Astronic",
    type: "Indie Pop",
  },
  {
    img_url: "/images/img4.png",
    song_url: "/audios/test.mp3",
    song_title: "Cool Like You",
    song_artist: "Nick Gerad",
    type: "Indie Lock",
  },
  {
    img_url: "/images/img5.png",
    song_url: "/audios/test.mp3",
    song_title: "In My Sone",
    song_artist: "Jay Pereira ",
    type: "Electronic Rock",
  },
  {
    img_url: "/images/img6.png",
    song_url: "/audios/test.mp3",
    song_title: "I Can Dress Myself",
    song_artist: "Staircases",
    type: "Pop Rock",
  },
  {
    img_url: "/images/img7.png",
    song_url: "/audios/test.mp3",
    song_title: "You Bring Me Home",
    song_artist: "The Suddenlys",
    type: "",
  },
  {
    img_url: "/images/img8.png",
    song_url: "/audios/test.mp3",
    song_title: "Golden Days",
    song_artist: "Steyl",
    type: "Cinematic",
  },
  {
    img_url: "/images/img9.png",
    song_url: "/audios/test.mp3",
    song_title: "I'll Be There For You",
    song_artist: "HARBRS  ",
    type: "Cinematic Classical",
  },
  {
    img_url: "/images/img10.png",
    song_url: "/audios/test.mp3",
    song_title: "Face",
    song_artist: "Jack Bradley Vaught",
    type: "Pop",
  },
];

const moodFilterItems = [
  "aggressive",
  "anthemic",
  "burdened",
  "chill",
  "cinematic",
];

export default function Home() {
  const [filterList, setFilterList] = useState<Array<string>>([]);

  const addMoodItem = (_: string) => {
    setFilterList([...filterList, _]);
    console.log(filterList, "filete");
  };

  const removeMoodItem = (_: string) => {
    let x = filterList.filter((item) => item != _);
    setFilterList([...x]);
  };
  return (
    <>
      <Header />
      <main>
        <div className="flex relative">
          <div className="flex-none w-[300px] border-r-2 border-r-stone-300 fixed top-[80px] left-0 h-full bg-stone-200">
            <SideBar
              moodFilterItems={moodFilterItems}
              filterList={filterList}
              addItem={(item) => {
                addMoodItem(item);
              }}
              removeItem={(item) => removeMoodItem(item)}
            />
          </div>
          <div className="pl-[332px] flex-1 pr-[32px] pt-[20px] pb-[100px]">
            <div className="border-b-2 border-b-slate-300 p-5">
            <FilterList filterList={filterList} />
            </div>
            <AudioPlayList list={audioPlayList} />
          </div>
        </div>
      </main>
      <Footer />

    </>
  );
}
