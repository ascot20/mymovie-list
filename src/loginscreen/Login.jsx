import { useRef, useState } from "react"
import NavBarLogin from "./NavBar"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import SignUp from "../signupscreen/SignUp"


const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [showSignup, setShowSignup] = useState(false)

    const onLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
            .then(() => {})
            .catch((err) => alert(err.message))
            
            
            
    }

    const onSignup = (e) => {
        e.preventDefault()
        setShowSignup(true)
    }

    if(showSignup) {
        return <SignUp/>
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <NavBarLogin onSignup={onSignup} />
            <div className="flex flex-col items-center mt-2 sm:mt-20 justify-center flex-grow">
            <div className="container mx-auto sm:w-1/2 text-center mb-4 p-4">
                    <h2 className=" text-lg sm:text-xl font-mono font-bold mb-2 text-indigo-400">Welcome to MyMovieList</h2>
                    <p className="text-sm sm:text-base text-gray-600">Create and manage your personalized list of top movies and TV shows. Explore other users' lists to discover new recommendations and connect with fellow movie enthusiasts.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md mb-2 p-8 border border-slate-950">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form className="w-64 space-y-4">
                        <div>
                            <label htmlFor="email" className="text-lg mb-1 block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                ref={emailRef}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                                required />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-lg mb-1 block">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                ref={passwordRef}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                                required />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full"
                            onClick={onLogin}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login