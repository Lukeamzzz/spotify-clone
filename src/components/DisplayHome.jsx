import NavBar from './NavBar.jsx';
import {albumsData, songsData} from '../assets/assets';
import AlbumItem from './AlbumItem.jsx';
import SongItem from './SongItem.jsx';
import Selector from './Selector.jsx';

function DisplayHome(){
    return(
        <>
            <NavBar/>
            <Selector/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl ">Recommended for today</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
                </div>
            </div>
        </>
    ); 
}

export default DisplayHome