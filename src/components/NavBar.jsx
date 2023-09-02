
import { useEffect, useState } from 'react'
import profile from '../assets/profile.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import profile3 from '../assets/profile3.png'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.png'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const NavBar = ({username,likes}) => {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)

  const handleTransition = () => {
    if (window.scrollY > 50) {
      setShow(true);
    }
    else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleTransition)
    return () => window.removeEventListener('scroll', handleTransition)
  }, [])

  const toggleMenu = () => {
    setHide(!hide);
  }

  const getRandomIcon = () => {
    const icons = [profile,profile1,profile2,profile3,profile4,profile5]
    const randomIndex = Math.floor(Math.random() * icons.length)
    return icons[randomIndex]
  }
  return (
    <div className={`fixed top-0 ${show && 'bg-slate-950'} w-screen h-14 p-3 px-6 z-1 ease-in transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/`}>        
        <h1 className={`${show ? ' text-slate-50' : 'text-slate-900'} font-mono cursor-pointer`}>MyMovieList🍿</h1>
        </Link>
        <div className="flex items-center justify-center space-x-2" onClick={toggleMenu}>          
          <img src={getRandomIcon()} alt="logo" className="w-7 cursor-pointer" />
          <p className="text-indigo-600 cursor-pointer overflow-clip whitespace-nowrap max-w-[120px]">{username}</p>
          <p className={`cursor-pointer ${show?' text-slate-50' : 'text-slate-900'}`}>❤️{likes}</p>
        </div>
      </div>
      {hide || (
        <div className="fixed top-10 right-2 sm:right-4 mt-2 bg-green-300 w-44 py-2 px-4 rounded-md">
          <ul className="flex flex-col space-y-2">
            <li className='text-slate-900 px-3 rounded-md block cursor-pointer' onClick={()=>auth.signOut()}>
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default NavBar