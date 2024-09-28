"use client";
import React from "react";
import AudioPlayListItem from "./AudioPlayListItem";
interface AudioPlayListProps {
  list: any;
}

const AudioPlayList: React.FC<AudioPlayListProps> = ({ list }) => {
  
  return (
    <div>
      {list.map((_: any, index: any) => (
        <AudioPlayListItem key={index} data={_}/>
      ))}
    </div>
  );
};

export default AudioPlayList;
