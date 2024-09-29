"use client";
import React, { useState, useRef, useEffect } from "react";
import { AudioVisualizer } from "react-audio-visualize";

interface VisualizerProps {
  isPlay: boolean,
  isSelected: boolean,
  song_url: string,
}

const Visualizer: React.FC<VisualizerProps> = ({ isPlay, isSelected, song_url }) => {
  const [blob, setBlob] = useState<Blob>();
  const audioRef = useRef<HTMLAudioElement>(null);
  const visualizerRef = useRef<HTMLCanvasElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // const audioContext = new window.AudioContext();
  const visualizeWidth = 500;

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);

      // Load the audio metadata
      audio.addEventListener("loadedmetadata", () => {
        setDuration(parseInt(audio.duration + "")); // Set the duration when metadata is loaded
      });

      // Optional: Play the audio if you want to start immediately

      // Cleanup event listener and revoke the object URL
      return () => {
        audio.removeEventListener("loadedmetadata", () => {});
        URL.revokeObjectURL(url); // Clean up the object URL
      };
    }
  }, [blob]);
  const fetchBlobFile = async () => {
    try {
      const response = await fetch(song_url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      //const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const audioBlob = new Blob([arrayBuffer], { type: "audio/mp3" });
      setBlob(audioBlob);
      // Use the audioBuffer for playback
      //return audioBuffer;
    } catch (error) {
      console.error("Error loading or decoding audio:", error);
    }
  };

  useEffect(() => {
    if(isSelected){
      if (isPlay) {
        try {
          audioRef.current?.play(); // Call play() on the audio element
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      } else {
        try {
          audioRef.current?.pause(); // Call play() on the audio element
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    } else{
      try {
        if(audioRef.current){
          audioRef.current.pause(); // Pause the audio
          audioRef.current.currentTime = 0;
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  }, [isPlay, isSelected]);

  useEffect(() => {
    fetchBlobFile();
  }, []);

  useEffect(() => {
    if (blob && audioRef.current) {
      const url = URL.createObjectURL(blob);
      audioRef.current.src = url;
      audioRef.current.play(); // Play the audio when the Blob is set
    }
  }, [blob]);

  const progressWidth = (currentTime / duration) * visualizeWidth;

  return (
    <div className="flex items-center">
      <div>
        <audio ref={audioRef} src={song_url} />
        {blob && (
          <div
            style={{
              position: "relative",
              width: visualizeWidth,
              backgroundBlendMode: "color",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                width: progressWidth,
                height: "100px"
              }}
              className="bg-white dark:bg-black"
            ></div>
            <AudioVisualizer
              ref={visualizerRef}
              blob={blob}
              width={visualizeWidth}
              height={75}
              barWidth={1}
              gap={0}
              barColor={"#555"}
              style={{ overflow: "hidden" }}
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="ml-5">
          {duration / 60 >= 1
            ? duration / 60 + ":" + (duration % 60)
            : "00:" + (duration % 60)}
        </h3>
      </div>
    </div>
  );
};

export default Visualizer;
