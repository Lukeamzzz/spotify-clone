import {useParams} from 'react-router-dom';
import {albumsData, assets, songsData} from '../assets/assets.js';
import NavBar from './NavBar.jsx';
import {useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext.jsx';

function DisplayAlbum(){
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
    
    return(
        <>
            <NavBar/>
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className='w-32 rounded' src={albumData.image} alt="Cover image"/>
                <div className="flex flex-col">
                    <p className="text-xs text-gray-400">Public Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4 className="text-xs text-gray-400">{albumData.desc}</h4>
                    <p className="mt-1">
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="Spotify logo"/>
                        <b className="text-xs"> Spotify</b>
                        <b className="text-xs text-gray-400 font-light"> • 1,323,154 likes • 50 songs, 2 hr 47 min</b>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-xs font-light">
                <p>
                    <b className="mr-4">#</b>Title
                </p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="Clock icon"/>
            </div>
            <hr className="border-gray-500"/>
            {
                songsData.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7] font-light text-sm">{index+1}</b>
                            <img className="inline w-9 mr-5 rounded" src={item.image} alt="Song image"/>
                            <b className="text-sm font-light">{item.name}</b>
                        </p>
                        <p className="text-[#a7a7a7] text-xs font-light">{albumData.name}</p>
                        <p className="text-[#a7a7a7] text-xs font-light hidden sm:block">5 days ago</p>
                        <p className="text-[#a7a7a7] text-xs font-light text-center">{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
}

export default DisplayAlbum