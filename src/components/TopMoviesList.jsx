import { useState } from "react"
import List from "./List"
import ResultCard from "./ResultCard"

const TopMoviesList = ({onAddToList,movies,onRemoveFromList}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query);  

    if(query){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchQuery}&include_adultfalse`)
      .then(res=>res.json())
      .then(data=>{
        if(!data.error){
          setResults(data.results)
        }
        else{
                setResults([])
              }
      })
    }
    else{
      setResults([])
    }
  }

  const handleAddToList = (id) => {
    const movie = results.find((result) => result.id === id)
    if(searchQuery.trim() !== ""){
      onAddToList(movie)
      setSearchQuery("")
    }
    setResults([])
  }

  const handleAddToList2 = () => {   
    if(searchQuery.trim() !== ""){
      onAddToList({searchQuery})
      setSearchQuery("")
    }
    setResults([])
  }

  const handleRemoveFromList = (index) => {
    onRemoveFromList(index, 'movies')
  }
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Movies</h2>
      <div className="mb-4 flex items-center">
        <input 
          type="text"
          placeholder="Add movie..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            onClick={handleAddToList2}
            className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
          >
            +
          </button>         
      </div>
      <div>
        {results.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Search Results</h3>
            <ul className="bg-white border border-gray-300 p-4 bg-gradient-to-b from-transparent to-gray-200 bg-contain bg-repeat-y">
              {results.map((result)=>{
                return <ResultCard 
                        key={result.id}
                        onAdd={handleAddToList}
                        movie={result}
                        type = {true}/>
              })}
            </ul>
          </div>
        )}
        <List movies = {movies} onRemove={handleRemoveFromList} type={true}/>
      </div>
    </div>
  )
}
export default TopMoviesList