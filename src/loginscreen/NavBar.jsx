import { useEffect, useState } from "react";

const NavBarLogin = ({onSignup}) => {
  const [show, setShow] = useState(false)

  const handleTransition = () => {
    if (window.scrollY > 10) {
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

  return (
    <div className={`fixed top-0 ${show && 'bg-slate-950'} w-screen h-14 p-3 px-6 z-1 ease-in transition-all`}>
      <div className="container mx-auto flex justify-between items-center">              
        <h1 className={`${show ? ' text-slate-50' : 'text-slate-900'} font-mono cursor-pointer`}>MyMovieList</h1>
        <div className="flex items-center justify-center">          
          <button onClick={onSignup} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Sign Up</button>
        </div>
      </div>      
    </div>
  )
}
export default NavBarLogin
