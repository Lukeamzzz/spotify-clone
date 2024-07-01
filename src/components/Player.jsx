import {useContext} from 'react';
import {assets} from '../assets/assets'
import {PlayerContext} from '../context/PlayerContext';

function Player(){
    const {seekBar, seekBg, playStatus, play, pause, song, time, formatTime, prevSong, nextSong, seekSong} = useContext(PlayerContext);
    return(
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12 rounded-sm" src={song.image} alt="Album cover"/>
                <div>
                    <p className="text-sm">{song.name}</p>
                    <p className="text-xs text-gray-400">{song.desc.slice(0,12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-5">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle icon"/>
                    <img onClick={prevSong} className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous icon"/>
                    {playStatus 
                    ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="Pause icon"/>
                    : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="Play icon"/>}
                    <img onClick={nextSong} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next icon"/>
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop icon"/>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <p className="text-xs text-gray-400">{formatTime(time.currentTime.minute)}:{formatTime(time.currentTime.second)}</p>
                    <div onClick={seekSong} ref={seekBg} className="w-[60vw] max-w-[400px] bg-gray-500 rounded-full cursor-pointer">
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-600 rounded-full"/>
                    </div>
                    <p className="text-xs text-gray-400">{formatTime(time.totalTime.minute)}:{formatTime(time.totalTime.second)}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-3 opacity-75">
                <img className="w-4" src={assets.plays_icon} alt="Plays icon"/>
                <img className="w-4" src={assets.mic_icon} alt="Microphone icon"/>
                <img className="w-4" src={assets.queue_icon} alt="Queue icon"/>
                <img className="w-4" src={assets.speaker_icon} alt="Speaker icon"/>
                <img className="w-4" src={assets.volume_icon} alt="Volume icon"/>
                <div className="w-20 bg-gray-500 h-1 rounded">
                    <hr className="h-1 border-none w-9 bg-white rounded-full"/>
                </div>
                <img className="w-4" src={assets.zoom_icon} alt="Zoom icon"/>
            </div>
        </div>
    );
}

export default Player