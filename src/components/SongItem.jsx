import {useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext';

function SongItem({name, image, desc, id}){
    const {playWithId} = useContext(PlayerContext);
    
    return(
        <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer transition duration-300 hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="Mix cover" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-gray-400 text-xs">{desc}</p>
        </div>
    );
}

export default SongItem