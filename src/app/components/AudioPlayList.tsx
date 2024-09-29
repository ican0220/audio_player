"use client";
import React, { useState } from "react";
import AudioPlayListItem from "./AudioPlayListItem";
interface AudioPlayListProps {
  list: any;
}

const AudioPlayList: React.FC<AudioPlayListProps> = ({ list }) => {
  const [isSelected, setIsSelected] = useState<number>();

  return (
    <div>
      <div>
      {list.map((_: any, index: any) => (
        <AudioPlayListItem
          key={index}
          data={_}
          isSelected={isSelected}
          index={index}
          setSelectedItem={(item) => setIsSelected(item)}
        />
      ))}
      </div>
    </div>
  );
};

export default AudioPlayList;
