import { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Explore from '../components/Explore'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState('top movies')
  const [username,setUsername] = useState('')
  const [likes,setLikes] = useState(0)
  const {user} = useSelector((store)=>store.user)

  useEffect(()=>{
    const fetchUserInfo = async ()=>{
      try {
        const userDoc = doc(db,"users",user.uid)
        const userDocSnap = await getDoc(userDoc)
        const userDocData = userDocSnap.data()
        setUsername(userDocData.username)
        setLikes(userDocData.likes.length)       
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchUserInfo()
  },[])

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }
  return (
    <div className='bg-gray-100'>
      <NavBar username={username} likes={likes}/>
      <div className='container mx-auto px-4 py-16 sm:px-6'>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-1">
            <SideBar onItemClick={handleItemClick} />
          </div>
          <div className="sm:col-span-2">
            <MainContent selectedItem={selectedItem} />
          </div>
          <div className="sm:col-span-1">
            <Explore />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeScreen