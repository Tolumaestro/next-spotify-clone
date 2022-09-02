import React from "react";
import useSpotify from "../hooks/useSpotify";

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img
          className=""
          src={track.track.album.images[0].url}
          alt="Song cover"
        />
      </div>
    </div>
  );
};

export default Song;
