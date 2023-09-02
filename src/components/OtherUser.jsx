import { useEffect, useState } from "react"
import Explore from "./Explore"
import { useSelector } from "react-redux"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const OtherUser = ({selectedUser}) => {
    const [displayExplore,setdisplayExplore] = useState(false)
    const [liked, setLiked] = useState(false)
    const {user} = useSelector((store)=>store.user)

    useEffect(()=>{
        const isLiked = selectedUser.likes.find((like)=> like === user.uid)

        if(isLiked){
            setLiked(true)
        }
    },[]);

    if (displayExplore){
        return <Explore/>
    }

    const handleLiked = () => {
        const userDoc = doc(db,'users',selectedUser.id)
        if (liked === false){       
            setLiked(true)    
            const addLike = async()=>{
                try {
                    const userDocSnap = await getDoc(userDoc)
                    const userDocData = userDocSnap.data()
                    await updateDoc(userDoc,{likes:[ ...userDocData.likes, user.uid]})
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
            addLike()
        }

        else{
            const updatedList = selectedUser.likes.filter((like)=>like !== user.uid)
            setLiked(false)
            const removeLike = async()=>{
                try {
                    await updateDoc(userDoc,{likes:updatedList})
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
            removeLike()
        }
    }

  return (
    <div>
      <div className=" bg-white shadow rounded-lg p-4 border border-slate-950">
        <div className=" flex items-center">
      <button className=" text-xs ml-auto " onClick={()=>setdisplayExplore(true)}>
                ❌
    </button>
        </div>
    <div className="flex items-center mt-4">
      <h3 className="text-xl font-semibold overflow-clip whitespace-nowrap max-w-[120px]">{selectedUser.username}</h3>
      <p className="ml-auto cursor-pointer" onClick={handleLiked}><span>{liked?'❤️': '🤍'}</span></p>
    </div>
        <h3 className=" font-mono text-sm mt-4">Top Movies</h3>
        {selectedUser.movies.length ===0?(
            <p className=" text-xs text-indigo-600">No movies added yet.</p>
        ):(
            <div className="mt-2">
            {selectedUser.movies.map((movie)=>
                <div className="flex items-center mt-2" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="mr-2 w-8 rounded-sm"/>
                    <p className="ml-2 text-sm">{movie.title}</p>
                </div>
            )}
        </div>
        )}
        
        <h3 className=" font-mono text-sm mt-4">Top Tv-Shows</h3>
        {selectedUser.tvShows.length === 0?(<p className=" text-xs text-indigo-600">No shows added yet.</p>):(
            <div className="mt-2">
            {selectedUser.tvShows.map((show)=>
                <div className="flex items-center mt-2" key={show.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={show.name} className="mr-2 w-8 rounded-sm"/>
                    <p className="ml-2 text-sm">{show.name}</p>
                </div>
            )}
        </div>
        )}
        
      </div>
    </div>
  )
}
export default OtherUser