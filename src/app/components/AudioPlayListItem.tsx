"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faDownload } from "@fortawesome/free-solid-svg-icons";
import Visualizer from "./AudioVisualizer";

interface AudioPlayListItemProps {
  data: any;
}

const AudioPlayListItem: React.FC<AudioPlayListItemProps> = ({ data }) => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="flex items-center justify-between px-[10px] py-[5px] border-b-2 border-b-white gap-4">
      <div
        className="p-[20px] hover:cursor-pointer relative"
        onClick={() => setIsPlay((_) => !_)}
      >
        <Image src={data.img_url} alt="" width={50} height={50} />
        <div className="absolute opacity-0 hover:opacity-65 top-[20px] left-[20px] w-[50px] h-[50px] bg-stone-600 rounded-[20px] flex justify-center items-center">
          <FontAwesomeIcon icon={isPlay ? faPause : faPlay} size="1x" />{" "}
        </div>
      </div>
      <div className="w-[200px]">
        <h3 className="text-[12px]">{data.song_title}</h3>
        <h1 className="text-[18px] text-stone-500">{data.song_artist}</h1>
      </div>
      <div>
        <Visualizer isPlay={isPlay} />
      </div>
      <div className="ml-5 w-[100px]">{data.type}</div>
      <div className="cursor-pointer">
        <a href={data.song_url} download={true}><FontAwesomeIcon icon={faDownload} size="1x" /></a>
      </div>
    </div>
  );
};

export default AudioPlayListItem;
