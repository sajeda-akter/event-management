import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/fairebase.config";
import { createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,onAuthStateChanged,signOut, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignin=(email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const googleSignin=()=>{
       return signInWithPopup(auth,googleProvider)

    }

    const githubSignin=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,currentUser=>{
            console.log('obserb ')
            setUser(currentUser)
        })
        return (()=>unSubcribe())
    },[])
    const logOut=()=>{
        return signOut(auth)
    }

    const authInfo={
        user,
        createUser,
        userSignin,
        logOut,
        googleSignin,
        githubSignin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;