import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Firebase/congig';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [stay, setStay] = useState(true)

    const createUser = (email, password) => {
        setStay(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setStay(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setStay(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setStay(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        createUser,
        loginUser,
        logout,
        user,
        stay
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};


export default AuthProvider;