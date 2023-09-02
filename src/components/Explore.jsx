import { collection, getDocs,orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import profile from '../assets/profile.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.png'
import User from "./User"
import OtherUser from "./OtherUser"

function Explore() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [displayOtherUser, setDisplayOtherUser] = useState(false)

  useEffect(()=>{
    const fetchUsers = async()=>{
      try {
        const usersCollection = collection(db,"users")
        const usersQuery = query(
          usersCollection,
          orderBy("likes","desc")
        )
        const usersSnapshot = await getDocs(usersQuery)
        const usersData = usersSnapshot.docs.map((doc)=>doc.data())
        setUsers(usersData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchUsers()
  },[])

  const getRandomIcon = () => {
    const icons = [profile,profile1,profile2,profile3,profile4,profile5]
    const randomIndex = Math.floor(Math.random() * icons.length)
    return icons[randomIndex]
  }

  const handleOnclickUser = (user)=>{
    setSelectedUser(user)
    setDisplayOtherUser(true)
  }

  if(displayOtherUser) {
    return <OtherUser selectedUser={selectedUser}/>
  }

  return (
    <div className="">
      <div className="bg-white shadow rounded-lg p-4 border border-slate-950">
      <h3 className="text-xl font-semibold mb-4">Explore</h3>
      {users.map((user)=>{
        return <User
         key={user.id} 
         icon={getRandomIcon}
         user={user} 
         username={user.username} 
         likes={user.likes.length}
         selectUser={handleOnclickUser}/>
      })}
      </div>
    </div>
  )
}
export default Explore