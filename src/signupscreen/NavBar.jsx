const NavBarSignUp = ({onLogin}) => {
  return (
    <div className='top-0 w-screen h-14 p-3 px-6 z-1 ease-in transition-all'>
      <div className="container mx-auto flex justify-between items-center">              
        <h1 className='text-slate-900 font-mono cursor-pointer'>MyMovieList</h1>
        <div className="flex items-center justify-center">          
          <button onClick={onLogin} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Log In</button>
        </div>
      </div>      
    </div>
  )
}
export default NavBarSignUp