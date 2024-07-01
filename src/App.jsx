import Sidebar from './components/Sidebar.jsx';
import Player from './components/Player.jsx';
import Display from './components/Display.jsx';
import React, {useContext} from 'react';
import {PlayerContext} from './context/PlayerContext.jsx';

function App(){
  const {audioRef, song} = useContext(PlayerContext);

  return(
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={song.file} preload="auto"></audio>
    </div>
  );
}

export default App