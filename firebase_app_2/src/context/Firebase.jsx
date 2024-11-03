import {createContext,useContext} from "react"
import { initializeApp } from "firebase/app"
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {getDatabase,set,ref} from  "firebase/database"
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL: import.meta.env.VITE_databaseURL
}
const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth=getAuth(firebaseApp)
const database=getDatabase(firebaseApp)

const FirebaseContext=createContext(null);

export const FirebaseProvider=(props)=>{

    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    const signinUserWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password)
    }

    const signinWithGoogle=()=>{
        const googleProvider=new GoogleAuthProvider();
        return signInWithPopup(firebaseAuth,googleProvider);
    }

    const putData=(key,data)=>set(ref(database,key),data)
    return(
        <FirebaseContext.Provider value={{signinUserWithEmailAndPassword,signupUserWithEmailAndPassword,signinWithGoogle,putData}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


//custom hook
export const useFirebase=()=>useContext(FirebaseContext)
