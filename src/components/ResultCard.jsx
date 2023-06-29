import none from '../assets/none.png'

const ResultCard = ({movie,onAdd,type}) => {
  return (
    <li className="flex items-center justify-between mb-2 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
            {movie.poster_path?(
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={type?movie.tile : movie.name} className="mr-2 w-16 rounded-lg" />
            ):
            <img src={none} alt={type?movie.title:movie.name} className="mr-2 w-16 h-20 rounded-lg" />
            }
            <div>
            <h6 className=" text-sm sm:text-base font-normal mb-2">{type?movie.title:movie.name}</h6>
            <p className="text-gray-600">{type?movie.release_date.substring(0,4):movie.first_air_date.substring(0,4)}</p>
            </div>
        </div>
            <button 
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-2 py-1"
            onClick={()=>onAdd(movie.id)}
            >
                +
            </button>
        
    </li>
  )
}
export default ResultCard