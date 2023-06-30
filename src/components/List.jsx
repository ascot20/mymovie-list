import none from '../assets/none.png'

const List = ({ movies, onRemove,type }) => {

  return (
    <div className=" bg-white border border-gray-300 p-4 bg-gradient-to-b from-transparent to-gray-200 bg-contain bg-repeat-y">
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul className=" list-disc pl-4">
          {movies.map((movie, index) => {
            return <li key={index} className="mb-2 pb-2 border-b flex justify-between items-center">
              <div className="flex items-center justify-between">
                {movie.poster_path? (
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={type?movie.title:movie.name} className="mr-2 w-16 rounded-lg" />
                ):
                <img src={none} alt={type?movie.title:movie.name} className="mr-2 w-16 h-20 rounded-lg" />
                }
                <div>
                  <h6 className=" text-sm sm:text-base font-normal mb-2">{type?movie.title:movie.name}</h6>
                </div>
              </div>
              <div className="flex">
                <button className="text-red-500 hover:txt-red-700" onClick={() => onRemove(index)}>
                ❌
                </button>
              </div>
            </li>
          })}
        </ul>
      )}
    </div>
  )
}
export default List