import { useState } from "react"
import TopMoviesList from "./TopMoviesList"
import TopTvShowsList from "./TopTvShowsList"

const MainContent = ({selectedItem}) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])

  const handleAddToMovieList = (movie) => {
    if(movie.title.trim() !== '') {
      setMovies((prevMovies)=>[...prevMovies, movie])
  
    }
  }

  const handleAddToShowsList = (movie) => {
    if(movie.name.trim() !== '') {
      setTvShows((prevMovies)=>[...prevMovies, movie])
  
    }
  }

  

  const handleRemoveFromMovieList = (index, listName) => {
    switch (listName) {
      case 'movies':
        setMovies((prevMovies) => prevMovies.filter((_, i )=> i !== index))
        break;
      case 'tvShows':
        setTvShows(prevShows => prevShows.filter((_, i )=> i !== index))
        break;
      default:
        break;
    }
  }

  
  return (
    <div className="">
      <div className="bg-white shadow rounded-lg p-4 border border-slate-950">
        {selectedItem == 'top movies' && <TopMoviesList movies={movies} onAddToList={handleAddToMovieList} onRemoveFromList={handleRemoveFromMovieList}/>}
        {selectedItem == 'top tv-shows' && <TopTvShowsList movies={tvShows} onAddToList={handleAddToShowsList} onRemoveFromList={handleRemoveFromMovieList}/>}
      </div>
    </div>
    
  )
}
export default MainContent