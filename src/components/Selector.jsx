
function Selector(){
    return(
        <div className="flex items-center gap-2 mt-4">
            <p className="bg-white text-black px-4 py-1 rounded-2xl text-sm cursor-pointer">All</p>
            <p className="bg-gray-400 bg-opacity-10 text-white px-4 py-1 rounded-2xl text-sm cursor-pointer">Music</p>
            <p className="bg-gray-400 bg-opacity-10 text-white px-4 py-1 rounded-2xl text-sm cursor-pointer">Podcasts</p>
         </div>
    );
}

export default Selector