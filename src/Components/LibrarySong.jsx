import React from "react";
import { activeLibrary } from "../utils/util";

const LibrarySong = ({
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(currentSong);
    activeLibrary(songs, currentSong, setSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-song ${currentSong.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={currentSong.cover} alt={currentSong.name} width="200px" />
      <div className="song-description">
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
