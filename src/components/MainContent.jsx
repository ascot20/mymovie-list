import { useEffect, useState } from "react"
import TopMoviesList from "./TopMoviesList"
import TopTvShowsList from "./TopTvShowsList"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useSelector } from "react-redux"

const MainContent = ({ selectedItem }) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const { user } = useSelector((store) => store.user)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const userDoc = doc(db, "users", user.uid)
        const userDocSnap = await getDoc(userDoc)
        const userDocData = userDocSnap.data()
        setMovies(userDocData.movies)
        setTvShows(userDocData.tvShows)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchMovies()
  }
    , [])

  const handleAddToMovieList = (movie) => {
    if (movie.title.trim() !== '') {
      setMovies((prevMovies) => [...prevMovies, movie])
      const userDoc = doc(db, "users", user.uid)
      const addToFirestore = async () => {
        try {
          const userDocSnap = await getDoc(userDoc)
          const userDocData = userDocSnap.data()
          await updateDoc(userDoc, { movies: [...userDocData.movies, movie] })
        } catch (error) {
          console.log(error.message)
        }
      }
      addToFirestore()

    }
  }

  const handleAddToShowsList = (movie) => {
    if (movie.name.trim() !== '') {
      setTvShows((prevMovies) => [...prevMovies, movie])
      const userDoc = doc(db, "users", user.uid)
      const addToFirestore = async () => {
        try {
          const userDocSnap = await getDoc(userDoc)
          const userDocData = userDocSnap.data()
          await updateDoc(userDoc, { tvShows: [...userDocData.tvShows, movie] })
        } catch (error) {
          console.log(error.message)
        }
      }
      addToFirestore()

    }
  }



  const handleRemoveFromMovieList = (index, listName) => {
    switch (listName) {
      case 'movies':
        const updatedMovies = movies.filter((_, i) => i !== index)
        setMovies(updatedMovies)
        const userDoc = doc(db, "users", user.uid)
        const removeFromFirestore = async () => {
          try {
            await updateDoc(userDoc, { movies: updatedMovies })
          } catch (error) {
            console.log(error.message)
          }
        }
        removeFromFirestore()
        break;
      case 'tvShows':
        const updatedTvShows = tvShows.filter((_, i) => i !== index)
        setTvShows(updatedTvShows)
        const userDoc2 = doc(db, "users", user.uid)
        const removeFromTvFirestore = async () => {
          try {
            await updateDoc(userDoc2, { tvShows: updatedTvShows})
          } catch (error) {
            console.log(error.message)
          }
        }
        removeFromTvFirestore()
        break;
      default:
        break;
    }
  }


  return (
    <div className="">
      <div className="bg-white shadow rounded-lg p-4 border border-slate-950">
        {selectedItem == 'top movies' && <TopMoviesList movies={movies} onAddToList={handleAddToMovieList} onRemoveFromList={handleRemoveFromMovieList} />}
        {selectedItem == 'top tv-shows' && <TopTvShowsList movies={tvShows} onAddToList={handleAddToShowsList} onRemoveFromList={handleRemoveFromMovieList} />}
      </div>
    </div>

  )
}
export default MainContent