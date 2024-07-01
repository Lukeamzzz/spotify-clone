import React, {createContext, useEffect, useRef, useState} from 'react';
import {songsData} from '../assets/assets';

export const PlayerContext = createContext();

function PlayerContextProvider(props){
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [song, setSong] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime:{
            second: 0,
            minute: 0
        }
    });

    const formatTime = (time) => {
        return String(time).padStart(2, '0');
    };

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setSong(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const prevSong = async () => {
        if(song.id > 0){
            await setSong(songsData[song.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const nextSong = async () => {
        if(song.id < songsData.length - 1){
            await setSong(songsData[song.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
        
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor((audioRef.current.currentTime/audioRef.current.duration) * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        song, setSong,
        playStatus, setPlayStatus,
        time, setTime, formatTime,
        play, pause,
        playWithId,
        prevSong, nextSong,
        seekSong
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export default PlayerContextProvider