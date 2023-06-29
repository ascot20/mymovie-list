
import { useEffect, useState } from 'react'
import logo from '../assets/me.png'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const NavBar = () => {
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
  return (
    <div className={`fixed top-0 ${show && 'bg-slate-950'} w-screen h-14 p-3 px-6 z-1 ease-in transition-all`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/`}>        
        <h1 className={`${show ? ' text-slate-50' : 'text-slate-900'} font-mono cursor-pointer`}>MyMovieList</h1>
        </Link>
        <div className="flex items-center justify-center">          
          <img src={logo} alt="logo" className="w-7 cursor-pointer" onClick={toggleMenu}/>
        </div>
      </div>
      {hide || (
        <div className="fixed top-14 right-2 mt-2 bg-green-300 w-44 py-2 px-4 rounded-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to={`/`} className='text-slate-900 px-3 rounded-md block'>Home</Link>
            </li>
            <li>
              <Link to={`explore`} className='text-slate-900 px-3 rounded-md block'>Explore</Link>
            </li>
            <li className='text-slate-900 px-3 py-2 rounded-md block cursor-pointer' onClick={()=>auth.signOut()}>
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default NavBar