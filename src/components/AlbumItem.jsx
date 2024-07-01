import {useNavigate} from 'react-router-dom';

function AlbumItem({image, name, desc, id}){
    const navigate = useNavigate(); // navigate to different pages (is called when we click an album)

    return(
        <div onClick={() => navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer transition duration-300 hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt=""/>
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-gray-400 text-xs">{desc}</p>
        </div>
    );
}

export default AlbumItem