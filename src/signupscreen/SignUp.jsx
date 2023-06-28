import { useRef, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase'
import NavBarSignUp from "./NavBar"
import Login from "../loginscreen/Login"

const SignUp = () => {
    const emailRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [showLogIn, setshowLogIn] = useState(false)


    const onSignup = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => { const user = userCredential.user })
            .catch((err) => {
                alert(err.message)
            })
    }

    const onLogin = (e) => {
        e.preventDefault()
        setshowLogIn(true)
    }

    if (showLogIn) {
        return <Login />
    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <NavBarSignUp onLogin={onLogin} />
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="container mx-auto w-1/2 text-center mb-4">
                    <h2 className=" text-lg sm:text-xl font-mono font-bold mb-2 text-indigo-400">Welcome to MyMovieList</h2>
                    <p className="text-sm sm:text-base text-gray-600">Create and manage your personalized list of top movies and TV shows. Explore other users' lists to discover new recommendations and connect with fellow movie enthusiasts.</p>
                </div>
                <div className="bg-white rounded-lg mb-2 shadow-md p-8 border border-slate-950">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
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
                            <label htmlFor="username" className="text-lg mb-1 block">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={usernameRef}
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
                            onClick={onSignup}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp