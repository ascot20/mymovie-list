const ResultCard = ({movie,onAdd}) => {
  return (
    <li className="flex items-center justify-between mb-2 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
            {movie.poster_path &&(
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mr-2 w-16 rounded-lg" />
            )}
            <div>
            <h6 className=" text-sm sm:text-base font-normal mb-2">{movie.title}</h6>
            <p className="text-gray-600">{movie.release_date.substring(0,4)}</p>
            </div>
        </div>
            <button 
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1"
            onClick={onAdd}
            >
                +
            </button>
        
    </li>
  )
}
export default ResultCard