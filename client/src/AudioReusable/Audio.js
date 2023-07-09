import React, { useState, useRef, useContext, useEffect } from "react";

const Audio = (props) => {
  const { audioRef, audioUrl } = props;
  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default Audio;
