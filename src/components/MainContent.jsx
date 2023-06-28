import { useState } from "react"
import TopMoviesList from "./TopMoviesList"
import TopTvShowsList from "./TopTvShowsList"
import UpcomingList from "./UpcomingList"

const MainContent = ({selectedItem}) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [upcoming, setUpcoming] = useState([])

  const handleAddToMovieList = (movie) => {
    if(movie.trim() !== '') {
      setMovies((prevMovies)=>[...prevMovies, movie])
  
    }
  }

  const handleAddToShowsList = (movie) => {
    if(movie.trim() !== '') {
      setTvShows((prevMovies)=>[...prevMovies, movie])
  
    }
  }

  const handleAddToUpcomingList = (movie) => {
    if(movie.trim() !== '') {
      setUpcoming((prevMovies)=>[...prevMovies, movie])
  
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
      case 'upcoming':
        setUpcoming(prevUpcoming => prevUpcoming.filter((_, i )=> i !== index))
        break;
      default:
        break;
    }
  }

  const handleEditInMovieList = (index, value) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, i) => (i === index ? value : movie))
    );
  };

  const handleEditInShowsList = (index, value) => {
    setTvShows((prevShows) =>
      prevShows.map((show, i) => (i === index ? value : show))
    );
  };

  const handleEditInUpcomingList = (index, value) => {
    setUpcoming((prevUpcoming) =>
      prevUpcoming.map((item, i) => (i === index ? value : item))
    );
  }

  
  return (
    <div className="">
      <div className="bg-white shadow rounded-lg p-4 border border-slate-950">
        {selectedItem == 'top movies' && <TopMoviesList movies={movies} onAddToList={handleAddToMovieList} onRemoveFromList={handleRemoveFromMovieList} onEdit={handleEditInMovieList}/>}
        {selectedItem == 'top tv-shows' && <TopTvShowsList movies={tvShows} onAddToList={handleAddToShowsList} onRemoveFromList={handleRemoveFromMovieList} onEdit={handleEditInShowsList}/>}
        {selectedItem == 'upcoming' && <UpcomingList movies={upcoming} onAddToList={handleAddToUpcomingList} onRemoveFromList={handleRemoveFromMovieList} onEdit={handleEditInUpcomingList}/>}
      </div>
    </div>
    
  )
}
export default MainContent