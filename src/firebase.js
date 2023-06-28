import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAEInUIykVKi6xJaGa5Cgiv5VaBoEKH54M",
    authDomain: "mymovielist-2f27c.firebaseapp.com",
    projectId: "mymovielist-2f27c",
    storageBucket: "mymovielist-2f27c.appspot.com",
    messagingSenderId: "560425406328",
    appId: "1:560425406328:web:c7620d7200524faa33428d",
    measurementId: "G-4CGSPM75DQ"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

export {auth, db}