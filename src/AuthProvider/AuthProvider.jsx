import { createContext } from "react";
import { auth } from "../firebase/fairebase.config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignin=(email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const authInfo={
        createUser,
        userSignin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;