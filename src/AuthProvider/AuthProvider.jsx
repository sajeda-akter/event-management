import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/fairebase.config";
import { createUserWithEmailAndPassword,updateProfile,signInWithPopup,signInWithEmailAndPassword,onAuthStateChanged,signOut, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const googleSignin=()=>{
       return signInWithPopup(auth,googleProvider)

    }

    const githubSignin=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const userUpdate=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
                displayName:name,
                photoURL:photoURL
        })
    }
    useEffect(()=>{
        const unSubcribe=onAuthStateChanged(auth,currentUser=>{
            console.log('obserb ')
            setLoading(false)
            setUser(currentUser)
        })
        return (()=>unSubcribe())
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={
        user,
        loading,
        createUser,
        userSignin,
        logOut,
        googleSignin,
        githubSignin,
        userUpdate

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;