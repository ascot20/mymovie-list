import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeScreen from './homescreen/HomeScreen.jsx';
import ErrorScreen from './errorscreen/ErrorScreen';
import Login from './loginscreen/Login';
import {auth} from "./firebase.js"
import { useEffect } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice.js";


const App = () => {
    const {user} = useSelector((store) =>store.user) 
    const dispatch = useDispatch()

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
        if(userAuth){
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
            displayName:userAuth.displayName,
          }))
        }else{
          dispatch(logout())
        }
      })
      return unsubscribe
    },[dispatch])
    return (
      <BrowserRouter>
      {!user? (
        <Login/>
      ):(
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/*" element={<ErrorScreen />} />
      </Routes>
        )}
        
      </BrowserRouter>
    )
  }

  export default App;