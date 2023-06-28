const SideBarItem = ({label, icon, active, onClick}) => {
  return (
    <li className={`flex items-center space-x-2 cursor-pointer ${active ? ' text-indigo-600' :' text-gray-700'}`} onClick={onClick}>
        <p>{icon}</p>
        <span>{label}</span>
    </li>
  )
}
export default SideBarItem