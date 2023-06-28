import { useState } from 'react'
import MainContent from '../components/MainContent'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Explore from '../components/Explore'

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState('top movies')

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }
  return (
    <div className='bg-gray-100'>
      <NavBar />
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