import { useState } from "react"
import SideBarItem from "./SideBarItem"

const SideBar = ({onItemClick}) => {
    const [activateItem, setactivateItem] = useState('top movies')

    const handleItemClick = (item) => {
        setactivateItem(item)
        onItemClick(item)
    }
  return (
    <aside className="bg-white shadow rounded-lg p-4 border border-slate-950">
        <h3 className="text-xl font-semibold mb-4">My Movie List</h3>
        <ul>

        <SideBarItem
        label = "Top Movies"
        icon = "⭐"
        active = {activateItem === 'top movies'}
        onClick = {() => handleItemClick('top movies')}
        />
        <SideBarItem
        label = "Top Tv-Shows"
        icon = "🔥"
        active = {activateItem === 'top tv-shows'}
        onClick = {() => handleItemClick('top tv-shows')}
        />
        </ul>
    </aside>
  )
}
export default SideBar