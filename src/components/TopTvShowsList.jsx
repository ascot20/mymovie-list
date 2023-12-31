import { useState } from "react";
import List from "./List";
import ResultCard from "./ResultCard";

const TopTvShowsList = ({movies, onAddToList,onRemoveFromList}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query);

    if(query){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 
        }
      };
      fetch(`https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
      )
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

  

  const handleRemoveFromList = (index) => {
    onRemoveFromList(index, 'tvShows')
  }
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Tv-Shows</h2>
      <div className="mb-4 flex items-center">
        <input 
          type="text"
          placeholder="Add tv-show..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          
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
                        type={false}/>
              })}
            </ul>
          </div>
        )}
        <List movies = {movies} onRemove={handleRemoveFromList} type={false}/>
      </div>
    </div>
  )
}
export default TopTvShowsList